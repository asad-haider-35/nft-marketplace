import React from 'react'
import { CartIcon } from '../assets'

const RoundedButton = ({ styles }) => (
    <button className={`justify-center items-center text-white rounded-full py-3 px-3 bg-dark-grey-custom ${styles}`}>
        <img src={ CartIcon } />
    </button>
)

// const CartIcon = () => (
//     <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M0.274219 0.0737772C0.123047 0.151121 0 0.358542 0 0.527292C0 0.703074 0.123047 0.903464 0.28125 0.984324C0.411328 1.05112 0.485156 1.05464 1.57148 1.05464H2.72812L3.99727 5.50542L5.26992 9.9562L5.16797 10.1601C4.99219 10.5082 4.91484 10.7824 4.91484 11.0742C4.91484 11.8054 5.38945 12.4171 6.09961 12.6035C6.25078 12.6421 6.50391 12.6562 7.03125 12.6597C7.67812 12.6632 7.73438 12.6667 7.57617 12.7054C7.28437 12.7757 7.06289 12.9023 6.83437 13.1273C6.21211 13.7531 6.21211 14.7269 6.83437 15.3457C7.46367 15.9714 8.43398 15.9714 9.05273 15.3492C9.53438 14.864 9.65391 14.1609 9.36211 13.5421C9.1793 13.1519 8.70117 12.7757 8.28633 12.6914C8.20195 12.6773 9.20742 12.6632 10.5996 12.6632C12.6141 12.6632 13.0289 12.6703 12.8848 12.7054C12.593 12.7757 12.3715 12.9023 12.143 13.1273C11.5207 13.7531 11.5207 14.7269 12.143 15.3457C12.7723 15.9714 13.7426 15.9714 14.3613 15.3492C14.9871 14.7199 14.9871 13.7531 14.3613 13.1273C14.1398 12.9023 13.9148 12.7757 13.623 12.7054C13.4719 12.6667 13.5844 12.6632 14.4598 12.6597C15.402 12.6562 15.4828 12.6527 15.6094 12.5859C15.7676 12.505 15.8906 12.3046 15.8906 12.1289C15.8906 11.9531 15.7676 11.7527 15.6094 11.6718C15.4723 11.6015 15.4125 11.6015 10.9266 11.6015C6.66914 11.6015 6.37383 11.598 6.25781 11.5382C5.97305 11.3976 5.90273 11.0882 6.07148 10.7402L6.16641 10.5468H10.8176C15.4301 10.5468 15.4723 10.5468 15.6129 10.4765C15.7113 10.4238 15.7746 10.3605 15.8203 10.255C15.9082 10.0652 18 2.73862 18 2.61909C18 2.46089 17.8699 2.25698 17.7188 2.17964C17.5816 2.10932 17.5254 2.10932 10.8527 2.10932H4.12383L3.88828 1.2726C3.60703 0.281199 3.56133 0.179246 3.37852 0.0772924C3.24492 -5.14984e-05 3.2168 -5.14984e-05 1.82461 -5.14984e-05C0.481641 0.0034647 0.397266 0.00697994 0.274219 0.0737772Z" fill="#ABAEB3"/>
//     </svg>
// )

export default RoundedButton
