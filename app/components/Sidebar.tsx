import React from "react";
import Image from "next/image";
import { IconEditCircle } from "@tabler/icons-react";

const Sidebar = () => {
  return (
    <div className="h-[95%] lg:w-1/5 sm:w-full p-4 outline-1 outline-slate-400 outline rounded-lg self-center ml-2">
      <button className="w-full flex gap-2 align-middle items-center hover:bg-slate-300 p-2 rounded-md">
        <Image
          src="/logos/logo.png"
          height={40}
          width={40}
          alt="logo"
          className="rounded-full"
        />
        <span>New Chat</span>
        <IconEditCircle className="ml-auto" />
      </button>
    </div>
  );
};

export default Sidebar;
