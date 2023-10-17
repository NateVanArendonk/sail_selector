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

export default function ContactModal(props) {
  return (
    <div>

      <TEModal
        show={props.showContactModal}
        setShow={props.setShowContactModal}
      >
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader>
              <h5 className="text-xl font-semibold text-gray-700">
                Psych!
                <img
                  src="./boat.png"
                  className="w-12 inline-block mx-2"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => props.setShowContactModal(false)}
                aria-label="Close"
              >
              </button>
            </TEModalHeader>
            <TEModalBody>
              <div className="mb-4 font-light text-gray-500 text-md">
                    Go talk with your local kite shop!
              </div>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => props.setShowContactModal(false)}
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
