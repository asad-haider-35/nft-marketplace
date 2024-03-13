import React from "react";

const NFTCard = ({ nft }) => {
  function getCorrectTimeFormat(date) {
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hour}H : ${minutes}M : ${seconds}S`;
  }
  return (
    <div className="rounded-lg shadow-md bg-primary h-96 w-96 flex flex-row justify-center items-center rounded-3xl">
      <div
        className="relative  bg-center bg-contain bg-dimBlue h-[22rem] w-[22rem] rounded-2xl"
        style={{ backgroundImage: `url(${nft.imagePath})` }}
      >
        <div className="absolute top-0 right-0">
          <div className="bg-primary w-32 rounded-lg">
            <p className="text-dimWhite text-[10px]">Remaining Time</p>
            <p className="font-bold text-md text-secondary ">
              {getCorrectTimeFormat(nft.remainingTimeForBid)}
            </p>
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="bg-primary rounded-r-lg h-44 w-7 flex items-center">
            <p className="text-white text-[12px] [writing-mode:vertical-lr] pl-2">
              # {nft.code} {nft.name}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-16">
          <div className="grid gap-2 grid-cols-2 h-16">
            <div className="bg-primary rounded-r-lg transform skew-x-6">
              <div className="transform -skew-x-6 flex flex-row items-start pl-2 pt-2">
                <div>
                  <p className="text-white text-[10px]">Current Bid</p>
                  <p className="font-bold text-lg text-secondary">
                    {`${nft.currentBidInETH} ETH`}
                  </p>
                </div>
                <div className="text-dimWhite text-[10px] pb-1 pl-2">
                  <p>{`(${nft.currentBidInUSD})`}</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-2 gradient text-white text-white rounded-md transform skew-x-6 flex items-center mb-2">
              <div className="transform -skew-x-6 pl-8 ">Place Bid</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
