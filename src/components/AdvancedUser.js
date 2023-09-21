import React from "react";
import '../App.css';
import SubmitButton from './SubmitButton';
import ErrorModal from "./ErrorModal";
import ApexHeatmap from "./ApexHeatmap";
import { TEInput } from "tw-elements-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import InformationModal from "./InformationModal";



export default function AdvancedUser(props) {
    return (
        <div className="App">
            <div>
                <div className="flex item-center">
                    <div className="">
                        <div className="text-center">
                            <h1 className="text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl">Find the perfect <span className="text-primary dark:text-white">wing size.</span></h1>
                            <p className="mt-0 mb-6 inline-block font-light text-center text-gray-500 text-lg">Enter your preferred wing size and wind speed where you are fully powered. We will take care of the rest.</p>
                            <button 
                                className="info-button inline-block ml-2"
                                type="button"
                                onClick={() => props.setShowInformationModal(true)}
                            >
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="UserSection flex item-center mt-6 mb-0">

                <ErrorModal 
                    showErrorModalModal={props.showErrorModalModal}
                    setShowErrorModalModal={props.setShowErrorModalModal} 
                />

                <InformationModal
                    showInformationModal={props.showInformationModal}
                    setShowInformationModal={props.setShowInformationModal}
                />
                <div className="mx-2">

                    <TEInput
                        type="text"
                        id="wingSizeInput"
                        label="Enter Wing Size (meters)"
                        className="text-black"
                        value={props.inputValueWingSize}
                        onChange={props.handleInputChangeWingSize}
                    />
                </div>
                    <TEInput
                        type="text"
                        id="windSpeedInput"
                        label="Enter Wind Speed (mph)"
                        className="text-black"
                        value={props.inputValueWindSpeed}
                        onChange={props.handleInputChangeWindSpeed}
                    />
                    <SubmitButton 
                        onClick={props.handleSubmit}
                        buttonText={'Submit'}
                    />
            </div>
            <ApexHeatmap data={props.heatmapData} advancedData={true} />
        </div>
    )
}
