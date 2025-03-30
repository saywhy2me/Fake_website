import React from "react";

const SecurityWarningBanner: React.FC = () => {
  return (
    <div className="bg-red-700 p-3 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="font-bold">
              EDUCATIONAL PURPOSES ONLY
            </span>
          </div>
          <p className="font-semibold">
            This is a demonstration of how phishing attacks can collect credentials.
            The form will redirect to Google.com after submission.
            <span className="underline">DO NOT enter real credentials.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityWarningBanner;
