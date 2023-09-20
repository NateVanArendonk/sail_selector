import React from "react";
import InformationModal from "./InformationModal";

export default function GraphHeader() {
  return (
    <div className="flex items-center">
        <h3 className="mb-2 mt-0 text-4xl font-semibold">
            Find Your Ideal Conditions To Go Wing Foiling
        </h3>
      <InformationModal />
    </div>
  );
}
