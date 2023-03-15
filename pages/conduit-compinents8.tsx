import type { NextPage } from "next";
import SectionSummary from "../components/section-summary";
import CompPostionsHolder from "../components/comp-postions-holder";

const ConduitCompinents8: NextPage = () => {
  return (
    <div className="relative w-full flex flex-col items-end justify-start text-left text-sm text-blue-blue font-par-bold">
      <div className="self-stretch bg-blue-main-bg h-[1024px] shrink-0 overflow-hidden flex flex-col p-6 box-border items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[19.44px] h-[20.62px] shrink-0"
                alt=""
                src="/vector.svg"
              />
              <img
                className="relative w-[157.39px] h-[10.74px] shrink-0"
                alt=""
                src="/union.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-row py-2 px-3 items-center justify-start">
                <div className="relative leading-[16px] font-medium">
                  Dashboard
                </div>
              </div>
              <div className="[background:linear-gradient(180deg,_rgba(0,_209,_255,_0)_23.23%,_rgba(0,_209,_255,_0.15))] flex flex-row py-2 pr-1.5 pl-3 items-center justify-start gap-[4px] text-blue-buttons border-b-[1px] border-solid border-blue-buttons">
                <div className="relative leading-[16px] font-medium">
                  Futures
                </div>
                <img
                  className="relative w-5 h-5 shrink-0 overflow-hidden"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className="flex flex-row py-2 px-3 items-center justify-start">
                <div className="relative leading-[16px] font-medium">Swap</div>
              </div>
              <div className="flex flex-row py-2 px-3 items-center justify-start">
                <div className="relative leading-[16px] font-medium">
                  Leaderboard
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px] text-xs">
            <div className="w-6 h-6 shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[21px] h-[15px] shrink-0 overflow-hidden"
                alt=""
                src="/us.svg"
              />
            </div>
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="/frame1.svg"
            />
            <div className="flex flex-row items-center justify-start">
              <div className="relative w-7 h-7 shrink-0">
                <div className="absolute top-[-4.14px] left-[-4.14px] bg-blue-green-400 box-border w-12 h-12 [transform:_rotate(45deg)] [transform-origin:0_0] border-[4px] border-solid border-blue-blue" />
                <div className="absolute top-[-28.43px] left-[28.14px] bg-blue-buttons w-10 h-10 [transform:_rotate(45deg)] [transform-origin:0_0]" />
              </div>
            </div>
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="/frame2.svg"
            />
            <div className="rounded-[30px] bg-blue-main-bg flex flex-row py-1.5 pr-0 pl-2 items-center justify-center">
              <div className="relative leading-[14px]">Optimism</div>
              <img
                className="relative w-3.5 h-3.5 shrink-0 overflow-hidden"
                alt=""
                src="/frame3.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start font-mono-captions">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[14px]">0xb30...9af7f</div>
                <div className="relative text-sm leading-[16px] font-par-bold text-blue-white">
                  $ 2,548.04
                </div>
              </div>
            </div>
            <img
              className="relative rounded-sm w-9 h-9 shrink-0"
              alt=""
              src="/frame-7.svg"
            />
          </div>
        </div>
        <SectionSummary />
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-xs font-mono-captions">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-col items-start justify-start font-par-bold">
              <div className="self-stretch rounded-t-lg rounded-b-none bg-blue-block-bg50 flex flex-row p-2 items-center justify-between border-b-[1px] border-solid border-blue-main-block">
                <div className="relative leading-[14px]">Chart</div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="relative w-2.5 h-2.5 shrink-0 overflow-hidden"
                    alt=""
                    src="/frame8.svg"
                  />
                  <img
                    className="relative w-2.5 h-2.5 shrink-0 overflow-hidden"
                    alt=""
                    src="/frame9.svg"
                  />
                </div>
              </div>
              <div className="self-stretch relative rounded-t-none rounded-b-lg bg-blue-chart-ng h-[449px] shrink-0">
                <img
                  className="absolute top-[8px] left-[9.28px] rounded-sm w-[1016.66px] h-[434px] object-cover"
                  alt=""
                  src="/image-25@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
              <div className="w-[330px] shrink-0 flex flex-col items-start justify-center">
                <div className="self-stretch bg-blue-chart-ng flex flex-col items-start justify-start">
                  <div className="self-stretch rounded-t-lg rounded-b-none bg-blue-block-bg50 flex flex-row p-2 items-center justify-between font-par-bold border-b-[1px] border-solid border-blue-main-block">
                    <div className="flex flex-row items-start justify-start gap-[6px]">
                      <div className="relative leading-[14px]">
                        BTC/sUSD Perps:
                      </div>
                      <div className="relative leading-[14px]">
                        Recent Trades
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-2.5 h-2.5 shrink-0 overflow-hidden"
                        alt=""
                        src="/frame10.svg"
                      />
                      <img
                        className="relative w-2.5 h-2.5 shrink-0 overflow-hidden"
                        alt=""
                        src="/frame11.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-lg bg-blue-block-bg50 flex flex-col p-2 items-start justify-start gap-[4px] text-blue-bright-text">
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative leading-[14px]">53%</div>
                      <div className="relative leading-[14px] text-blue-main-dim">
                        Skew
                      </div>
                      <div className="relative leading-[14px]">47%</div>
                    </div>
                    <div className="self-stretch relative rounded-md bg-blue-green-400 h-2 shrink-0 overflow-hidden">
                      <div className="absolute top-[0px] left-[162px] bg-deeppink w-[152px] h-3" />
                    </div>
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-lg bg-blue-chart-ng flex flex-col p-2 items-start justify-start gap-[12px]">
                    <div className="self-stretch flex flex-row py-0.5 px-0 items-center justify-start gap-[4px] border-b-[1px] border-solid border-blue-main-bg">
                      <div className="w-[88px] shrink-0 flex flex-row py-0.5 px-2 box-border items-center justify-end">
                        <div className="relative leading-[14px]">Amount</div>
                      </div>
                      <div className="w-[102px] shrink-0 flex flex-row py-0.5 px-2 box-border items-center justify-end">
                        <div className="relative leading-[14px]">Price</div>
                      </div>
                      <div className="w-[102px] shrink-0 flex flex-row py-0.5 px-2 box-border items-center justify-end">
                        <div className="relative leading-[14px]">Time</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                      <div className="self-stretch rounded-sm bg-gray flex flex-row items-center justify-start gap-[4px]">
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end text-blue-red-500">
                          <div className="relative leading-[14px]">
                            0.316 BTC
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end">
                          <div className="relative leading-[14px]">
                            $1,466.54
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-end">
                          <div className="relative leading-[14px]">30s ago</div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-sm flex flex-row items-center justify-start gap-[4px]">
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end text-blue-green-400">
                          <div className="relative leading-[14px]">
                            0.346 BTC
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end">
                          <div className="relative leading-[14px]">
                            $1,876.56
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-end">
                          <div className="relative leading-[14px]">37s ago</div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-sm bg-gray flex flex-row items-center justify-start gap-[4px]">
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end text-blue-red-500">
                          <div className="relative leading-[14px]">
                            0.316 BTC
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end">
                          <div className="relative leading-[14px]">
                            $1,466.54
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-end">
                          <div className="relative leading-[14px]">30s ago</div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-sm flex flex-row items-center justify-start gap-[4px]">
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end text-blue-green-400">
                          <div className="relative leading-[14px]">
                            0.766 BTC
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end">
                          <div className="relative leading-[14px]">
                            $1,566.57
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-end">
                          <div className="relative leading-[14px]">39s ago</div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-sm bg-gray flex flex-row items-center justify-start gap-[4px]">
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end text-blue-red-500">
                          <div className="relative leading-[14px]">
                            0.116 BTC
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end">
                          <div className="relative leading-[14px]">
                            $1,566.51
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-end">
                          <div className="relative leading-[14px]">30s ago</div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-sm flex flex-row items-center justify-start gap-[4px]">
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end text-blue-green-400">
                          <div className="relative leading-[14px]">
                            0.96 BTC
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end">
                          <div className="relative leading-[14px]">
                            $1,586.52
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-end">
                          <div className="relative leading-[14px]">50s ago</div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-sm bg-gray flex flex-row items-center justify-start gap-[4px]">
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end text-blue-red-500">
                          <div className="relative leading-[14px]">
                            0.146 BTC
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end">
                          <div className="relative leading-[14px]">
                            $1,544.51
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-end">
                          <div className="relative leading-[14px]">31s ago</div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-sm flex flex-row items-center justify-start gap-[4px]">
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end text-blue-green-400">
                          <div className="relative leading-[14px]">
                            0.936 BTC
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-1 px-2 items-center justify-end">
                          <div className="relative leading-[14px]">
                            $1,586.52
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-end">
                          <div className="relative leading-[14px]">50s ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start text-blue-bright-text font-par-bold">
                <div className="self-stretch rounded-t-lg rounded-b-none bg-blue-block-bg50 flex flex-row py-1 px-2 items-center justify-between border-b-[1px] border-solid border-blue-main-block">
                  <div className="rounded-lg flex flex-row items-center justify-start gap-[4px]">
                    <div className="rounded-md flex flex-row py-1.5 px-3 items-center justify-center">
                      <div className="relative leading-[14px]">
                        {" "}
                        BTC/sUSD Perp:
                      </div>
                    </div>
                    <div className="rounded-md bg-blue-main-block flex flex-row py-1.5 px-[15px] items-center justify-center gap-[4px]">
                      <div className="relative leading-[14px]">Positions</div>
                      <div className="rounded-21xl bg-blue-blue w-4 h-4 shrink-0 overflow-hidden flex flex-col py-0 px-px box-border items-center justify-center font-mono-captions">
                        <div className="relative leading-[14px]">4</div>
                      </div>
                    </div>
                    <div className="rounded-md flex flex-row py-1.5 px-[15px] items-center justify-center gap-[4px]">
                      <div className="relative leading-[14px]">Orders</div>
                      <div className="rounded-21xl box-border w-4 h-4 shrink-0 overflow-hidden flex flex-col py-0 px-px items-center justify-center font-mono-captions border-[1px] border-solid border-blue-main-dim">
                        <div className="relative leading-[14px]">4</div>
                      </div>
                    </div>
                    <div className="rounded-md flex flex-row py-1.5 px-[15px] items-center justify-center gap-[4px]">
                      <div className="relative leading-[14px]">Trades</div>
                      <div className="rounded-21xl box-border w-4 h-4 shrink-0 overflow-hidden flex flex-col py-0 px-px items-center justify-center font-mono-captions border-[1px] border-solid border-blue-main-dim">
                        <div className="relative leading-[14px]">4</div>
                      </div>
                    </div>
                    <div className="rounded-md flex flex-row py-1.5 px-[15px] items-center justify-center gap-[4px]">
                      <div className="relative leading-[14px]">Transfers</div>
                      <div className="rounded-21xl box-border w-4 h-4 shrink-0 overflow-hidden flex flex-col py-0 px-px items-center justify-center font-mono-captions border-[1px] border-solid border-blue-main-dim">
                        <div className="relative leading-[14px]">4</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="relative w-2.5 h-2.5 shrink-0 overflow-hidden"
                      alt=""
                      src="/frame12.svg"
                    />
                    <img
                      className="relative w-2.5 h-2.5 shrink-0 overflow-hidden"
                      alt=""
                      src="/frame13.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-t-none rounded-b-lg bg-blue-chart-ng flex flex-col p-2 items-center justify-center">
                  <CompPostionsHolder />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border h-[163px] shrink-0 flex flex-col p-2 items-center justify-center gap-[4px] text-blue-main-block border-[1px] border-dashed border-blue-main-block">
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="/frame14.svg"
              />
              <div className="relative leading-[14px]">Add Widget</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px] font-par-bold">
            <div className="w-[350px] flex flex-col items-start justify-start">
              <div className="self-stretch rounded-t-lg rounded-b-none bg-blue-block-bg50-50 flex flex-row p-2 items-center justify-between border-b-[1px] border-solid border-blue-main-block">
                <div className="relative leading-[14px]">Order Form</div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="relative w-2.5 h-2.5 shrink-0 overflow-hidden"
                    alt=""
                    src="/frame15.svg"
                  />
                  <img
                    className="relative w-2.5 h-2.5 shrink-0 overflow-hidden"
                    alt=""
                    src="/frame16.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-lg bg-blue-block-bg50 flex flex-row py-4 px-[5px] items-start justify-start">
                <div className="flex-1 flex flex-col items-end justify-start gap-[8px]">
                  <div className="self-stretch rounded-lg flex flex-row py-0 px-[5px] items-start justify-start text-sm text-blue-chart-ng">
                    <div className="flex-1 rounded-lg bg-blue-buttons shadow-[0px_0px_16px_rgba(0,_208,_254,_0.5)] flex flex-row p-2.5 items-center justify-center gap-[10px]">
                      <div className="relative leading-[16px] font-medium">
                        Deposit in BTC/sUSD Perp
                      </div>
                      <img
                        className="relative w-6 h-6 shrink-0 overflow-hidden"
                        alt=""
                        src="/frame17.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg flex flex-col p-[5px] items-center justify-center gap-[3px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <div className="flex-1 rounded-lg bg-blue-block-bg50-50 flex flex-col p-2 items-start justify-start gap-[3px]">
                        <div className="relative leading-[14px]">
                          Your deposit:
                        </div>
                        <div className="relative leading-[14px] font-mono-captions text-blue-white">
                          100$
                        </div>
                      </div>
                      <img
                        className="relative w-3 h-[14.73px] shrink-0"
                        alt=""
                        src="/arrow-1.svg"
                      />
                      <div className="flex-1 rounded-lg bg-blue-block-bg50-50 flex flex-col p-2 items-start justify-start gap-[3px]">
                        <div className="relative leading-[14px]">
                          25x multiplier:
                        </div>
                        <div className="relative leading-[14px] font-mono-captions text-blue-green-400">
                          2,500$
                        </div>
                      </div>
                      <img
                        className="relative w-3 h-[14.73px] shrink-0"
                        alt=""
                        src="/arrow-1.svg"
                      />
                      <div className="flex-1 rounded-lg bg-blue-block-bg50-50 flex flex-col p-2 items-start justify-start gap-[3px]">
                        <div className="relative leading-[14px]">
                          In positions:
                        </div>
                        <div className="relative leading-[14px] font-mono-captions text-blue-red-500">
                          -300$
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row py-0 px-10 items-center justify-end">
                      <img
                        className="relative w-[14.73px] h-3 shrink-0"
                        alt=""
                        src="/arrow-2.svg"
                      />
                    </div>
                    <div className="self-stretch rounded-lg bg-blue-block-bg50-50 flex flex-row py-3 px-4 items-center justify-between text-sm">
                      <div className="relative leading-[16px] font-medium">
                        Available:
                      </div>
                      <div className="relative leading-[16px] font-medium text-blue-bright-text">
                        2,200$
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg flex flex-row p-[5px] items-center justify-center gap-[10px] text-sm text-blue-white">
                    <div className="flex-1 rounded-lg [background:linear-gradient(225deg,_#4c679a,_#5e9dab)] overflow-hidden flex flex-col p-2.5 items-center justify-center">
                      <div className="relative leading-[16px] font-medium">
                        Long
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg overflow-hidden flex flex-col p-2.5 items-center justify-center">
                      <div className="relative leading-[16px] font-medium [background:linear-gradient(225deg,_#bf3131,_#a61ca0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Short
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-blue-chart-ng flex flex-col pt-2.5 px-4 pb-3.5 items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="relative leading-[14px]">
                        Set Order Size:
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[1px]">
                        <div className="relative leading-[14px]">Left:</div>
                        <div className="relative leading-[14px]">1700$</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-between text-xl text-blue-white">
                      <div className="relative leading-[16px]">500</div>
                      <div className="relative text-sm leading-[16px] text-blue-blue">
                        sUSD
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-blue-chart-ng flex flex-col py-3 px-4 items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative leading-[14px]">
                        Liquidation Price:
                      </div>
                      <div className="relative leading-[14px]">Risk Level</div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-between text-xl text-blue-white">
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="relative leading-[16px]">1,145.54$</div>
                        <div className="relative leading-[16px]">(-20%)</div>
                      </div>
                      <div className="relative text-sm leading-[16px] font-medium text-blue-green-400">
                        LOW
                      </div>
                    </div>
                    <div className="relative w-[300px] h-[36.74px] shrink-0 text-palegreen font-mono-captions">
                      <div className="absolute top-[6.29px] left-[0px] rounded-[222px] [background:linear-gradient(90deg,_#539fca,_#20b881_50%,_#98aa29)] w-[294px] h-[4.43px]" />
                      <img
                        className="absolute top-[0px] left-[38.16px] w-[17px] h-[17px]"
                        alt=""
                        src="/ellipse-4.svg"
                      />
                      <div className="absolute top-[22.74px] left-[34.16px] leading-[14px]">
                        500$
                      </div>
                      <div className="absolute top-[22.74px] left-[0.16px] leading-[14px]">
                        0$
                      </div>
                      <div className="absolute top-[22.74px] left-[264px] leading-[14px] text-orange">
                        2200$
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[6px] text-3xs">
                    <div className="rounded-lg flex flex-row py-[5px] px-2.5 items-start justify-start">
                      <div className="relative leading-[12px]">
                        Increase position size margin to reduce risk
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg flex flex-row py-[5px] px-2.5 items-center justify-center border-[1px] border-solid border-blue-buttons">
                      <div className="relative leading-[12px]">
                        Deposit more sUSD
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg flex flex-row p-[5px] items-start justify-start text-sm text-blue-white">
                    <div className="flex-1 rounded-lg [background:linear-gradient(225deg,_#4c679a,_#5e9dab)] flex flex-row py-3.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[16px] font-medium">
                        Open Position
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col py-[5px] px-0 items-start justify-start text-blue-buttons font-mono-captions">
                    <div className="self-stretch rounded-lg bg-blue-block-bg50-50 flex flex-row py-[5px] px-2.5 items-start justify-between text-blue-blue font-par-bold">
                      <div className="relative leading-[14px]">{`Position size is `}</div>
                      <div className="relative leading-[14px] font-mono-captions text-blue-buttons">
                        {" "}
                        30,435.43%
                      </div>
                      <div className="relative leading-[14px]">
                        of your buying power
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row py-[5px] px-2.5 items-start justify-between">
                      <div className="relative leading-[14px] font-par-bold text-blue-blue">
                        Available Margin:
                      </div>
                      <div className="relative leading-[14px] hidden">
                        {" "}
                        30,435.43%
                      </div>
                      <div className="relative leading-[14px]">33$</div>
                    </div>
                    <div className="self-stretch rounded-lg bg-blue-block-bg50-50 flex flex-row py-[5px] px-2.5 items-start justify-between">
                      <div className="relative leading-[14px] font-par-bold text-blue-blue">
                        Margin Usage:
                      </div>
                      <div className="relative leading-[14px] hidden">
                        {" "}
                        30,435.43%
                      </div>
                      <div className="relative leading-[14px]">23.54%</div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row py-[5px] px-2.5 items-start justify-between">
                      <div className="relative leading-[14px] font-par-bold text-blue-blue">
                        Buying Power:
                      </div>
                      <div className="relative leading-[14px] hidden">
                        {" "}
                        30,435.43%
                      </div>
                      <div className="relative leading-[14px]">1700$</div>
                    </div>
                    <div className="self-stretch rounded-lg bg-blue-block-bg50-50 flex flex-row py-[5px] px-2.5 items-start justify-between">
                      <div className="relative leading-[14px] font-par-bold text-blue-blue">
                        Entry Price:
                      </div>
                      <div className="relative leading-[14px] hidden">
                        {" "}
                        30,435.43%
                      </div>
                      <div className="relative leading-[14px]">$1,626.67</div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row py-[5px] px-2.5 items-start justify-between">
                      <div className="relative leading-[14px] font-par-bold text-blue-blue">
                        Trade fee:
                      </div>
                      <div className="relative leading-[14px] hidden">
                        {" "}
                        30,435.43%
                      </div>
                      <div className="relative leading-[14px]">
                        $0.00 (taker 0.100%)
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-blue-block-bg50-50 flex flex-row py-[5px] px-2.5 items-start justify-between">
                      <div className="relative leading-[14px] font-par-bold text-blue-blue">
                        Leverage in:
                      </div>
                      <div className="relative leading-[14px] hidden">
                        {" "}
                        30,435.43%
                      </div>
                      <div className="relative leading-[14px]">5x</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border h-[163px] shrink-0 flex flex-col p-2 items-center justify-center gap-[4px] text-blue-main-block font-mono-captions border-[1px] border-dashed border-blue-main-block">
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="/frame18.svg"
              />
              <div className="relative leading-[14px]">Add Widget</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-[20px] bg-blue-main-block flex flex-col py-3 px-4 items-center justify-center text-blue-bright-text">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <div className="overflow-hidden flex flex-col items-center justify-center">
            <img
              className="relative w-3.5 h-3.5 shrink-0"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <b className="relative leading-[16px]">Add Widget</b>
        </div>
      </div>
    </div>
  );
};

export default ConduitCompinents8;
