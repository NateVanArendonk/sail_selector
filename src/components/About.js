import React from "react";
import { useNavigate } from 'react-router-dom';


export default function About() {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <div>
        <div>
            <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-second-color">What is Sail Selector?</h2>
                    <p class="text-gray-700 sm:text-xl">Sail Selector is your ultimate wing selection companion for wing foiling. It removes the guesswork from selecting the perfect wing for your next session.</p>
                </div>

                <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-second-color">How it works?</h2>

                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <img
                                src="./scales.png"
                                class="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />                       
                        </div>
                        <h3 class="mb-2 text-primary-color text-xl font-bold">1. Enter your data</h3>
                        <p class="text-gray-500">Input your weight in the designated input box and the app will get to work...</p>
                        <div class="leading-7 font-light tracking-tight text-gray-900 text-sm">
                            <em>Note: Experienced wing foilers can toggle the advanced slider at the top. Instead of user weight, input a known wing size and wind speed where you are perfectly powered up.</em>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <img
                                src="./hat.png"
                                class="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />
                        </div>
                        <h3 class="mb-2 text-xl font-bold text-primary-color">2. Wind speed magic</h3>
                        <p class="text-gray-500">Our proprietary algorithm works its magic and creates a color-coded map for your ideal wing foiling settings. Colors correspond with:</p>
                        <div className="flex items-center mt-4">
                            <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                            <div className="leading-7 font-light text-gray-900 tracking-tight text-xs">Ideal Conditions - High Fun Factor</div>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-warning rounded-sm mr-2"></div>
                            <div className="leading-7 font-light text-gray-900 tracking-tight text-xs">Overpowered Conditions - Can get dangerous (or fun!)</div>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-info rounded-sm mr-2"></div>
                            <div className="leading-7 font-light text-gray-900 tracking-tight text-xs">Underpowered Conditions - Requires lots of effort</div>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-[#b0b7b8] rounded-sm mr-2"></div>
                            <div className="leading-7 font-light text-gray-900 tracking-tight text-xs">Difficult Conditions - Low Fun Factor</div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <img
                                src="./shaka2.png"
                                class="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />
                        </div>
                        <h3 class="mb-2 text-xl font-bold text-primary-color">3. Optimize your sessions</h3>
                        <p class="text-gray-500">
                            Utilize Sail Selector to build your quiver and confidently choose the perfect wing for any wind condition.
                            <button
                            type="button"
                            className="flex items-center justify-between mt-1 hover:text-secondary"
                            onClick={navigateHome }
                            >
                            <span className="text-primary-color text-lg font-semibold hover:text-third-color text-lg">Get Started</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            </section>
        </div>
    </div>
    )
}
