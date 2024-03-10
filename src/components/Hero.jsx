import React from 'react'
import Button from './Button'
import { Wolf, LightEffect } from '../assets'
import Stats from './Stats'

const Hero = () => (
    <section id='explore' className='flex md:flex-row flex-col sm:py-6 py-16'>
        <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-sans font-semibold ss:text-[62px] text-[35px] ss:leading-[100.8px] leading-[75px]">
                <span className="text-gradient">Discover Best</span> <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Digital Art &</span>{" "}<br className="sm:block hidden" />
                <span className="text-gradient">Collect NFTs.</span>{" "}
                </h1>
                
            </div>

            <p className={`font-sans font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
                Digital market place for crypto collectors and non-fungible tokens (NFTs)
            </p>

            <Button text="Explore More" styles={'mt-5 gradient font-semibold text-white transform -skew-x-12'} textStyles={'transform skew-x-12'} />

            <div className='mt-5'>
                <Stats />
            </div>

        </div>

        <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
            <img src={Wolf} alt="billing" className="relative z-[5] " /> {/*w-[447px] h-[583px]*/}

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[0%] rounded-full bottom-0 bottom__shadow" />
            {/* gradient end */}
        </div>

    </section>
)

export default Hero