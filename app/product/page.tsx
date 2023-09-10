"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import background from "@/public/background/bg-product.png";
import yellowfancy from "@/public/fancy-colored-diamonds/yellow-fancy.jpg";
import brownfancy from "@/public/fancy-colored-diamonds/Brown-Fancy.jpg";
import grayfancy from "@/public/fancy-colored-diamonds/DarkGrey.jpg";
import pinkfancy from "@/public/fancy-colored-diamonds/Pink-Fancy.jpg";
import orangefancy from "@/public/fancy-colored-diamonds/Orange.jpg";
import greenfancy from "@/public/fancy-colored-diamonds/Green.jpg";
import bluefancy from "@/public/fancy-colored-diamonds/Blue-Fancy.jpg";
import purplefancy from "@/public/fancy-colored-diamonds/Purple-Fancy.jpg";
import violetfancy from "@/public/fancy-colored-diamonds/violet-fancy.jpg";
import redfancy from "@/public/fancy-colored-diamonds/Red-Fancy.jpg";
import { IProduct } from "./interface";
const Page = () => {
    const [selectedColor, setSelectedColor] = useState("brown"); // Default selected color is blue
    const products: IProduct[] = [
        {
            id: "yellow",
            src: yellowfancy,
            desc: "Fancy yellow diamonds are one of the more frequently encountered fancy colours in nature. However, they're still much rarer than colourless diamonds. Yellow hues can occur with very high levels of saturation, producing a vivid and strong appearance compared to other hues, which results in a broad colour range. It is also common for other hues of brown, green and orange to have yellow highlights as a modifying colour. The colouration is created by the presence of nitrogen as an impurity. The concentration and arrangement of nitrogen atoms within the structure control the strength of colour exhibited.",
        },
        {
            id: "brown",
            src: brownfancy,
            desc: "Fancy brown diamonds are another more frequently encountered colour. In their natural state, they're mostly found in specific locations, such as Australia. The brown colouration doesn't occur in the same higher levels of saturation as other hues, such as yellow. The brown range - with underlying hues towards yellow or red, together with modifiers like green, orange or pink - Is the most broadly occurring fancy colour range. The colour is produced by the stretching and snapping of atomic bonds, caused by sheer pressure during the growth process. This is known as plastic deformation.",
            color: "#D2B48C",
        },
        {
            id: "gray",
            src: grayfancy,
            desc: "Natural grey colours vary in tone from light grey to dark grey and eventually to the black end of the tone scale. Grey is a modifying hue for most other fancy colours, but more commonly seen with blue and violet fancy colours. Natural black diamonds are a rare occurrence in nature and offer a unique appearance compared to other diamonds. Due to the opacity, their attractiveness is centred on the lustre and subsequent scintillation that is produced, rather than brilliance and fire. Both grey and black colours are a result of heavily included material. Many dark inclusions overtake the colour caused by the atomic structure. On very rare occasions, black may also be the result of highly saturated dark green, linked to the presence of nitrogen in very high concentrations.",
        },
        {
            id: "pink",
            src: pinkfancy,
            desc: "Fancy pink diamonds are amongst the most popular colours in today's trade. They're primarily from the Argyle mine in Australia, which has sourced over 90% of the world's pinks. A fancy pink without a modifying hue is particularly rare, as they're often accompanied by highlights of purple, brown or orange, creating an impressive range of appearances. The cause of colour is linked to a structural defect, rather than impurity, known as plastic deformation. This is the same anomaly linked to brown and red colours.",
        },
        {
            id: "orange",
            src: orangefancy,
            desc: "Natural orange diamonds without a modifying hue are incredibly rare, similar to red and violet diamonds. The orange colour is vibrant and rich, occurring in extremely high saturations. Orange hues are more often accompanied by secondary hues of brown and yellow, and occasionally pink and red.",
        },
        {
            id: "green",
            src: greenfancy,
            desc: "Natural fancy green diamonds are generally pale in appearance with light tones and low saturations. This is due to their unique cause of colour: proximity to a radioactive source. Unlike other fancy colours, which are formed through impurities and structural irregularities, green colouration may occur after growth. As a result, the green colour is 'skin-deep'. Radioactive particles bombard the outer layer of the structure of the diamond, dislodging carbon atoms, leaving an empty space called a vacancy. Green may also be produced by other means linked to very high concentrations of nitrogen atoms, producing a darker appearance, generally with a modifying hue of grey, yellow or brown.",
        },
        {
            id: "blue",
            src: bluefancy,
            desc: "Fancy blue diamond's hold a prestigious appeal within the trade of fancy colours due to many larger and famous diamonds holding a blue colour. Fancy blues typically occur in lighter saturations of blue and are often modified with a de-saturated greyish tone. Vibrant blue diamonds with higher saturation are very rare, even by fancy colour standards. Deeper colours that exhibit darker tones are not always considered as desirable as higher tones of intense and vivid; however, with blue hues, the combination of a darker tone and higher saturation accentuates the depth of colour. The colouration in the majority of fancy blue diamonds is a result of the element boron as an atomic impurity, which produces the traditional blue colour. Other rarer vivid blue colours are a result of hydrogen as an atomic impurity.",
        },
        {
            id: "purple",
            src: purplefancy,
            desc: "Fancy purple diamonds without a modified hue are one of the rarest of fancy colours. Generally displaying a vibrant and bright appearance, they're considered highly valuable within the range of fancy colours. They're most often accompanied by pink, but may also have grey, red or blue modifiers. Their origin is not tied to a single area of the earth as some other fancy colours, such as pink, which is usually found in four areas - Australia, Brazil, South Africa and Russia.",
        },
        {
            id: "violet",
            src: violetfancy,
            desc: "Violet diamonds are incredibly rare, comparable to that of red and purple, and they are almost non-existent at carat weights above 1ct. They're unearthed from the Argyle mine in Australia, the same location as most of the Earth's pinks and reds. The colour is linked to the presence of hydrogen as an impurity and is almost exclusively accompanied by a modifying hue of blue or grey.",
        },
        {
            id: "red",
            src: redfancy,
            desc: "Fancy red diamonds are thought to be the rarest of fancy colours, with only a handful ever discovered that is truly red without any secondary modifying colour such as purple or brown. Fancy colours of purple and violet are also in the same bracket of rarity. The red colour is linked to the structural defect known as plastic deformation, the same phenomenon that is linked to pink and brown colours.",
        },
    ];

    const defaultBrownProduct: IProduct = {
        id: "brown",
        src: brownfancy,
        desc: "Fancy brown diamonds are another more frequently encountered colour. In their natural state, they're mostly found in specific locations, such as Australia. The brown colouration doesn't occur in the same higher levels of saturation as other hues, such as yellow. The brown range - with underlying hues towards yellow or red, together with modifiers like green, orange or pink - Is the most broadly occurring fancy colour range. The colour is produced by the stretching and snapping of atomic bonds, caused by sheer pressure during the growth process. This is known as plastic deformation.",
        color: "#D2B48C",
    }

    const selectedProduct: IProduct =
        products.find((product) => product.id === selectedColor) ||
        defaultBrownProduct;

    const handleColorClick = (colorId: string) => {
        setSelectedColor(colorId);
    };
    return (
        <>   <section
            className="bg-cover bg-center"
            style={{
                backgroundImage: `url('${background.src}')`,
                minHeight: "100vh",
            }}
        >
            <div className="w-full flex bg-gradient-to-br from-blue-50 to-rose-50 relative rounded-md">
                <div className="flex flex-col mt-[4.5rem] md:mt-[6.5rem] px-10">
                    <h3 className="font-light text-xs md:text-sm text-[#262626]">
                        Blue Spark presents
                    </h3>
                    <h1 className="text-[2.5rem] md:text-7xl text-gray-500 font-bold md:font-black">
                        Types of Diamond
                    </h1>
                </div>
            </div>
            {/* another section */}
            <div className="flex flex-col gap-8 mt-5 md:mt-14 px-10 md:max-w-xl text-justify text-gray-500 relative">
                <p>
                    Diamonds occur in a wide variety of colors. These colors are the
                    result of the interstitial impurities present within the diamond.
                    Generally, there are Blue, White, Pink and Yellow Diamonds.
                </p>

                <h4 className="hidden md:block absolute text-lg top-36 md:top-24 font-semibold text-gray-500">
                    Fancy Colored Diamonds
                    <span className="text-sm font-normal"> (Choose the colour)</span>
                </h4>
                {/* choosing color section */}
                <div
                    data-aos="flip-up"
                    className="md:grid grid-cols-5 md:grid-cols-5 grid-rows-2 md:grid-rows-2 gap-2 p-2 w-fit h-fit bg-slate-200 rounded-sm relative mt-10 hidden"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                backgroundColor: product.id === "brown" ? product.color : "",
                            }}
                            className={`flex text-center items-center justify-center w-14 h-14 group rounded-md cursor-pointer relative 
              ${product.id === "yellow" && `bg-yellow-400`} 
              ${product.id === "gray" && `bg-gray-400`} 
              ${product.id === "pink" && `bg-pink-400`} 
              ${product.id === "orange" && `bg-orange-400`} 
              ${product.id === "green" && `bg-green-400`} 
              ${product.id === "blue" && `bg-blue-400`} 
              ${product.id === "purple" && `bg-purple-400`} 
              ${product.id === "violet" && `bg-violet-400`} 
              ${product.id === "red" && `bg-red-400`} 
               ${selectedColor === product.id
                                    ? "bg-opacity-100"
                                    : "bg-opacity-50"
                                }`}
                            onClick={() => handleColorClick(product.id)}
                        >
                            <p
                                className={`text-white text-xs opacity-0 absolute flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 uppercase`}
                            >
                                {product.id.toUpperCase()}
                            </p>
                        </div>
                    ))}
                </div>
                {/* color section fin */}
            </div>
            {/* dynamic content */}
            <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <p className="order-2 lg:order-1 bg-gray-100 text-gray-500 mt-10 p-5  px-10 rounded-md   xl:max-w-2xl h-[27em]">
                    {selectedProduct.desc}
                </p>
                <Image
                    src={selectedProduct.src}
                    alt={`${selectedProduct.id}-diamond`}
                    priority
                    style={{ width: "auto" }}
                    className="order-1 lg:order-2 w-full h-full lg:max-w-xl lg:h-fit xl:top-[19rem] xl:right-0 xl:w-full xl:h-fit px-10 rounded-md object-cover pt-10 text-justify"
                />
            </div>
            {/* choosing color section */}
            <div data-aos="flip-up" className="flex flex-col items-center md:hidden pb-10">
                <div className="w-full px-10">
                    <h4 className="text-lg font-semibold text-gray-500">
                        Fancy Colored Diamonds
                        <span className="text-sm font-normal"> (Choose the colour)</span>
                    </h4>
                </div>
                <div
                    className="grid grid-cols-5 md:grid-cols-5 grid-rows-2 md:grid-rows-2 gap-2 p-2 w-fit h-fit bg-slate-200 rounded-sm relative mt-5 place-content-center"
                >

                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                backgroundColor: product.id === "brown" ? product.color : "",
                            }}
                            className={`flex text-center items-center justify-center w-14 h-14 group rounded-md cursor-pointer relative 
              ${product.id === "yellow" && `bg-yellow-400`} 
              ${product.id === "gray" && `bg-gray-400`} 
              ${product.id === "pink" && `bg-pink-400`} 
              ${product.id === "orange" && `bg-orange-400`} 
              ${product.id === "green" && `bg-green-400`} 
              ${product.id === "blue" && `bg-blue-400`} 
              ${product.id === "purple" && `bg-purple-400`}   
              ${product.id === "violet" && `bg-violet-400`} 
              ${product.id === "red" && `bg-red-400`} 
               ${selectedColor === product.id
                                    ? "bg-opacity-100"
                                    : "bg-opacity-50"
                                }`}
                            onClick={() => handleColorClick(product.id)}
                        >
                            <p
                                className={`text-white text-xs opacity-0 absolute flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 uppercase`}
                            >
                                {product.id.toUpperCase()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* color section fin */}
        </section>
        </>
    )
}

export default Page