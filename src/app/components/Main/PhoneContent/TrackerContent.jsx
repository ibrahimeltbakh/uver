import React from "react";
import ApplicationCard from "../../cards/ApplicationCard";
import University1 from "../../../../../public/University of Southern California.png";
import University2 from "../../../../../public/University of California, Los Angeles.png";
import PhoneNavbar from "../../PhoneNavbar";

const TrackerContent = () => {
  const applicationData = [
    {
      name: "University of Southern California",
      applicationDate: "Aug 29",
      rating: 4.8,
      status: "RECEIVED",
      imageUrl: University1,
    },
    {
      name: "University of Northern Carolina",
      applicationDate: "Aug 11",
      rating: 3.5,
      status: "UNDER REVIEW",
      imageUrl: University2,
    },
    {
      name: "University of California Los Angeles",
      applicationDate: "Jul 17",
      rating: 5.0,
      status: "ACCEPTED",
      imageUrl: University1,
    },
    {
      name: "Stanford University",
      applicationDate: "Aug 7",
      rating: 4.5,
      status: "REJECTED",
      imageUrl: University2,
    },
  ];

  return (
    <div className="bg-white  ">
      <div className="max-w-md mx-auto p-4 pt-6">
        <header className="mb-2">
          <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
        </header>

        <main className="pb-2">
          {applicationData.map((app, index) => (
            <ApplicationCard key={index} {...app} />
          ))}
        </main>
      </div>
      <PhoneNavbar component="tracker" />

      <div className="h-12"></div>
    </div>
  );
};

export default TrackerContent;
