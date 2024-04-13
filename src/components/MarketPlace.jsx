import React from "react";
import { nfts } from "../constants/constants";
import NFTCard from "./NFTCard";

const MarketPlace = () => {
  return (
    <div className='grid grid-cols-3 gap-3 w-[90%] pl-20'>
      {nfts.map((x) => {
        return (
          <div key={x.id}>
            <NFTCard nft={x} />
          </div>
        );
      })}
    </div>
  );
};

export default MarketPlace;
