import React from 'react'
import { clients } from '../constants/constants'


const Clients = () => {
    return (
        <section className='mt-9 mb-5 w-full flex justify-center'>
            <div className='w-[90%]'>
                <div className="w-full flex items-center justify-center">
                    <h1 className='font-sans font-semibold ss:text-[50px] text-[25px] ss:leading-[100.8px] leading-[75px] text-gradient text-center'>Who Trust In Us</h1>
                </div>

                <div className="flex justify-center w-full">
                    <p className={`font-sans font-normal text-dimWhite text-[18px] mt-5 text-center`}>
                        We’re excited about a brand new type of digital product called Non-fungible <br className='sm:block' /> token, or NFT. NFTs have exciting new properties: they’re unique, probably <br className='sm:block' /> scarce, tradeable, and usable across multiple applications
                    </p>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center place-items-center w-full mt-8'>
                    {clients.map((client, index) => (
                        <img key={client.id} src={client.logo} alt={client.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients
