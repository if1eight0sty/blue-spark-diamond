"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic'

import { IProduct } from "./interface";
import { getCldImageUrl } from "next-cloudinary";

const HeadSection = dynamic(() => import('./_components/head-section'), {
})
const ColorSelectionSectionLarge = dynamic(() => import("./_components/color-selection-large"), {
});
const ColorSelectionSmall = dynamic(() => import("./_components/color-selection-small"), {
})
const Page = () => {
    // get image url from cloudinary based on the image name/public id
    const getImageURL = (
        height: number,
        width: number,
        src: string,
    ) => {
        return getCldImageUrl({
            width,
            height,
            src,
        })
    }
    const [selectedProduct, setSelectedProduct] = useState<IProduct>({
        id: "brown",
        src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/Brown-Fancy"),
        desc: "Fancy brown diamonds are another more frequently encountered colour. In their natural state, they're mostly found in specific locations, such as Australia. The brown colouration doesn't occur in the same higher levels of saturation as other hues, such as yellow. The brown range - with underlying hues towards yellow or red, together with modifiers like green, orange or pink - Is the most broadly occurring fancy colour range. The colour is produced by the stretching and snapping of atomic bonds, caused by sheer pressure during the growth process. This is known as plastic deformation.",
        color: "#D2B48C",
    }); // Default selected color is blue
    const products: IProduct[] = useMemo(() => {
        return [
            {
                id: "yellow",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/yellow-fancy"),
                desc: "Fancy yellow diamonds are one of the more frequently encountered fancy colours in nature. However, they're still much rarer than colourless diamonds. Yellow hues can occur with very high levels of saturation, producing a vivid and strong appearance compared to other hues, which results in a broad colour range. It is also common for other hues of brown, green and orange to have yellow highlights as a modifying colour. The colouration is created by the presence of nitrogen as an impurity. The concentration and arrangement of nitrogen atoms within the structure control the strength of colour exhibited.",
            },
            {
                id: "brown",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/Brown-Fancy"),
                desc: "Fancy brown diamonds are another more frequently encountered colour. In their natural state, they're mostly found in specific locations, such as Australia. The brown colouration doesn't occur in the same higher levels of saturation as other hues, such as yellow. The brown range - with underlying hues towards yellow or red, together with modifiers like green, orange or pink - Is the most broadly occurring fancy colour range. The colour is produced by the stretching and snapping of atomic bonds, caused by sheer pressure during the growth process. This is known as plastic deformation.",
                color: "#D2B48C",
            },
            {
                id: "gray",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/DarkGrey"),
                desc: "Natural grey colours vary in tone from light grey to dark grey and eventually to the black end of the tone scale. Grey is a modifying hue for most other fancy colours, but more commonly seen with blue and violet fancy colours. Natural black diamonds are a rare occurrence in nature and offer a unique appearance compared to other diamonds. Due to the opacity, their attractiveness is centred on the lustre and subsequent scintillation that is produced, rather than brilliance and fire. Both grey and black colours are a result of heavily included material. Many dark inclusions overtake the colour caused by the atomic structure. On very rare occasions, black may also be the result of highly saturated dark green, linked to the presence of nitrogen in very high concentrations.",
            },
            {
                id: "pink",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/Pink-Fancy"),
                desc: "Fancy pink diamonds are amongst the most popular colours in today's trade. They're primarily from the Argyle mine in Australia, which has sourced over 90% of the world's pinks. A fancy pink without a modifying hue is particularly rare, as they're often accompanied by highlights of purple, brown or orange, creating an impressive range of appearances. The cause of colour is linked to a structural defect, rather than impurity, known as plastic deformation. This is the same anomaly linked to brown and red colours.",
            },
            {
                id: "orange",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/Orange"),
                desc: "Natural orange diamonds without a modifying hue are incredibly rare, similar to red and violet diamonds. The orange colour is vibrant and rich, occurring in extremely high saturations. Orange hues are more often accompanied by secondary hues of brown and yellow, and occasionally pink and red.",
            },
            {
                id: "green",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/Green"),
                desc: "Natural fancy green diamonds are generally pale in appearance with light tones and low saturations. This is due to their unique cause of colour: proximity to a radioactive source. Unlike other fancy colours, which are formed through impurities and structural irregularities, green colouration may occur after growth. As a result, the green colour is 'skin-deep'. Radioactive particles bombard the outer layer of the structure of the diamond, dislodging carbon atoms, leaving an empty space called a vacancy. Green may also be produced by other means linked to very high concentrations of nitrogen atoms, producing a darker appearance, generally with a modifying hue of grey, yellow or brown.",
            },
            {
                id: "blue",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/Blue-Fancy"),
                desc: "Fancy blue diamond's hold a prestigious appeal within the trade of fancy colours due to many larger and famous diamonds holding a blue colour. Fancy blues typically occur in lighter saturations of blue and are often modified with a de-saturated greyish tone. Vibrant blue diamonds with higher saturation are very rare, even by fancy colour standards. Deeper colours that exhibit darker tones are not always considered as desirable as higher tones of intense and vivid; however, with blue hues, the combination of a darker tone and higher saturation accentuates the depth of colour. The colouration in the majority of fancy blue diamonds is a result of the element boron as an atomic impurity, which produces the traditional blue colour. Other rarer vivid blue colours are a result of hydrogen as an atomic impurity.",
            },
            {
                id: "purple",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/Purple-Fancy"),
                desc: "Fancy purple diamonds without a modified hue are one of the rarest of fancy colours. Generally displaying a vibrant and bright appearance, they're considered highly valuable within the range of fancy colours. They're most often accompanied by pink, but may also have grey, red or blue modifiers. Their origin is not tied to a single area of the earth as some other fancy colours, such as pink, which is usually found in four areas - Australia, Brazil, South Africa and Russia.",
            },
            {
                id: "violet",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/violet-fancy"),
                desc: "Violet diamonds are incredibly rare, comparable to that of red and purple, and they are almost non-existent at carat weights above 1ct. They're unearthed from the Argyle mine in Australia, the same location as most of the Earth's pinks and reds. The colour is linked to the presence of hydrogen as an impurity and is almost exclusively accompanied by a modifying hue of blue or grey.",
            },
            {
                id: "red",
                src: getImageURL(500, 900, "blue-spark/fancy-colored-diamonds/Red-Fancy"),
                desc: "Fancy red diamonds are thought to be the rarest of fancy colours, with only a handful ever discovered that is truly red without any secondary modifying colour such as purple or brown. Fancy colours of purple and violet are also in the same bracket of rarity. The red colour is linked to the structural defect known as plastic deformation, the same phenomenon that is linked to pink and brown colours.",
            },
        ]
    }, []);

    return (
        <>
            <section
                className="bg-cover bg-center bg-white"
                style={{
                    backgroundImage: `url('${getImageURL(960, 1080, "blue-spark/background/bg-product")}')`,
                    minHeight: "100vh",
                }}
            >
                <HeadSection />
                {/* another section */}
                <ColorSelectionSectionLarge data={products} setSelectedProduct={setSelectedProduct} selectedColor={selectedProduct?.id} />
                {/* dynamic content */}
                <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    <div className="lg:flex-1 flex lg:items-center order-2 lg:order-1 bg-gray-100 text-gray-500 mt-10 p-5 rounded-md xl:max-w-2xl h-[27em]">
                        <p className="">
                            {selectedProduct.desc}
                        </p>
                    </div>
                    <div className="flex justify-center items-center h-full lg:flex-1 w-full mt-10 bg-gray-100">
                        <Image
                            src={selectedProduct.src}
                            alt={`${selectedProduct.id}-diamond`}
                            width={600}
                            height={400}
                            priority
                            style={{ width: "auto" }}
                            className="order-1 lg:order-2 w-full h-full xl:top-[19rem] xl:right-0 lg:h-[27em] px-5 rounded-md object-cover pt-10 text-justify"
                        />
                    </div>
                </div>
                {/* choosing color section */}
                <ColorSelectionSmall data={products} setSelectedProduct={setSelectedProduct} selectedColor={selectedProduct.id} />
                {/* color section fin */}
            </section>
        </>
    )
}

export default Page