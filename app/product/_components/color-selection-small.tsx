import React from 'react'
import { IColorSelectionSectionProps } from '../interface'

const ColorSelectionSmall = ({ data, selectedColor, setSelectedProduct }: IColorSelectionSectionProps) => {
    return (
        <><div data-aos="flip-up" className="flex flex-col items-center md:hidden pb-10">
            <div className="w-full px-10">
                <h4 className="text-lg font-semibold text-gray-500">
                    Fancy Colored Diamonds
                    <span className="text-sm font-normal"> (Choose the color)</span>
                </h4>
            </div>
            <div
                className="grid grid-cols-5 md:grid-cols-5 grid-rows-2 md:grid-rows-2 gap-2 p-2 w-fit h-fit bg-slate-200 rounded-sm relative mt-5 place-content-center"
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
               ${selectedColor === product.id
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
        </div></>
    )
}

export default ColorSelectionSmall