import React from 'react'

export const Card = ({title,description,img}) => {
    return (
        <div>
            <div className="max-w-md mx-auto bg-black shadow-lg rounded-lg overflow-hidden  transition duration-300 transform hover:scale-105 bg-black hover:bg-gray-800 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-500">
                <div className="px-6 py-4">
                    <img className='w-20  mt-[3rem] bg-transparent ' src={img} alt="/" />
                    <h2 className="text-xl font-semibold text-white">{title}</h2>
                    <p className="mt-2 text-gray-300">{description}</p>
                </div>
            </div>
        </div>
    )
}


