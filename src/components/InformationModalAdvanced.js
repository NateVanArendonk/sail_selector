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

export default function InformationModalAdvanced(props) {
  return (
    <div>

      <TEModal
        show={props.showInformationModal}
        setShow={props.setShowInformationModal}
      >
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader>
              <h5 className="text-xl font-semibold text-gray-700">
                How To Use This Graph
                <img
                  src="./guide-book.png"
                  className="w-12 inline-block mx-2"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
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
              <div className="mb-4 font-light text-gray-500 text-md">
                    Enter your preferred wing size and wind speed when you are fully powered and we will show all of your ideal conditions for wing foiling. 
                    Using our proprietary algorithm, we can help you optimize your quiver and find the best times to head out on the water.

                <h6 className="mb-4 mt-4 text-md leading-tight text-primary flex items-center">
                    <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                    <div className="leading-7 font-light text-gray-800 text-sm"> These are your ideal winging conditions - High Fun Factor!</div>
                </h6>

                <h6 className="mb-4 mt-0 text-md leading-tight text-info flex items-center">
                    <div className="w-4 h-4 bg-warning rounded-sm mr-2"></div>
                    <div className="leading-7 font-light text-gray-800 text-sm"> These conditions can get dangerous - Variable Fun Factor</div>
                </h6>

                <h6 className="mb-4 mt-0 text-md leading-tight text-info flex items-center">
                    <div className="w-4 h-4 bg-info rounded-sm mr-2"></div>
                    <div className="leading-7 font-light text-gray-800 text-sm"> These conditions will require a bit more work - Variable Fun Factor</div>
                </h6>

                <h6 className="mt-0 text-md leading-tight text-[#b0b7b8] flex items-center">
                    <div className="w-4 h-4 bg-[#b0b7b8] rounded-sm mr-2"></div>
                    <div className="leading-7 font-light text-gray-800 text-sm"> We do not recommend winging in these conditions - Low Fun Factor</div>
                </h6>

              </div>
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
