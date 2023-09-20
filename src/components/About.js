import React from "react";

export default function About() {
    return (
        <main className="container mx-auto mt-2 p-8 bg-white rounded-lg shadow-lg">

            <div className="grid grid-cols-2 gap-8">

                <div>
                    <h2 className="text-4xl font-semibold mb-2">What is Sail Selector?</h2>
                    <p className="text-gray-600 text-lg leading-7 mb-6">Sail Selector is your ultimate wing foiling companion, removing the guesswork from selecting the perfect wing for your next session.</p>
                </div>

            </div>


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
                    <p class="text-gray-600">
                        Input your weight in the designated input box
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
                    <p class="text-gray-600">
                        Our proprietary algorithm works its magic and creates a color-coded map for your ideal wing foiling settings. Colors correspond with:
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                            <p className="font-semibold">Ideal Conditions - High Fun Factor</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-info rounded-sm mr-2"></div>
                            <p className="font-semibold">Manageable Conditions - Variable Fun Factor</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-4 h-4 bg-[#b0b7b8] rounded-sm mr-2"></div>
                            <p className="text-[#b0b7b8] font-semibold">Difficult Conditions - Low Fun Factor</p>
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
                    <p class="text-gray-600">
                        Utilize Sail Selector to build your quiver and confidently choose the perfect wing for any wind condition.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="group relative bg-white shadow-md transition hover:z-[1] hover:bg-gray-100 hover:shadow-2xl hover:shadow-gray-600/10 hover:scale-105 p-8 rounded-lg mt-8 border border-gray-200">
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-700 transition group-hover:text-primary">No More Uncertainty</h3>
                <p className="text-gray-600">Sail Selector builds confidence in your wing selection process and makes choosing the perfect wing size a breeze.</p>
            </div>
            </div>

        </main>
    )
}
