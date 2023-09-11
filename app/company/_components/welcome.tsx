import React from 'react'

const Welcome = () => {
    return (
        <> <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins">
            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap ">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative isolate">
                            <iframe
                                width="420"
                                height="315"
                                src="https://youtube.com/embed/dphEntkbi0I?autoplay=1&controls=0"
                                className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                            ></iframe>
                            <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <div className="relative">
                            <h1 className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  opacity-5 md:block hidden select-none">
                                About Us
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl text-gray-600">
                                Welcome to our site
                            </h1>
                        </div>
                        <div className="mt-6 mb-10 text-base leading-7 text-gray-500">
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500">
                                Diamond&apos;s characteristic chemical composition and crystal
                                structure make it a unique member of the mineral kingdom.
                                Diamonds are one of the most complex and beautiful creations
                                of nature. The crystalline beauty of diamonds is a thing of
                                wonder and appreciation. Owning a diamond is a very exclusive
                                feeling of pride. Formed billions of years ago, under extreme
                                heat and pressure, diamonds are the purest form of transparent
                                carbon. It takes decades of very intensive and intricate
                                processes to make an economical diamond deposit discovery.
                                Such is the Greek Word its name is derived from; Ad&aacute;mas
                                &mdash; Unconquerable or Invincible.
                            </p>
                        </div>

                        <a
                            href="#"
                            className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section></>
    )
}

export default Welcome