import React from "react";

const AlertMessage = ({ message }) => {
  return (
    <div className="alert alert-success shadow-lg fixed top-8 w-96 right-4 z-50">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6 text-green-900"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-bold text-green-900">{message}</span>
      </div>
    </div>
  );
};

export default AlertMessage;
