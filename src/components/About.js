import React from "react";

export default function About() {
    return (
        <main className="container mx-auto mt-2 p-8 bg-white rounded-lg shadow-lg">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <h2 className="text-4xl font-semibold mb-2">What is Sail Selector?</h2>
                    <p className="text-gray-600 text-lg leading-7 mb-6">Sail Selector is your ultimate wing foiling companion, removing the guesswork from selecting the perfect wing for your next session.</p>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
                        <ol className="list-decimal pl-6 mt-4">
                            <li className="text-gray-700 text-lg leading-7 mb-4">
                                Enter Your Weight
                            </li>
                            <li className="text-gray-700 text-lg leading-7 mb-4">
                                Wind Speed Magic: Our proprietary algorithm works its magic and creates a color-coded map for your ideal wing foiling settings. Colors correspond with:
                                <div className="flex items-center mt-2">
                                    <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                                    <p className="text-lg text-primary font-semibold">Ideal Conditions - High Fun Factor</p>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-4 h-4 bg-info rounded-sm mr-2"></div>
                                    <p className="text-lg text-info font-semibold">Manageable Conditions - Variable Fun Factor</p>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-4 h-4 bg-[#b0b7b8] rounded-sm mr-2"></div>
                                    <p className="text-lg text-[#b0b7b8] font-semibold">Difficult Conditions - Low Fun Factor</p>
                                </div>
                            </li>
                            <li className="text-gray-700 text-lg leading-7">
                                Optimize Your Sessions: Utilize Sail Selector to build your quiver and confidently choose the perfect wing for any wind condition.
                            </li>
                        </ol>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
                        <h3 className="text-2xl font-semibold mb-4">No More Uncertainty</h3>
                        <p className="text-gray-600 text-lg leading-7">Sail Selector builds confidence in your wing selection process, making choosing the perfect wing size a breeze.</p>
                    </div>
                </div>

            </div>

        </main>
    )
}
