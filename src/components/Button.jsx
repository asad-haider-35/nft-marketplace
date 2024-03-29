import React from 'react'

const Button = ({ styles, textStyles, text, onClick }) => (
    <button className={`py-2 px-4 rounded text-[15px] font-sans ${styles}`} onClick={onClick}>
        <div className={`${textStyles}`}>
            {text}
        </div>
    </button>
    // <button className="relative overflow-hidden rounded-full">
    //     <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-600 rounded-r-full py-2 px-4 text-white shadow-md">
    //         Click me
    //     </div>
    //     <div className="absolute inset-0 bg-white rounded-l-full py-2 px-4 text-white shadow-md transform -skew-x-12"></div>
    // </button>
)

export default Button
