import React from "react";
import backgroundImage from "./Hero-assets/herobg.png"; // Adjust the path accordingly

const Hero = () => {
  const [copied, setCopied] = React.useState(false);

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    const copyText = "GrjMFAWy2aH7kCLxdxfmTjotzABxYSkjpmyBFSpgmT7";
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        setCopied(true);
        // Reset the copied state after a short delay
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <div
      className="relative flex items-center justify-start h-screen bg-cover bg-center overflow-hidden"
      id="Hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="
          text-left text-white space-y-6 max-w-md ml-10 overflow-hidden
          sm:ml-0 sm:mb-10 sm:text-center sm:absolute sm:bottom-0
        "
      >
        <h1 className="text-5xl font-bold">$SHELBY</h1>
        <p className="text-lg">
          From the slums of Small Heath to the moon by the Order of Peaky
          Focking Blinders
        </p>
        <div className="space-y-3">
          <div className="bg-gray-200 p-2 rounded-lg flex items-center justify-between">
            <div className="p-5">
              <span className="text-gray-700 font-semibold">
                CONTRACT ADDRESS
              </span>
              <input
                type="text"
                value="GrjMFAWy2aH7kCLxdxfmTjotzABxYSkjpmyBFSpgmT7"
                readOnly
                className="bg-transparent border-none outline-none text-gray-700 w-55 "
              />
            </div>
            <button
              className={`p-2 rounded-lg ${
                copied ? "bg-blue-500" : "bg-green-500"
              } text-white`}
              onClick={copyToClipboard}
            >
              {copied ? "COPIED!" : "COPY"}
            </button>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg">
              BUY $SHELBY
            </button>
            <button className="bg-white text-black py-2 px-6 rounded-lg">
              DEX TOOLS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
