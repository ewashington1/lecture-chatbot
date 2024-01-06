"use client";

import { Link } from "@mui/material";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className="bg-slate-100 flex min-h-screen flex-col items-center justify-center p-24 text-slate-700">
      <div className="flex flex-col items-center font-semibold gap-3 w-3/4 h-1/2 shadow-md p-5 rounded-lg outline-1 outline-slate-300 outline">
        Thank you for joining! Please check your email to verify your account!
        <div className="flex flex-row w-full justify-center gap-3">
          <button
            className="p-3 outline outline-1 outline-slate-300 rounded-full shadow-md"
            onClick={() => window.open("https://outlook.office.com", "_blank")}
          >
            <Image src={"/logos/outlook.png"} height={25} width={25} alt="" />
          </button>
          <button
            className="p-3 outline outline-1 outline-slate-300 rounded-full shadow-md"
            onClick={() => window.open("https://gmail.com", "_blank")}
          >
            <Image src={"/logos/gmail.png"} height={25} width={25} alt="" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
