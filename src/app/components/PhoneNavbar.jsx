import React from "react";
import { Search, Compass, FileText, Mail, User } from "lucide-react";

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`flex flex-col items-center justify-center p-2 min-w-[30px] lg:min-w-[60px] text-xs font-medium transition-colors ${
      active ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
    }`}>
    <Icon size={22} className="mb-0.5" />
    <span className="mt-1">{label}</span>
  </button>
);

export default function PhoneNavbar({ component }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 max-w-md mx-auto bg-white border-t border-gray-200 pt-2 pb-2 rounded-b-3xl shadow-[0_-4px_6px_-1px_rgb(0_0_0/0.05)]">
      <div className="flex justify-around items-center">
        <NavItem
          icon={Search}
          label="Search"
          active={
            component === "hero" || component === "recomendations"
              ? true
              : false
          }
        />
        <NavItem icon={Compass} label="Explore" />
        <NavItem
          icon={FileText}
          label="Applications"
          active={component === "tracker" ? true : false}
        />
        <NavItem
          icon={Mail}
          label="Inbox"
          active={component === "chat" ? true : false}
        />
        <NavItem icon={User} label="Profile" />
      </div>
    </nav>
  );
}
