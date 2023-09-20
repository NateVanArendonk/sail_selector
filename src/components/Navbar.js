import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { TERipple } from "tw-elements-react";
import { useNavigate } from 'react-router-dom';

// import {Routes, Route, useNavigate} from 'react-router-dom';
// import About from "./About";

export default function Navbar(props) {

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about');
    };

    const navigateHome = () => {
        navigate('/');
    };

    const navigateToContact = () => {
        navigate('/contact');
    };

    // function handleClick(event) {
    //     navigate('/about');
    // }


    return (
        <nav className="flex items-center justify-between flex-wrap bg-primary p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <FontAwesomeIcon icon={faSailboat} />
                <span className="font-semibold text-xl tracking-tight">Sail Selector</span>
            </div>
            <div className="ml-auto">
                <TERipple>
                    <button
                        type="button"
                        className="inline-block mx-2 rounded border-2 border-secondary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-100 ease-in-out hover:border-secondary-600 hover:bg-secondary-500 hover:bg-opacity-10 hover:text-white focus:border-secondary-600 focus:text-white-600 focus:outline-none focus:ring-0 active:border-secondary-700 active:text-white-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        onClick={navigateHome}
                        >
                        Home
                    </button>
                </TERipple>
                <TERipple>
                    <button
                        type="submit"
                        className="inline-block mx-2 rounded border-2 border-secondary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-100 ease-in-out hover:border-secondary-600 hover:bg-secondary-500 hover:bg-opacity-10 hover:text-white focus:border-secondary-600 focus:text-white-600 focus:outline-none focus:ring-0 active:border-secondary-700 active:text-white-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        onClick={navigateToAbout}
                        >
                        About
                    </button>
                </TERipple>
                <TERipple>
                    <button
                        type="submit"
                        className="inline-block mx-2 rounded border-2 border-secondary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-100 ease-in-out hover:border-secondary-600 hover:bg-secondary-500 hover:bg-opacity-10 hover:text-white focus:border-secondary-600 focus:text-white-600 focus:outline-none focus:ring-0 active:border-secondary-700 active:text-white-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        onClick={navigateToContact}
                        >
                        Contact
                    </button>
                </TERipple>
            </div>
        </nav>
    )
}
