import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { assets } from "../assets/assets";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

function EventTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-24">
      <div className="container mx-auto px-2.5">
        <h4 className="text-blue-900 italic font-semibold">Event Timetable</h4>
        <div className="flex justify-between border-b-1 border-b-gray-400 py-6">
          <h2 className="text-5xl font-bold mt-6">
            Information Of Event <br /> Schedule
          </h2>
          <div className="flex mb-2 gap-3 justify-content-end items-center">
            <Button
              onClick={() => setActiveIndex(0)}
              className={`w-2rem h-2rem p-0 ${
                activeIndex == 0 ? "bg-blue-600" : "bg-black"
              }  font-bold rounded-2xl py-1.5 px-6 text-white`}
              rounded
              outlined={activeIndex !== 0}
              label="Day 01"
            />
            <Button
              onClick={() => setActiveIndex(1)}
              className={`w-2rem h-2rem p-0 ${
                activeIndex == 1 ? "bg-blue-600" : "bg-black"
              }  font-bold rounded-2xl py-1.5 px-6 text-white`}
              rounded
              outlined={activeIndex !== 1}
              label="Day 02"
            />
            <Button
              onClick={() => setActiveIndex(2)}
              className={`w-2rem h-2rem p-0 ${
                activeIndex == 2 ? "bg-blue-600" : "bg-black"
              }  font-bold rounded-2xl py-1.5 px-6 text-white`}
              rounded
              outlined={activeIndex !== 2}
              label="Day 03"
            />
          </div>
        </div>
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          <TabPanel>
            <div className="flex mt-10 gap-10">
              <div>
                <img
                  src={assets.aboutimg}
                  alt=""
                  className="h-[226px] rounded-2xl w-[270px] object-cover"
                />
              </div>
              <div className="shadow-2xl p-7 rounded-2xl w-full flex gap-1 ">
                <div className="flex flex-col gap-5 items-start justify-between border-r border-gray-400 pr-5">
                  <div className="border-1 border-gray-400 rounded-3xl inline-flex">
                    <span className="flex items-center py-2 px-5 gap-2 font-semibold">
                      <SlCalender className="text-blue-600 text-2xl" /> 20, Jan
                      2025{" "}
                    </span>
                    <span className="h-auto w-[1px] bg-gray-400"></span>
                    <span className="flex items-center py-2 px-5 gap-2 font-semibold">
                      <IoTimeOutline className="text-blue-600 text-2xl" /> 10 AM
                      - 02 PM{" "}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold">
                    Siempre Son Flores" Musica Cubana Salsa Jazz adipi scing
                    elit. Nullam
                  </h2>
                  <p className="flex gap-2 items-center">
                    <IoLocationSharp className="text-blue-600 text-2xl" /> 135
                    W, 46nd Street, New York
                  </p>
                </div>
              <div className="pl-4">
                <div className="flex items-center justify-center h-full">
                  <button className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-3xl mr-6 cursor-pointer hover:bg-black">
                    Register Now
                  </button>
                  <div className="relative w-40 h-14">
                    <img
                      src={assets.reviewerOne}
                      alt="reviewer"
                      className="absolute left-0 z-0 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <img
                      src={assets.reviewerTwo}
                      alt="reviewer"
                      className="absolute left-8 z-10 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <img
                      src={assets.reviewerThree}
                      alt="reviewer"
                      className="absolute left-16 z-20 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <span className="absolute left-24 z-20 h-12 w-12 border-4 border-white rounded-full bg-blue-600 text-white flex justify-center items-center font-semibold">
                      <span className="ml-[50px] tracking-[1px]">Spe </span> <span className="text-black tracking-[1px]"> akers</span>
                    </span>
                    
                  </div>
                </div>
              </div>
                
              </div>
            </div>
            <div className="flex mt-10 gap-10">
              <div>
                <img
                  src={assets.aboutimg}
                  alt=""
                  className="h-[226px] rounded-2xl w-[270px] object-cover"
                />
              </div>
              <div className="shadow-2xl p-7 rounded-2xl w-full flex gap-1 ">
                <div className="flex flex-col gap-5 items-start justify-between border-r border-gray-400 pr-5">
                  <div className="border-1 border-gray-400 rounded-3xl inline-flex">
                    <span className="flex items-center py-2 px-5 gap-2 font-semibold">
                      <SlCalender className="text-blue-600 text-2xl" /> 20, Jan
                      2025{" "}
                    </span>
                    <span className="h-auto w-[1px] bg-gray-400"></span>
                    <span className="flex items-center py-2 px-5 gap-2 font-semibold">
                      <IoTimeOutline className="text-blue-600 text-2xl" /> 10 AM
                      - 02 PM{" "}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold">
                    Siempre Son Flores" Musica Cubana Salsa Jazz adipi scing
                    elit. Nullam
                  </h2>
                  <p className="flex gap-2 items-center">
                    <IoLocationSharp className="text-blue-600 text-2xl" /> 135
                    W, 46nd Street, New York
                  </p>
                </div>
              <div className="pl-4">
                <div className="flex items-center justify-center h-full">
                  <button className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-3xl mr-6 cursor-pointer hover:bg-black">
                    Register Now
                  </button>
                  <div className="relative w-40 h-14">
                    <img
                      src={assets.reviewerOne}
                      alt="reviewer"
                      className="absolute left-0 z-0 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <img
                      src={assets.reviewerTwo}
                      alt="reviewer"
                      className="absolute left-8 z-10 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <img
                      src={assets.reviewerThree}
                      alt="reviewer"
                      className="absolute left-16 z-20 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <span className="absolute left-24 z-20 h-12 w-12 border-4 border-white rounded-full bg-blue-600 text-white flex justify-center items-center font-semibold">
                      <span className="ml-[50px] tracking-[1px]">Spe </span> <span className="text-black tracking-[1px]"> akers</span>
                    </span>
                    
                  </div>
                </div>
              </div>
                
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            {/* header="Header II" */}
            <div className="flex mt-10 gap-10">
              <div>
                <img
                  src={assets.aboutimg}
                  alt=""
                  className="h-[226px] rounded-2xl w-[270px] object-cover"
                />
              </div>
              <div className="shadow-2xl p-7 rounded-2xl w-full flex gap-1 ">
                <div className="flex flex-col gap-5 items-start justify-between border-r border-gray-400 pr-5">
                  <div className="border-1 border-gray-400 rounded-3xl inline-flex">
                    <span className="flex items-center py-2 px-5 gap-2 font-semibold">
                      <SlCalender className="text-blue-600 text-2xl" /> 20, Jan
                      2025{" "}
                    </span>
                    <span className="h-auto w-[1px] bg-gray-400"></span>
                    <span className="flex items-center py-2 px-5 gap-2 font-semibold">
                      <IoTimeOutline className="text-blue-600 text-2xl" /> 10 AM
                      - 02 PM{" "}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold">
                    Siempre Son Flores" Musica Cubana Salsa Jazz adipi scing
                    elit. Nullam
                  </h2>
                  <p className="flex gap-2 items-center">
                    <IoLocationSharp className="text-blue-600 text-2xl" /> 135
                    W, 46nd Street, New York
                  </p>
                </div>
              <div className="pl-4">
                <div className="flex items-center justify-center h-full">
                  <button className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-3xl mr-6 cursor-pointer hover:bg-black">
                    Register Now
                  </button>
                  <div className="relative w-40 h-14">
                    <img
                      src={assets.reviewerOne}
                      alt="reviewer"
                      className="absolute left-0 z-0 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <img
                      src={assets.reviewerTwo}
                      alt="reviewer"
                      className="absolute left-8 z-10 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <img
                      src={assets.reviewerThree}
                      alt="reviewer"
                      className="absolute left-16 z-20 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <span className="absolute left-24 z-20 h-12 w-12 border-4 border-white rounded-full bg-blue-600 text-white flex justify-center items-center font-semibold">
                      <span className="ml-[50px] tracking-[1px]">Spe </span> <span className="text-black tracking-[1px]"> akers</span>
                    </span>
                    
                  </div>
                </div>
              </div>
                
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex mt-10 gap-10">
              <div>
                <img
                  src={assets.aboutimg}
                  alt=""
                  className="h-[226px] rounded-2xl w-[270px] object-cover"
                />
              </div>
              <div className="shadow-2xl p-7 rounded-2xl w-full flex gap-1 ">
                <div className="flex flex-col gap-5 items-start justify-between border-r border-gray-400 pr-5">
                  <div className="border-1 border-gray-400 rounded-3xl inline-flex">
                    <span className="flex items-center py-2 px-5 gap-2 font-semibold">
                      <SlCalender className="text-blue-600 text-2xl" /> 20, Jan
                      2025{" "}
                    </span>
                    <span className="h-auto w-[1px] bg-gray-400"></span>
                    <span className="flex items-center py-2 px-5 gap-2 font-semibold">
                      <IoTimeOutline className="text-blue-600 text-2xl" /> 10 AM
                      - 02 PM{" "}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold">
                    Siempre Son Flores" Musica Cubana Salsa Jazz adipi scing
                    elit. Nullam
                  </h2>
                  <p className="flex gap-2 items-center">
                    <IoLocationSharp className="text-blue-600 text-2xl" /> 135
                    W, 46nd Street, New York
                  </p>
                </div>
              <div className="pl-4">
                <div className="flex items-center justify-center h-full">
                  <button className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-3xl mr-6 cursor-pointer hover:bg-black">
                    Register Now
                  </button>
                  <div className="relative w-40 h-14">
                    <img
                      src={assets.reviewerOne}
                      alt="reviewer"
                      className="absolute left-0 z-0 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <img
                      src={assets.reviewerTwo}
                      alt="reviewer"
                      className="absolute left-8 z-10 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <img
                      src={assets.reviewerThree}
                      alt="reviewer"
                      className="absolute left-16 z-20 h-12 w-12 border-4 border-white rounded-full"
                    />
                    <span className="absolute left-24 z-20 h-12 w-12 border-4 border-white rounded-full bg-blue-600 text-white flex justify-center items-center font-semibold">
                      <span className="ml-[50px] tracking-[1px]">Spe </span> <span className="text-black tracking-[1px]"> akers</span>
                    </span>
                    
                  </div>
                </div>
              </div>
                
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </section>
  );
}

export default EventTabs;
