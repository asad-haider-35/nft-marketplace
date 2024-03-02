import React from 'react'
import Button from './Button'
import { Wolf, LightEffect } from '../assets'

const Hero = () => (
    <section id='explore' className='flex md:flex-row flex-col sm:py-6 py-16'>
        <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-sans font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                <span className="text-gradient">Discover Best</span> <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Digital Art &</span>{" "}<br className="sm:block hidden" />
                <span className="text-gradient">Collect NFTs.</span>{" "}
                </h1>
                
            </div>

            <p className={`font-sans font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
                Digital market place for crypto collectors and non-fungible tokens (NFTs)
            </p>

            <Button text="Explore More" styles={'mt-5'} />

        </div>

        <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
            <img src={Wolf} alt="billing" className="relative z-[5] " /> {/*w-[447px] h-[583px]*/}

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
        </div>

    </section>
)

export default Hero