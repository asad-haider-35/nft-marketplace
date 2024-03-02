import React from 'react'

const Button = ({ styles, text }) => (
    <button className={`gradient py-2 px-4 text-white rounded font-semibold text-[15px] font-sans ${styles}`}>
        {text}
    </button>
)

export default Button
