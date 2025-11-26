import React from "react";
import { X, Calendar, ChevronDown, Flag, ArrowRight } from "lucide-react";

const InputField = ({ label, placeholder, type = "text", children }) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-800 mb-2">
      {label}
    </label>
    {children || (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full text-gray-500 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      />
    )}
  </div>
);
const SelectField = ({ label, defaultValue, options }) => (
  <InputField label={label}>
    <div className="relative">
      <select
        defaultValue={defaultValue}
        className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer">
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={20}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  </InputField>
);

const DateField = ({ label, placeholder }) => (
  <InputField label={label}>
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full text-gray-500 px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      />
      <Calendar
        size={20}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer"
      />
    </div>
  </InputField>
);

const PhoneNumberField = ({ label }) => (
  <InputField label={label}>
    <div className="flex items-center justify-center lg:justify-start  flex-wrap lg:flex-nowrap">
      <div className="relative mr-1 w-1/4 ">
        <button className="flex items-center px-2 py-2 border border-gray-300 rounded-xl bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
          <span className="text-lg mr-1 text-gray-500">🇺🇸</span>
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>

      <input
        type="tel"
        placeholder="+1 (XXX) XXX XX XX"
        className="text-gray-500 w-3/4  px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      />
    </div>
  </InputField>
);

const ApplicationContent = () => {
  const nationalities = [
    "United States",
    "Canada",
    "Mexico",
    "United Kingdom",
    "India",
  ];

  return (
    <div className="bg-white ">
      <div className="max-w-md mx-auto h-screen flex flex-col">
        <header className="flex items-center justify-between p-2 lg:p-6  border-b border-gray-100 bg-white sticky top-0 z-20">
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <X size={20} />
          </button>
          <h1 className="text-lg font-semibold text-gray-800 grow text-center pr-8">
            Application Form
          </h1>
        </header>

        <main className="grow p-2 lg:p-4 pt-4 overflow-y-auto bg-white">
          <div className="mb-6">
            <p className="text-xs font-bold text-blue-600 uppercase mb-1">
              STEP 1 OF 3
            </p>
            <h2 className="text-xl font-bold text-gray-900">
              Personal Information
            </h2>

            <div className="mt-3 h-1 bg-gray-200 rounded-full">
              <div className="h-1 bg-blue-600 rounded-full w-1/3"></div>
            </div>
          </div>

          <form>
            <InputField label="First Name" placeholder="First name" />
            <InputField label="Last Name" placeholder="Last name" />
            <DateField label="Date of Birth" placeholder="MM-DD-YYYY" />

            <SelectField
              label="Nationality"
              value=""
              options={nationalities}
              placeholder="Nationality"
            />

            <PhoneNumberField label="Phone Number" />

            <InputField
              label="Email"
              type="email"
              placeholder="johndoe@gmail.com"
            />

            <div className="h-12"></div>
          </form>
        </main>

        <footer className="p-4 bg-white border-t border-gray-200 The class `shadow-[0_-2px_4px_0_rgb(0_0_0_/_0.03)]` can be written as `shadow-[0_-2px_4px_0_rgb(0_0_0/0.03)]`sticky bottom-0 max-w-md mx-auto w-full">
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
            Continue to Step 2
            <ArrowRight size={20} className="ml-2" />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ApplicationContent;
