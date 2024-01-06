import clientPromise from "@/app/api/lib/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt");
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route";

export async function PUT(req: NextRequest) {
  try {
    console.count("Set password hit");
    const session = await getServerSession(AuthOptions);
    console.log(session);
    const body = await req.json();
    const rawPassword = body.password;

    const saltRounds = 10;

    const client = await clientPromise;
    const db = client.db("lecture-chatbot");

    await bcrypt.hash(
      rawPassword,
      saltRounds,
      async function (err: any, hash: string) {
        if (err) {
          const error = { error: "Password hashing error" };
          console.count(error.error);
          return NextResponse.json(error, { status: 500 });
        }
        // Store hash in your password DB.
        const client = await clientPromise;
        const db = client.db("lecture-chatbot");

        await db.collection("users").updateOne(
          { _id: new ObjectId(session?.user.id as string) },
          {
            $set: { password: hash },
          }
        );
      }
    );

    return NextResponse.json(
      { message: "Successfully updated password!" },
      { status: 200 }
    );
  } catch (err) {
    const error = { error: "Set password error" };
    console.count(error.error);
    return NextResponse.json(error, { status: 500 });
  }
}
