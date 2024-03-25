import React from "react";
import { nfts } from "../constants/constants";
import NFTCard from "./NFTCard";

const MarketPlace = () => {
  return (
    <div className='grid grid-cols-3 gap-3 w-[90%]'>
      {nfts.map((x) => {
        return (
          <div className="">
            <NFTCard nft={x} />
          </div>
        );
      })}
    </div>
  );
};

export default MarketPlace;
