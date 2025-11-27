import React from "react";
import CollageSuccessCard from "../cards/CollageSuccessCard";

export default function Features() {
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

  return (
    <>
      {features.map((feature) => (
        <CollageSuccessCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </>
  );
}
