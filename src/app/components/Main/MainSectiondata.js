import ApplicationContent from "./PhoneContent/ApplicationContent";
import ChatContent from "./PhoneContent/ChatContent";
import RecommendationsContent from "./PhoneContent/RecommendationsContent";
import SearchContent from "./PhoneContent/SearchContent";
import TrackerContent from "./PhoneContent/TrackerContent";



export const menu = [
    {
        key: "College Search",
        data: {
            h1: "Comprehensive College Search",
            p: "Effortlessly explore a vast database of colleges and universities worldwide. Filter results based on your preferences, including location, majors, campus facilities, and more. Find the perfect fit for your educational journey.",
            phoneContent: <SearchContent />,
        },
    },
    {
        key: "Recommendations",
        data: {
            h1: "Personalized Advising",
            p: "Stay organized with an intuitive application tracker. Monitor the progress of your applications, track deadlines, and receive reminders to submit required documents. Never miss an important milestone.",
            phoneContent: <RecommendationsContent />,
        },
    },
    {
        key: "Tracker",
        data: {
            h1: "Application Tracker",
            p: "Receive tailored recommendations based on your interests, academic achievements, and career aspirations. Discover colleges and programs that align with your goals, ensuring you make informed decisions.",
            phoneContent: <TrackerContent />,
        },
    },
    {
        key: "Chat",
        data: {
            h1: "Engaging Experts Chat",
            p: "Feel free to inquire, seek counsel, and acquire valuable perspectives to assist you in making well-informed choices regarding your college applications. Receive tailored guidance and assistance every step of the way.",
            phoneContent: <ChatContent />,
        },
    },
    {
        key: "Application",
        data: {
            h1: "Seamless Application",
            p: "Submit applications directly through the app. Save time by completing and submitting forms electronically. Enjoy a hassle-free application process with streamlined document uploads and easy.",
            phoneContent: <ApplicationContent />,
        },
    },
];


