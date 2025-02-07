import React from 'react';

const Category = () => {
    return (
        <div>
            <div className="container py-10 lg:py-10">
                <div className="flex flex-col">
                    <h1 className="text-center lg:text-left text-xl lg:text-3xl font-bold">
                        Shop By Category
                    </h1>
                    <div className="py-9 flex flex-col lg:flex-row lg:space-x-9 space-y-3 lg:space-y-0">
                        <div className="flex flex-col lg:w-[66%] space-y-3 lg:space-y-9">
                            <div className="hover:animate-shake relative h-[199px] lg:h-[434px] rounded-[20px] overflow-hidden group duration-700">
                                <img
                                    src="/images/Category1.jpg"
                                    alt="Table"
                                    className="w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 flex justify-start items-start p-5 cursor-pointer">
                                    <p className="text-white text-xl lg:text-2xl font-bold">
                                        Table
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-9">
                                <div className="hover:animate-shake relative h-[277px] lg:h-[599px] rounded-[20px] overflow-hidden group duration-700">
                                    <img
                                        src="/images/Category3.jpg"
                                        alt="Chair"
                                        className="w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 flex justify-start items-start p-5 cursor-pointer">
                                        <p className="text-white text-xl lg:text-2xl font-bold">
                                            Chair
                                        </p>
                                    </div>
                                </div>

                                <div className="hover:animate-shake relative h-[277px] lg:h-[599px] rounded-[20px] overflow-hidden group duration-700">
                                    <img
                                        src="/images/Category4.jpg"
                                        alt="Lamp"
                                        className="w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 flex justify-start items-start p-5 cursor-pointer">
                                        <p className="text-white text-xl lg:text-2xl font-bold">
                                            Lamp
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hover:animate-shake relative lg:w-[33.9%] h-[600px] lg:h-[1069px] rounded-[20px] overflow-hidden group duration-700">
                            <img
                                src="/images/Category2.jpg"
                                alt="Furniture"
                                className="h-full w-full transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 flex justify-start items-start p-5 cursor-pointer">
                                <p className="text-white text-xl lg:text-2xl font-bold">
                                    Furniture
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Category;

