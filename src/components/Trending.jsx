import ButtonTab from "./ButtonTab";
import { useState } from "react";
import { format } from "date-fns";
import NFTCard from "./NFTCard";
import Button from "./Button";
import { trendingNft } from "../constants/constants";

const Trending = () => {
  const [tabs, setTabs] = useState([
    {
      Text: "Listing History",
      IsActive: false,
    },
    {
      Text: "Details",
      IsActive: true,
    },
    {
      Text: "Bids",
      IsActive: false,
    },
  ]);
  const [active, setActive] = useState(
    tabs.filter((x) => x.IsActive === true)[0].Text
  );

  return (
    <section className="text-white mt-9 w-[90%] mb-5">
      <div className="w-full flex items-center justify-center">
        <h1 className="font-sans font-semibold ss:text-[50px] text-[25px] ss:leading-[100.8px] leading-[75px] text-gradient text-center">
          Hot Trending On This Week
        </h1>
      </div>

      <div className="flex justify-center">
        <p
          className={`font-sans font-normal text-dimWhite text-[18px] w-[576px] mt-5 text-center`}
        >
          Begin with the most trending NFT and the simplest stage to purchase
          and exchange advanced workmanship
        </p>
      </div>

      <div className="p-5 flex flex-row justify-center items-start bg-dimBlue rounded-[20px] mt-8 w-[100%]">
        <div className="flex-[1]">
          <NFTCard nft={trendingNft} />
        </div>
        <div className="flex-[1.5]">
          <ButtonTab buttons={tabs} styles={"bg-primary rounded py-2 w-[50%]"}>
            <ul className="list-none justify-around items-center flex-1 flex">
              {tabs.map((button, index) => (
                <li key={index}>
                  {button.Text === active ? (
                    <Button
                      text={button.Text}
                      styles={"gradient text-white"}
                      textStyles={"transform skew-x-12"}
                      onClick={() => setActive(button.Text)}
                    />
                  ) : (
                    <Button
                      text={button.Text}
                      styles={"bg-transparent text-dimWhite"}
                      textStyles={"transform skew-x-12"}
                      onClick={() => setActive(button.Text)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </ButtonTab>

          <div className="mt-6">
            <p className="text-dimWhite text-[18px]">
              {format(trendingNft.createdDate, "MMMM dd, yyyy, h:mm a")}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-secondary text-[40px] font-bold">
              {"#" + trendingNft.code + " " + trendingNft.name}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-dimWhite text-[18px]">
              {trendingNft.description}
            </p>
          </div>

          <div className="flex flex-row mt-6 py-2">
            <img
              src={trendingNft.ownerProfilePic}
              className="rounded-full w-[60px] h-[60px] mr-4"
            />
            <div>
              <span className="flex flex-row text-dimWhite text-[18px]">
                Owner
              </span>
              <span className="flex flex-row text-secondary text-[22px]">
                {trendingNft.owner}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
