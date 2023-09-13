import React from "react";
import InformationModal from "./InformationModal";

export default function GraphHeader() {
  return (
    <div className="flex items-center">
        <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">
            Find <u className="underline">Your</u> Ideal Conditions To Go Winging
        </h3>
      <InformationModal />
    </div>
  );
}
