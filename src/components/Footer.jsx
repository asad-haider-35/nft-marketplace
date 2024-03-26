import React from 'react'
import { CompanyLogo, FacebookLogo, TwitterLogo, LinkedInLogo, InstagramLogo } from "../assets"

const Footer = () => {
    return (
        <section className='mt-28 mb-5 w-full flex justify-center'>
            <div className='w-[90%]'>
                <div className='flex flex-col'>
                    <div className='flex-1 flex md:flex-row md:gap-0 flex-col gap-14 justify-start items-start'>
                        <div className='flex-[1.5] justify-start items-start flex flex-col'>
                            <img src={CompanyLogo} alt="Cyberx" className='md:mb-8 mb-6' />

                            <p className='text-[18px] leading-[160%] text-dimWhite'>
                                Discover NFTs by category, track the latest <br className='sm:block' />  drops, and follow the collections you love. 
                                <br className='sm:block' /> Enjoy it!
                            </p>

                            <div className='flex flex-row gap-16 md:mt-16 mt-10'>
                                <img src={ FacebookLogo } className='cursor-pointer' />
                                <img src={ TwitterLogo } className='cursor-pointer' />
                                <img src={ LinkedInLogo } className='cursor-pointer' />
                                <img src={ InstagramLogo } className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex-[0.5] justify-start items-start flex flex-col'>
                            <p className='text-white font-bold text-[21px] md:mb-8 mb-6'>Menu</p>
                            <ul>
                                <li>
                                    <a href='' className='text-dimWhite text-[17px] leading-10 cursor-pointer'>Explore</a>
                                </li>
                                <li>
                                    <a href='' className='text-dimWhite text-[17px] leading-10 cursor-pointer'>Market place</a>
                                </li>
                                <li>
                                    <a href='' className='text-dimWhite text-[17px] leading-10 cursor-pointer'>Artist</a>
                                </li>
                                <li>
                                    <a href='' className='text-dimWhite text-[17px] leading-10 cursor-pointer'>Collection</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex-[0.5] justify-start items-start flex flex-col sm:mr-10'>
                            <p className='text-white font-bold text-[21px] md:mb-8 mb-6'>Resources</p>
                            <ul>
                                <li>
                                    <a href='' className='text-dimWhite text-[17px] leading-10 cursor-pointer'>Help Center</a>
                                </li>
                                <li>
                                    <a href='' className='text-dimWhite text-[17px] leading-10 cursor-pointer'>Status</a>
                                </li>
                                <li>
                                    <a href='' className='text-dimWhite text-[17px] leading-10 cursor-pointer'>Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex-[0.75] justify-start items-start flex flex-col md:ml-10 ml-0'>
                            <p className='text-white font-bold text-[21px] md:mb-8 mb-6'>Join Our News Letter</p>

                            
                            <p className='text-[18px] leading-[160%] text-dimWhite'>
                                Get the latest update on new and <br className='sm:block' /> trending NFTs and artist which have <br className='sm:block' /> unique artworks.
                            </p>


                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center mt-10'>
                        <p className='text-[17px] leading-6 text-dimWhite'>© 2021 All Rights Reserved. Designed by Shiraz Studios</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
