"use client";

import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { IconSend2 } from "@tabler/icons-react";
import { Message } from "@/types";
import { IconUserCircle } from "@tabler/icons-react";
import { IconPrompt } from "@tabler/icons-react";

const initialMessages: Message[] = [
  { text: "Hi", sender: "You" },
  {
    text: "Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! ",
    sender: "Chatbot",
  },
  {
    text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    sender: "You",
  },
  {
    text: "I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! ",
    sender: "Chatbot",
  },
  { text: "Hi", sender: "You" },
  {
    text: "Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! ",
    sender: "Chatbot",
  },
  {
    text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    sender: "You",
  },
  {
    text: "I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! ",
    sender: "Chatbot",
  },
  { text: "Hi", sender: "You" },
  {
    text: "Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! ",
    sender: "Chatbot",
  },
  {
    text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    sender: "You",
  },
  {
    text: "I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! ",
    sender: "Chatbot",
  },
  { text: "Hi", sender: "You" },
  {
    text: "Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! ",
    sender: "Chatbot",
  },
  {
    text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    sender: "You",
  },
  {
    text: "I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! ",
    sender: "Chatbot",
  },
  { text: "Hi", sender: "You" },
  {
    text: "Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! ",
    sender: "Chatbot",
  },
  {
    text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    sender: "You",
  },
  {
    text: "I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! ",
    sender: "Chatbot",
  },
  { text: "Hi", sender: "You" },
  {
    text: "Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! ",
    sender: "Chatbot",
  },
  {
    text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    sender: "You",
  },
  {
    text: "I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! ",
    sender: "Chatbot",
  },
  { text: "Hi", sender: "You" },
  {
    text: "Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! Hello there! ",
    sender: "Chatbot",
  },
  {
    text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    sender: "You",
  },
  {
    text: "I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! I'm doing well, thanks! ",
    sender: "Chatbot",
  },
];

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([...initialMessages]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="lg:w-full h-full max-h-full flex flex-col gap-4">
      {/* chats section */}
      <div className="flex w-full overflow-y-scroll overflow-x-clip justify-center chat-scrollbar">
        <div className="flex flex-col w-1/2 gap-8">
          {messages.map((message, idx) => {
            return (
              <div key={idx} className="flex gap-2">
                <div>
                  {message.sender === "You" ? (
                    <IconUserCircle width={24} height={24} />
                  ) : (
                    <IconPrompt width={24} height={24} />
                  )}
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="font-semibold">{message.sender}</div>
                  <div>{message.text}</div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef}></div>
        </div>
      </div>

      {/* message input box */}
      <div className="flex outline-1 outline outline-slate-300 rounded-md w-1/2 mx-auto mt-auto">
        <TextField
          // sx allows you to override css styles
          sx={{
            "& fieldset": { border: "none" },
            width: "100%",
          }}
          placeholder="Message..."
        />
        <Button>
          <IconSend2 />
        </Button>
      </div>
    </div>
  );
};

const MessageCard = () => {
  return <div></div>;
};

export default ChatSection;
