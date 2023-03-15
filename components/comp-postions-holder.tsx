import type { NextPage } from "next";
import CompPositionsElements from "./comp-positions-elements";

const CompPostionsHolder: NextPage = () => {
  return (
    <div className="self-stretch rounded-md bg-blue-chart-ng flex flex-col p-3 items-start justify-start gap-[12px] text-left text-xs text-blue-green-400 font-par-bold border-[1px] border-solid border-blue-main-block">
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px]">
          <CompPositionsElements bTCPERP="BTC-PERP" prop="$1,435.89" />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Size"
            prop="0.75 ($1,183.82)"
            propColor="#fff"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Avg Entry"
            prop="$1,435.89"
            propColor="#fff"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP={`Realized P&L`}
            prop="-$1.43 (-9.20%)"
            propColor="#e4364b"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px]">
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Leverage"
            prop="19.61x"
            propColor="#00c9a5"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP={`Unrealized P&L`}
            prop="$1.43 (9.20%)"
            propColor="#00c9a5"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Liq Price"
            prop="$1,435.89"
            propColor="#fff"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Net Funding"
            prop="$1.43"
            propColor="#00c9a5"
          />
        </div>
      </div>
      <div className="self-stretch rounded flex flex-row py-1 px-2 items-center justify-center text-blue-red-500 border-[1px] border-solid border-blue-red-500">
        <div className="relative leading-[14px]">Close Position</div>
      </div>
    </div>
  );
};

export default CompPostionsHolder;
