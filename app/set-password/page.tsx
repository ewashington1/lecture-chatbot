"use client";

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { fetchX } from "../lib/functions/fetchX";

const page = () => {
  const router = useRouter();

  //handle errors acordingly here and on the backend
  const changePasswordRequest = async () => {
    await fetchX(
      "/api/users/set-password",
      "PUT",
      { password: password },
      { cache: "no-store" }
    )
      .then(() => {
        router.push("/dashboard");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const [password, setPassword] = useState<string | undefined>(undefined);

  return (
    <main className="bg-slate-100 flex min-h-screen flex-col items-center justify-center p-24 text-slate-700">
      {/* card */}
      <form className="flex flex-col gap-3 w-1/2 h-1/2 shadow-md p-5 rounded-lg outline-1 outline-slate-300 outline">
        <h1>Please set your password for the email that you logged in with.</h1>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          placeholder="Password"
          label="Password"
          helperText="We strongly recommend these recommendations for your password."
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={changePasswordRequest}
          disabled={password ? false : true}
          aria-disabled
        >
          Save
        </Button>
      </form>
    </main>
  );
};

export default page;
