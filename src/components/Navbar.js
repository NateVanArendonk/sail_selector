import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about');
    };

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <nav className="flex flex-col sm:flex-row items-center justify-between bg-primary-color p-4">
            <div className="flex items-center flex-shrink-0 text-white mb-2 sm:mb-0">
                <FontAwesomeIcon icon={faSailboat} />
                <span className="font-semibold text-xl tracking-tight">Sail Selector</span>
            </div>
            <div className="mb-2 sm:mb-0">
                <input
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-neutral-300 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-secondary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-secondary checked:focus:bg-secondary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={props.advancedToggle}
                    onChange={props.handleToggle}
                />
                <label
                    className="inline-block pl-[0.15rem] text-base hover:cursor-pointer text-white"
                    htmlFor="flexSwitchCheckDefault"
                >
                    Advanced
                </label>
            </div>

            <div className="flex space-x-9">                
                <button
                    type="button"
                    className="text-white group hover:text-second-color"
                    onClick={navigateHome}
                    >
                    <span className="relative inline-block">
                    Home
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-third-color origin-right transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                        
                </button>
                <button
                    type="submit"
                    className="text-white group hover:text-second-color"
                    onClick={navigateToAbout}
                    >
                    <span className="relative inline-block">
                    About
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-third-color origin-right transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                </button>
            </div>
        </nav>
    )
}



        // <nav className="flex items-center justify-between flex-wrap bg-primary p-4">
        //     <div className="flex items-center flex-shrink-0 text-white mr-6">
        //         <FontAwesomeIcon icon={faSailboat} />
        //         <span className="font-semibold text-xl tracking-tight">Sail Selector</span>
        //     </div>
        //     <div>
        //         <input
        //             className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-neutral-300 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-secondary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-secondary checked:focus:bg-secondary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
        //             type="checkbox"
        //             role="switch"
        //             id="flexSwitchCheckDefault"
        //             checked={props.advancedToggle}
        //             onChange={props.handleToggle}
        //         />
        //         <label
        //             className="inline-block pl-[0.15rem] hover:cursor-pointer text-white"
        //             htmlFor="flexSwitchCheckDefault"
        //         >
        //             Advanced
        //         </label>
        //     </div>


        //     <div className="ml-auto">
        //         <TERipple>
        //             <button
        //                 type="button"
        //                 className="inline-block mx-2 rounded border-2 border-secondary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-100 ease-in-out hover:border-secondary-600 hover:bg-secondary-500 hover:bg-opacity-10 hover:text-white focus:border-secondary-600 focus:text-white-600 focus:outline-none focus:ring-0 active:border-secondary-700 active:text-white-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        //                 onClick={navigateHome}
        //                 >
        //                 Home
        //             </button>
        //         </TERipple>
        //         <TERipple>
        //             <button
        //                 type="submit"
        //                 className="inline-block mx-2 rounded border-2 border-secondary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-100 ease-in-out hover:border-secondary-600 hover:bg-secondary-500 hover:bg-opacity-10 hover:text-white focus:border-secondary-600 focus:text-white-600 focus:outline-none focus:ring-0 active:border-secondary-700 active:text-white-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        //                 onClick={navigateToAbout}
        //                 >
        //                 About
        //             </button>
        //         </TERipple>             
        //     </div>
        // </nav>
