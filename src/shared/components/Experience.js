import React from "react";
import Box from "./Box";

const Experience = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 text-gray-700 sm:px-6 lg:px-8">
      <div>
        <h1 className="font-semibold capitalize">Relevant Experience</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-2 mt-4">
          <Box
            name="Xplora"
            description="Summer internship working exclusively on a company project. Used Laravel and Backpack."
          />
        </div>
      </div>
    </div>
  );
};
export default Experience;
