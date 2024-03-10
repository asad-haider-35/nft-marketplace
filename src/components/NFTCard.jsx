import React from "react";
import { SquidO } from "../assets";

const NFTCard = ({ nft }) => {
  return (
    <div className="rounded-lg shadow-md bg-primary h-96 w-96 flex flex-row justify-center items-center rounded-3xl">
      <div
        className="relative  bg-center bg-contain bg-dimBlue h-[22rem] w-[22rem] rounded-2xl"
        style={{ backgroundImage: `url(${nft.imagePath})` }}
      >
        <div className="absolute top-0 right-0">
          <div className="bg-primary w-32">
            <p className="text-white text-xs">Remaining Time</p>
            <p className="font-bold text-md text-white ">07H : 10M : 30S</p>
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="bg-primary rounded-r-lg h-44 w-7">
            <p className="text-white text-xs [writing-mode:vertical-lr]">
              # {nft.code} {nft.name}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <div className="grid gap-2 grid-cols-2">
            <div className="bg-primary">
              <p className="text-white ">Current Bid</p>
              <p className="font-bold text-lg text-white">
                {nft.currentBidInETH}
              </p>
            </div>
            <button className="px-4 py-2 gradient text-white text-white rounded-md">
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
