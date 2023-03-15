import type { NextPage } from "next";

const SectionSummary: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-left text-xs text-blue-blue font-par-bold">
      <div className="rounded-xl bg-blue-chart-ng flex flex-row py-4 px-5 items-center justify-start text-blue-white">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative rounded-142xl-5 w-6 h-6 shrink-0 object-cover"
            alt=""
            src="/image-12@2x.png"
          />
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <div className="relative leading-[14px]">BTC-PERP Perpetual</div>
            <div className="relative text-sm leading-[16px] font-medium font-mono-captions">
              $ 22,911
            </div>
          </div>
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="/frame4.svg"
          />
        </div>
      </div>
      <div className="flex-1 rounded-xl bg-blue-chart-ng flex flex-row py-4 px-10 items-center justify-start">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <div className="relative leading-[14px]">Index Price</div>
            <div className="relative leading-[14px] font-mono-captions text-blue-white">
              $22,907
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="/frame5.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[2px]">
              <div className="relative leading-[14px]">24h Volume</div>
              <div className="relative leading-[14px] font-mono-captions text-blue-white">
                $ 377,526,580
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <div className="relative leading-[14px]">24h Change</div>
            <div className="relative leading-[14px] font-mono-captions text-blue-green-400">
              0.36%
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <div className="relative leading-[14px]">1H Funding Rate</div>
            <div className="relative leading-[14px] font-mono-captions text-blue-red-500">
              -0.001033%
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <div className="relative leading-[14px]">Open Interest (L)</div>
            <div className="relative leading-[14px] font-mono-captions text-blue-white">
              $5.41M / $12.57M
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <div className="relative leading-[14px]">Open Interest (S)</div>
            <div className="relative leading-[14px] font-mono-captions text-blue-white">
              $5.41M / $12.57M
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-blue-chart-ng w-[260px] shrink-0 flex flex-row py-4 px-5 box-border items-center justify-between font-mono-captions">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="/frame6.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <div className="relative leading-[14px]">sUSD - 1.01</div>
            <div className="relative leading-[14px] text-blue-white">
              $ 6,580
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="/frame7.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <div className="relative leading-[14px]">OP - 2.52$</div>
            <div className="relative leading-[14px] text-blue-white">23.31</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSummary;
