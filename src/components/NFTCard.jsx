import React from "react";
import { SquidO } from "../assets";

const NFTCard = ({ nft }) => {
  return (
    <div
      className="rounded-lg shadow-md bg-primary h-96 w-96 flex flex-row justify-center items-center rounded-3xl"
    >
      <div  
        className="bg-center bg-contain bg-dimBlue h-5/6 w-5/6 rounded-2xl" 
        style={{ backgroundImage: `url(${nft.imagePath})` }}>
        
      </div>
      {/* <div className="relative">
        <img className="w-full h-full object-cover rounded-t-lg" src={nft.imagePath} alt={nft.name} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 px-6 py-4 flex justify-between items-center">
          <p className="text-white text-lg font-bold">{nft.name}</p>
          <p className="text-white text-sm">{nft.code}</p>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <p className="text-gray-700">Remaining Time</p>
          <p className="font-bold text-lg text-gray-800">{nft.remainingTime}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-gray-700">Current Bid</p>
            <p className="font-bold text-lg text-gray-800">{nft.currentBidInETH}</p>
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Place Bid
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default NFTCard;
