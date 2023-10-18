import React from "react";
import '../App.css';
import SubmitButton from './SubmitButton';
import ErrorModal from "./ErrorModal";
import ApexHeatmap from "./ApexHeatmap";
import { TEInput } from "tw-elements-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import InformationModal from "./InformationModal";


export default function NormalUser(props) {
    return (
        <div className="App">
            <div>
                <div className="flex item-center">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-5xl text-gray-900 font-bold mb-2 sm:mb-0">
                            Find the perfect <span className="text-primary">wing size.</span>
                        </h1>
                        <div className="mx-4 inline-block font-light text-center text-gray-500 text-base mb-2 sm:mb-4">
                            Enter your weight below and find your ideal conditions for wing foiling.
                        </div>
                        <button 
                            className="info-button inline-block"
                            type="button"
                            onClick={() => props.setShowInformationModal(true)}
                        >
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="UserSection flex flex-col sm:flex-row items-center mt-2 mx-4 mb-0">
                <TEInput
                    type="text"
                    id="exampleFormControlInput1"
                    label="Enter Weight (lbs)"
                    className="text-black mb-2 sm:mb-0"
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                />

                <ErrorModal 
                    showErrorModalModal={props.showErrorModalModal}
                    setShowErrorModalModal={props.setShowErrorModalModal} 
                />

                <InformationModal
                    showInformationModal={props.showInformationModal}
                    setShowInformationModal={props.setShowInformationModal}
                />

                <SubmitButton
                    onClick={props.handleSubmit}
                    buttonText={'Submit'}
                />

            </div>
            <ApexHeatmap 
                data={props.heatmapData}
                advancedData={false}
                windowWidth={props.windowWidth}
                windowHeight={props.windowHeight}
                tooltipValues={props.tooltipValues}
            />
        </div>
    )
}
