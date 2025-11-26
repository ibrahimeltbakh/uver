import React from "react";
import CollageSuccessCard from "../cards/CollageSuccessCard";
import HowItWorksHeader from "./HowItWorkHeader";
import university from "../../../../public/university-california-los-angeles.png";
import GetEarlyAccess from "../buttons/GetEarlyAccess";

const features = [
  {
    id: 1,
    icon: "🔍",
    title: "Search for Your Ideal College",
    description:
      "Browse through an extensive database of colleges and universities. Refine your search based on location, majors, campus facilities, and more.",
  },
  {
    id: 2,
    icon: "💬",
    title: "Chat with Admissions Experts",
    description:
      "Ask questions, seek advice, and gain valuable insights to make informed decisions about your college applications.",
  },
  {
    id: 3,
    icon: "👀",
    title: "Track Deadlines and Requirements",
    description:
      "Receive notifications for upcoming deadlines, document requirements, and submission dates. Keep track of the progress of your applications.",
  },
  {
    id: 4,
    icon: "📝",
    title: "Apply with Confidence",
    description:
      "Utilize convenient form filling features, upload required documents seamlessly, and submit applications electronically.",
  },
  {
    id: 5,
    icon: "🏛️",
    title: "Plan Your College Future",
    description:
      "Once you receive acceptance letters, utilize UVER's tools to compare offers, evaluate financial aid packages, and make informed decisions.",
  },
];

console.log(university.src);

export default function CollageSuccessView() {
  return (
    <div className="min-h-screen bg-white p-8 rounded-b-3xl">
      <HowItWorksHeader />

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-y-10 gap-x-6  sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <CollageSuccessCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

          <div
            className="p-6  rounded-xl shadow-lg flex flex-col justify-end min-h-[250px] lg:col-span-1"
            style={{
              backgroundImage: `url(${university.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <h2 className="text-xl font-semibold text-white mb-4">
              Discover, apply, succeed – UVER app makes college search
              effortless.
            </h2>
            <GetEarlyAccess />
          </div>
        </div>
      </div>
    </div>
  );
}
