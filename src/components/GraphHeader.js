import React from "react";
import InformationModal from "./InformationModal";

export default function GraphHeader() {
  return (
    <div className="flex items-center">
      <h5 className="mb-2 mt-0 text-xl font-medium leading-tight text-secondary">
        Find your ideal conditions to go winging
      </h5>
      <InformationModal />
    </div>
  );
}
