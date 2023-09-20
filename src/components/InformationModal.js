import React from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

export default function InformationModal(props) {
  return (
    <div>

      <TEModal
        show={props.showInformationModal}
        setShow={props.setShowInformationModal}
      >
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader>
              <h5 className="text-xl font-semibold">
                How To Use This Graph
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => props.setShowInformationModal(false)}
                aria-label="Close"
              >
              </button>
            </TEModalHeader>
            <TEModalBody>
              <p className="mb-4 text-gray-700 text-md">
                    Enter your weight and the graph will show the ideal conditions when to go wing foiling. 
                    Using our proprietary algorithm, we can help you optimize your quiver and when you head out on the water.
              <hr
              className="my-4 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
              />

                <h6 className="mb-4 mt-0 text-base text-md leading-tight text-primary flex items-center">
                    <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                    <p className="text-gray-700 text-sm"> These are your ideal winging conditions - High Fun Factor!</p>
                </h6>

                <h6 className="mb-4 mt-0 text-base text-md leading-tight text-info flex items-center">
                    <div className="w-4 h-4 bg-info rounded-sm mr-2"></div>
                    <p className="text-gray-700 text-sm"> These conditions will require a bit more work - Variable Fun Factor</p>
                </h6>

                <h6 className="mt-0 text-base text-md leading-tight text-[#b0b7b8] flex items-center">
                    <div className="w-4 h-4 bg-[#b0b7b8] rounded-sm mr-2"></div>
                    <p className="text-gray-700 text-sm"> We do not recommend winging in these conditions - Low Fun Factor</p>
                </h6>

              </p>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => props.setShowInformationModal(false)}
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
