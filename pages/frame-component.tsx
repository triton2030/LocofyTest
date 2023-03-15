import type { NextPage } from "next";
import CompPrices from "../components/comp-prices";

const FrameComponent: NextPage = () => {
  return (
    <div className="relative rounded-xl bg-blue-chart-ng w-full flex flex-row py-4 px-5 box-border items-start justify-start gap-[40px] lg:flex-row lg:gap-[40px] lg:items-center lg:justify-center md:flex-col md:gap-[40px] md:items-center md:justify-center sm:flex-col sm:gap-[40px] sm:items-center sm:justify-center">
      <CompPrices frame="/frame3.svg" sUSD101="sUSD - 1.01" prop="$ 6,580" />
      <CompPrices
        frame="/frame4.svg"
        sUSD101="4333"
        prop="324"
        frame77Gap="8px"
      />
      <CompPrices
        frame="/frame5.svg"
        sUSD101="2345"
        prop="345"
        frame77Gap="8px"
      />
    </div>
  );
};

export default FrameComponent;
