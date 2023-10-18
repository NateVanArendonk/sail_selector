import React from "react";
import '../App.css';
import SubmitButton from './SubmitButton';
import ErrorModalAdvanced from "./ErrorModalAdvanced";
import ApexHeatmapAdvanced from "./ApexHeatmapAdvanced";
import { TEInput } from "tw-elements-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import InformationModalAdvanced from "./InformationModalAdvanced";



export default function AdvancedUser(props) {
    return (
        <div className="App">
            <div>
                <div className="flex item-center">
                    <div className="">
                        <div className="text-center">
                            <h1 className="text-3xl sm:text-5xl text-gray-900 font-bold mb-2 sm:mb-0">
                                Find the perfect <span className="text-primary">wing size.</span>
                            </h1>
                            <div className="mb-2 mx-4 inline-block font-light text-center text-gray-500 text-sm mb-2 sm:mb-4">
                                Enter your preferred wing size and wind speed where you are fully powered. We will take care of the rest.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="UserSection flex flex-col sm:flex-row items-center mt-2 mx-4 mb-0">


                <ErrorModalAdvanced 
                    showErrorModal={props.showErrorModal}
                    setShowErrorModal={props.setShowErrorModal} 
                />

                <InformationModalAdvanced
                    showInformationModal={props.showInformationModal}
                    setShowInformationModal={props.setShowInformationModal}
                />
                <div className="mx-2">

                    <TEInput
                        type="text"
                        id="wingSizeInput"
                        label="Enter Wing Size (meters)"
                        className="text-black mb-2 sm:mb-0"
                        value={props.inputValueWingSize}
                        onChange={props.handleInputChangeWingSize}
                    />
                </div>
                    <TEInput
                        type="text"
                        id="windSpeedInput"
                        label="Enter Wind Speed (mph)"
                        className="text-black mb-2 sm:mb-0"
                        value={props.inputValueWindSpeed}
                        onChange={props.handleInputChangeWindSpeed}
                    />
                <div className="flex items-center">
                    <SubmitButton
                        onClick={props.handleSubmit}
                        buttonText={'Submit'}
                    />

                    <button 
                        className="info-button inline-block"
                        type="button"
                        onClick={() => props.setShowInformationModal(true)}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </button>
                </div>
            </div>
            <ApexHeatmapAdvanced
                data={props.heatmapData}
                advancedData={true}
                windowWidth={props.windowWidth}
                windowHeight={props.windowHeight}
                tooltipValues={props.tooltipValues}
            />
        </div>
    )
}
