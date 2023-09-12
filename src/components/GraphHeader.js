import React from "react";
import InformationModal from "./InformationModal";

export default function GraphHeader() {
  return (
    <div className="flex items-center">
        <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">
            Find your ideal conditions to go winging
        </h3>
      <InformationModal />
    </div>
  );
}
