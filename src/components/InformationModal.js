import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry, faFaceMeh, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

export default function InformationModal() {
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showInformationScrollModal, setShowInformationScrollModal] = useState(false);
  return (
    <div>
      <div className="space-x-2">
        <TERipple rippleColor="white">
          <button
            type="button"
            className="inline-block mx-2 rounded-full text-xs bg-secondary p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-secondary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-secondary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => setShowInformationModal(true)}
          >
            Info
          </button>

        </TERipple>
      </div>

      <TEModal
        show={showInformationModal}
        setShow={setShowInformationModal}
      >
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader>
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                How To Use This Graph
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowInformationModal(false)}
                aria-label="Close"
              >
              </button>
            </TEModalHeader>
            <TEModalBody>
              <p className="mb-4 text-slate-900 text-base font-medium leading-tight">
                    Enter your weight and the graph will show the ideal conditions when to go winging. 
                    Using our proprietary algorithm, we can help you optimize when you head out on the water.
                <hr
                className="my-4 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                />

                <h6 className="mb-4 mt-0 text-base text-md leading-tight text-primary">
                    Ideal Conditions <p className="text-slate-900"> These are the ideal winging conditions - High Fun Factor!</p>
                    <FontAwesomeIcon icon={faFaceSmile} />
                </h6>

                <h6 className="mb-4 mt-0 text-base text-md leading-tight text-info">
                    Manageable Conditions <p className="text-slate-900"> These conditions might require a bit more work and you might be over powered - Variable Fun Factor</p>
                    <FontAwesomeIcon icon={faFaceMeh} />
                </h6>

                <h6 className="mt-0 text-base text-md leading-tight text-[#b0b7b8]">
                    Difficult Conditions <p className="text-slate-900"> We do not recommend winging in these conditions - Low Fun Factor</p>
                    <FontAwesomeIcon icon={faFaceSadCry} />
                </h6>

              </p>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowInformationModal(false)}
                >
                  Close
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}
