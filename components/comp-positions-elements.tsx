import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type CompPositionsElementsType = {
  bTCPERP?: string;
  prop?: string;

  /** Style props */
  lONGDisplay?: Property.Display;
  propColor?: Property.Color;
};

const CompPositionsElements: NextPage<CompPositionsElementsType> = ({
  lONGDisplay,
  bTCPERP,
  prop,
  propColor,
}) => {
  const lONGStyle: CSS.Properties = useMemo(() => {
    return {
      display: lONGDisplay,
    };
  }, [lONGDisplay]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch rounded bg-blue-block-bg50 flex flex-row py-1 px-2 items-start justify-between text-left text-xs text-blue-green-400 font-par-bold">
      <div className="flex flex-row items-start justify-start gap-[5px]">
        <div className="relative leading-[14px]" style={lONGStyle}>
          LONG
        </div>
        <div className="relative leading-[14px] text-blue-white">{bTCPERP}</div>
      </div>
      <div
        className="relative leading-[14px] font-mono-captions"
        style={divStyle}
      >
        {prop}
      </div>
    </div>
  );
};

export default CompPositionsElements;
