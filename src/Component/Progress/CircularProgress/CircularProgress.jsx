import React from "react";

const CircularProgress = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex justify-center items-center">
      <svg
        className="transform rotate-[-90deg]"
        width="120"
        height="120"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="gray"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="gold"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <div className="absolute text-xl font-bold text-gray-800">
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgress;
