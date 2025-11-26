import { UserCircle } from "lucide-react";
import Image from "next/image";

export default function MessageBubble({
  children,
  isUser,
  time,
  avatarUrl,
  avatarText,
}) {
  return (
    <div
      className={`flex items-start mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 overflow-hidden shrink-0">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt="USC Logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-gray-700">
              {avatarText}
            </span>
          )}
        </div>
      )}

      <div
        className={`max-w-[80%] flex flex-col ${
          isUser ? "items-end" : "items-start"
        }`}>
        <div
          className={`p-3 rounded-xl shadow-sm text-sm ${
            isUser
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-gray-100 text-gray-800 rounded-tl-none"
          }`}>
          {children}
        </div>
        <p
          className={`text-[10px] text-gray-400 mt-1 ${
            isUser ? "mr-1" : "ml-1"
          }`}>
          {time}
        </p>
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-3 shrink-0 overflow-hidden">
          {avatarText === "J" ? (
            <UserCircle size={28} className="text-gray-500" />
          ) : (
            <span className="text-sm font-bold text-gray-700">
              {avatarText}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
