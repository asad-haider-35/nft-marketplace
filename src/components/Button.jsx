import React from 'react'

const Button = ({ styles, text }) => (
    <button className={`py-2 px-4 rounded text-[15px] font-sans transform -skew-x-12 ${styles}`}>
        <div className='transform skew-x-12'>
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
