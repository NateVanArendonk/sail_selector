import React from "react";
import '../App.css';
import SubmitButton from './SubmitButton';
import ErrorModal from "./ErrorModal";
import ApexHeatmap from "./ApexHeatmap";
import { TEInput } from "tw-elements-react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import InformationModal from "./InformationModal";


export default function NormalUser(props) {
    return (
        <div className="App">
            <div>
                <div className="flex item-center">
                    <div className="text-center">
                        <h1 className="text-gray-900 font-bold text-xl">
                            Find the perfect <span className="text-primary dark:text-white">wing size.</span>
                        </h1>
                        <p className="mt-0 mb-6 inline-block font-light text-center text-gray-500 text-sm md:text-lg">
                            Enter your weight below and find your ideal conditions for wing foiling.
                        </p>
                    </div>
                </div>
            </div>

            <div className="UserSection flex item-center mt-6 mb-0">
                <TEInput
                    type="text"
                    id="exampleFormControlInput1"
                    label="Enter Weight (lbs)"
                    className="text-black"
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
            />
        </div>
    )
}
