"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  function redirectToSignIn() {
    router.replace("/api/auth/signin");
  }

  if (
    pathname === "/sign-up" ||
    pathname === "/sign-in" ||
    pathname === "/validate-email"
  ) {
    return;
  }

  return (
    <div className="w-full flex justify-end p-2 bg-slate-200 items-center gap-2">
      {session && session.user ? (
        // authenticated
        <>
          <p className="text-black">Signed in as {session?.user?.email}</p>
          <Button onClick={() => signOut()} variant="outlined">
            Sign Out
          </Button>
        </>
      ) : (
        // unauthenticated
        <>
          <Button onClick={redirectToSignIn} variant="outlined">
            Get started
          </Button>
          <Button onClick={redirectToSignIn} variant="contained">
            Sign In
          </Button>
        </>
      )}
    </div>
  );
};

export default NavBar;
