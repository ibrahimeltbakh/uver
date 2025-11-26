import React from "react";
import { ChevronLeft } from "lucide-react";
import PhoneNavbar from "../../PhoneNavbar";
import Image from "next/image";
import University1 from "../../../../../public/University of Southern California.png";
import MessageBubble from "../../cards/MessageBubble";

const ChatContent = () => {
  const uscAvatarUrl = University1;
  const userNameInitial = "J";

  const chatHistory = [
    {
      type: "bot",
      content: (
        <>
          Hey there! I&apos;m your personal assistant and here you&apos;ll
          receive all important information about the admission
          <br />
          <br />
          To start, what&apos;s your name?
        </>
      ),
      time: "08:41",
      avatarUrl: uscAvatarUrl,
    },
    {
      type: "user",
      content: "John Doe",
      time: "08:42",
      avatarText: userNameInitial,
    },
    {
      type: "bot",
      content: (
        <>
          Nice to meet you John!
          <br />
          <br />
          Are you a First-Year Applicant or a Transfer one?
        </>
      ),
      time: "08:43",
      avatarUrl: uscAvatarUrl,
    },
    {
      type: "user",
      content: "First-Year Applicant",
      time: "08:47",
      avatarText: userNameInitial,
    },
    {
      type: "bot",
      content: "Select the topic you're interested in:",
      time: "08:48",
      avatarUrl: uscAvatarUrl,
    },
  ];

  return (
    <div className="bg-white pb-16">
      <div className="max-w-md mx-auto h-screen flex flex-col">
        <header className="flex items-center p-4  border-b border-gray-100 shadow-sm bg-white sticky top-0 z-20">
          <ChevronLeft size={24} className="text-gray-600 mr-3" />
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 overflow-hidden shrink-0">
            <Image
              src={University1}
              alt="USC Logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-base font-semibold text-gray-800">
            University of Southern California
          </h1>
        </header>

        <main className="grow p-4 overflow-y-auto bg-gray-50">
          {chatHistory.map((msg, index) => (
            <MessageBubble
              key={index}
              isUser={msg.type === "user"}
              time={msg.time}
              avatarUrl={msg.type === "bot" ? uscAvatarUrl : null}
              avatarText={msg.type === "user" ? userNameInitial : null}>
              {msg.content}
            </MessageBubble>
          ))}

          <div className="flex justify-start mb-4">
            <button className="px-4 py-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg mr-2 transition-colors border border-blue-200">
              Application Terms
            </button>
            <button className="px-4 py-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200">
              Specialisations
            </button>
          </div>
        </main>
        <div className="p-4 bg-white border-t border-gray-200 The class `shadow-[0_-2px_4px_0_rgb(0_0_0_/_0.03)]` can be written as `shadow-[0_-2px_4px_0_rgb(0_0_0/0.03)]`  sticky bottom-[72px] max-w-md mx-auto w-full">
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
            Re-Start Bot
          </button>
        </div>
      </div>

      <PhoneNavbar component="chat" />
    </div>
  );
};

export default ChatContent;
