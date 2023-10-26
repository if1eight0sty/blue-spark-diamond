import React from "react";
import { IColorSelectionSectionProps } from "../interface";

const ColorSelectionSectionLarge = ({
  data,
  selectedColor,
  setSelectedProduct,
}: IColorSelectionSectionProps) => {
  return (
    <>
      <div className="flex flex-col gap-8 mt-5 md:mt-10 px-10 md:max-w-xl text-justify text-gray-500 relative">
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
          {data.map((product) => (
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
               ${
                 selectedColor === product.id
                   ? "bg-opacity-100"
                   : "bg-opacity-50"
               }`}
              onClick={() => setSelectedProduct(product)}
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
    </>
  );
};

export default ColorSelectionSectionLarge;
