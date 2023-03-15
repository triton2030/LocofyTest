import type { NextPage } from "next";
import CompPrices from "../components/comp-prices";

const Frame107Mobile: NextPage = () => {
  return (
    <div className="relative rounded-xl bg-blue-chart-ng w-full flex flex-col py-4 px-[95px] box-border items-end justify-center gap-[40px]">
      <CompPrices
        frame="/frame.svg"
        sUSD101="sUSD - 1.01"
        prop="$ 6,580"
        frame77Gap="52px"
      />
      <CompPrices
        frame="/frame1.svg"
        sUSD101="4333"
        prop="324"
        frame77Gap="54px"
      />
      <CompPrices
        frame="/frame2.svg"
        sUSD101="2345"
        prop="345"
        frame77Gap="68px"
      />
    </div>
  );
};

export default Frame107Mobile;
