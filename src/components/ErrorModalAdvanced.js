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


export default function ErrorModalAdvanced(props) {
    return (
    <div>
      <TEModal
        show={props.showErrorModal}
        setShow={props.setShowErrorModal}
      >
        <TEModalDialog centered>
          <TEModalContent >

            <TEModalHeader>
              <h5 className="text-xl font-semibold">
                User Weight Error
                <img
                  src="./warning.png"
                  className="w-12 inline-block mx-2"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => props.setShowErrorModal(false)}
                aria-label="Close"
              >
              </button>
            </TEModalHeader>

            <TEModalBody>
              <div className="text-gray-700 text-sm">Oops! Looks like what you entered is not a valid wing size or wind speed. Make sure you just enter the vlaues as digits - there is no need to add units e.g. "meters" or "mph".</div>
            </TEModalBody>

            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => props.setShowErrorModal(false)}
                >
                  Close
                </button>
              </TERipple>
            </TEModalFooter>

          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
    )
}
