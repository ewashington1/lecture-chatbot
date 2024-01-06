"use client";

import { Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  return (
    <main className="bg-slate-100 flex min-h-screen flex-col items-center justify-center p-24 text-slate-700">
      <div className="flex flex-col gap-3 w-1/2 h-1/2 shadow-md p-5 rounded-lg outline-1 outline-slate-300 outline">
        <CredentialsForm />
        <hr />
        <EmailForm />
      </div>
    </main>
  );
};

//email form
const isValidEmail = (input: string | null): boolean => {
  const eduEmailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+edu$/;
  return eduEmailRegex.test(input || "");
};

const CredentialsForm = () => {
  const [emailInput, setEmailInput] = useState<string | null>(null);
  const [passwordInput, setPasswordInput] = useState<string | null>(null);

  // const router = useRouter();
  return (
    <form className="flex flex-col gap-3 " onSubmit={(e) => e.preventDefault()}>
      Sign in with an existing email:
      <TextField
        variant="outlined"
        placeholder="name@example.edu"
        label="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmailInput(e.target.value)
        }
        error={emailInput ? !isValidEmail(emailInput) : false}
        helperText={
          !isValidEmail(emailInput) &&
          emailInput &&
          "Must be a valid university email address with a .edu extension"
        }
      />
      <TextField
        variant="outlined"
        placeholder="Password"
        label="Password"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordInput(e.target.value)
        }
        required={true}
      />
      <Button
        disabled={isValidEmail(emailInput) && passwordInput ? false : true}
        variant="contained"
        type="submit"
        onClick={() =>
          signIn("credentials", {
            email: emailInput,
            password: passwordInput,
            callbackUrl: "http://localhost:3000/dashboard",
          })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
              alert("Sign in error");
            })
        }
      >
        Sign In
      </Button>
    </form>
  );
};

const EmailForm = () => {
  const [emailInput, setEmailInput] = useState<string | null>(null);
  const router = useRouter();
  return (
    <form className="flex flex-col gap-3 " onSubmit={(e) => e.preventDefault()}>
      Sign up:
      <TextField
        variant="outlined"
        placeholder="name@example.edu"
        label="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmailInput(e.target.value)
        }
        error={emailInput ? !isValidEmail(emailInput) : false}
        helperText={
          !isValidEmail(emailInput) &&
          emailInput &&
          "Must be a valid university email address with a .edu extension"
        }
      />
      <Button
        disabled={isValidEmail(emailInput) ? false : true}
        variant="contained"
        type="submit"
        onClick={() =>
          signIn("email", {
            email: emailInput,
            callbackUrl: "http://localhost:3000/",
            redirect: false,
          })
            .then((res) => {
              router.push("/validate-email");
            })
            .catch((err) => {
              console.log(err);
              alert("Sign in error");
            })
        }
      >
        Sign Up
      </Button>
    </form>
  );
};

export default page;
