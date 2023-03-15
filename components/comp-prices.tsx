import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type CompPricesType = {
  frame?: string;
  sUSD101?: string;
  prop?: string;

  /** Style props */
  frame77Gap?: Property.Gap;
};

const CompPrices: NextPage<CompPricesType> = ({
  frame,
  sUSD101,
  prop,
  frame77Gap,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      gap: frame77Gap,
    };
  }, [frame77Gap]);

  return (
    <div
      className="flex flex-row items-center justify-start gap-[8px] text-left text-xs text-blue-blue font-mono-captions"
      style={frameDivStyle}
    >
      <img
        className="relative w-6 h-6 shrink-0 overflow-hidden"
        alt=""
        src={frame}
      />
      <div className="flex flex-col items-start justify-center gap-[2px]">
        <div className="relative leading-[14px]">{sUSD101}</div>
        <div className="relative leading-[14px] text-blue-white">{prop}</div>
      </div>
    </div>
  );
};

export default CompPrices;
