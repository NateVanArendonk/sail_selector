import React from "react";
import { useNavigate } from 'react-router-dom';


export default function About() {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <main className="container mx-auto mt-2 p-8 bg-white">

            <div className="grid grid-cols-2 gap-8">

                <div>
                    <h2 className="text-4xl font-semibold mb-2">What is Sail Selector?</h2>
                    <p className="mb-6 leading-7 font-light text-gray-500 text-lg">Sail Selector is your ultimate wing selection companion for wing foiling. It removes the guesswork from selecting the perfect wing for your next session.</p>
                </div>

            </div>

            <h2 className="text-3xl font-semibold mb-2 mt-8">How it works</h2>
            <div
                class="mt-0 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-200 text-gray-600 grid-cols-3"
            >
                <div class="group relative bg-white transition shadow-md hover:z-[1] hover:bg-gray-100 hover:shadow-2xl hover:shadow-gray-600/10 hover:scale-105">
                <div class="relative space-y-8 py-12 p-8">
                    <img
                        src="./scales.png"
                        class="w-12"
                        width="512"
                        height="512"
                        alt="burger illustration"
                    />
                    <div class="space-y-2">
                    <h5
                        class="text-xl font-semibold text-gray-700  transition group-hover:text-primary"
                    >
                        1. Enter your weight
                    </h5>
                    <p class="leading-7 font-light text-gray-500 text-lg">
                        Input your weight in the designated input box and the app will get to work...
                    </p>
                    </div>
                </div>
                </div>
                <div class="group relative bg-white transition shadow-md hover:z-[1] hover:bg-gray-100 hover:shadow-2xl hover:shadow-gray-600/10 hover:scale-105">
                <div class="relative space-y-8 py-12 p-8">
                    <img
                        src="./hat.png"
                        class="w-12"
                        width="512"
                        height="512"
                        alt="burger illustration"
                    />
                    <div class="space-y-2">
                    <h5
                        class="text-xl font-semibold text-gray-700 transition group-hover:text-primary"
                    >
                        2. Wind speed magic
                    </h5>
                    <p class="leading-7 font-light text-gray-500 text-lg">
                        Our proprietary algorithm works its magic and creates a color-coded map for your ideal wing foiling settings. Colors correspond with:
                        <div className="flex items-center mt-4">
                            <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                            <p className="leading-7 font-light text-gray-500 text-xs">Ideal Conditions - High Fun Factor</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-warning rounded-sm mr-2"></div>
                            <p className="leading-7 font-light text-gray-500 text-xs">Overpowered Conditions - Can get dangerous (or fun!)</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-info rounded-sm mr-2"></div>
                            <p className="leading-7 font-light text-gray-500 text-xs">Underpowered Conditions - Requires lots of effort</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-[#b0b7b8] rounded-sm mr-2"></div>
                            <p className="leading-7 font-light text-gray-500 text-xs">Difficult Conditions - Low Fun Factor</p>
                        </div>
                    </p>
                    </div>
                </div>
                </div>
                <div class="group relative bg-white shadow-md transition hover:z-[1] hover:bg-gray-100 hover:shadow-2xl hover:shadow-gray-600/10 hover:scale-105">
                <div class="relative space-y-8 py-12 p-8">
                    <img
                        src="./shaka2.png"
                        class="w-12"
                        width="512"
                        height="512"
                        alt="burger illustration"
                    />
                    <div class="space-y-2">
                    <h5
                        class="text-xl font-semibold text-gray-700 transition group-hover:text-primary"
                    >
                        3. Optimize your sessions
                    </h5>
                    <p class="leading-7 font-light text-gray-500 text-lg">
                        Utilize Sail Selector to build your quiver and confidently choose the perfect wing for any wind condition.
                    </p>
                    </div>
                    <button
                    type="button"
                    className="flex items-center justify-between group-hover:text-secondary"
                    onClick={navigateHome }
                    >
                    <span className="leading-7 font-light text-gray-500 text-lg">Get Started</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                        <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                </div>
            </div>

            <div className="group relative bg-white shadow-md transition hover:z-[1] hover:bg-gray-100 hover:shadow-2xl hover:shadow-gray-600/10 hover:scale-105 p-8 rounded-lg mt-8 border border-gray-200">
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-700 transition group-hover:text-primary">No More Uncertainty</h3>
                <p className="eading-7 font-light text-gray-500 text-lg">Sail Selector builds confidence in your wing selection process and makes choosing the perfect wing size a breeze.</p>
            </div>
            </div>

        </main>
    )
}
