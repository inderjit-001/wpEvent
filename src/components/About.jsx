import React from "react";
import { assets } from "../assets/assets";
import { FaPlayCircle } from "react-icons/fa";
import { BsFillCalendar2EventFill } from "react-icons/bs";

function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-2.5">
        <div className="flex flex-wrap">
          <div className="w-1/2">
            <div className="relative w-auto flex justify-center">
              <img src={assets.aboutimg} alt="about" className="rounded-2xl" />
              <img
                src={assets.about3}
                alt="about"
                className="absolute border-8 border-white rounded-2xl right-10 bottom-4"
              />
              <div
                className="absolute left-20 bottom-16 z-10 h-[180px] w-[180px]"
                style={{ backgroundImage: `url(${assets.aboutVideoBtn})` }}
              >
                <a
                  href=""
                  className="w-full h-full inline-block after:block after:h-9 after:w-40 after:bg-black after:-bottom-[30px] after:skew-y-[20deg] after:absolute after:-z-[1]"
                >
                  <span
                    className="bg-blue-600 flex justify-center items-center text-5xl text-white w-full h-full"
                    style={{ opacity: ".8" }}
                  >
                    {" "}
                    <span className="w-1/2 h-1/2 border rounded-full flex justify-center items-center">
                      {" "}
                      <FaPlayCircle />
                    </span>
                  </span>
                </a>
              </div>

              <div className="absolute left-30 -z-10">
                <img src={assets.vectorOne} alt="vectorone" />
              </div>
              <div className="absolute left-35 -top-2 -z-10">
                <img src={assets.vectorTwo} alt="vectorone" />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="text-blue-900 italic font-semibold">
              About Eventek
            </h4>
            <h2 className="text-6xl font-bold mt-6">
              Know More About The Eventek
            </h2>
            <p className="text-gray-900 py-6 border-b-1 border-b-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="flex py-12 gap-5">
              <div className="p-6 text-4xl bg-white text-blue-600 shadow-2xl rounded-xl self-center">
                <BsFillCalendar2EventFill />
              </div>
              <div>
                <h4 className="text-2xl font-semibold pb-2">
                  Whence at the Conference
                </h4>
                <p>
                  Embarrassing hidden in the middle All the Lorem Ipsum
                  generators on <br /> the Internet repeat predefined chunks
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <button className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-3xl mr-6 cursor-pointer hover:bg-black">
                Register Now
              </button>
              <div className="relative w-40 h-14">
                <img
                  src={assets.reviewerOne}
                  alt="reviewer"
                  className="absolute left-0 z-0 h-14 w-14 border-4 border-white rounded-full"
                />
                <img
                  src={assets.reviewerTwo}
                  alt="reviewer"
                  className="absolute left-8 z-10 h-14 w-14 border-4 border-white rounded-full"
                />
                <img
                  src={assets.reviewerThree}
                  alt="reviewer"
                  className="absolute left-16 z-20 h-14 w-14 border-4 border-white rounded-full"
                />
                <span className="absolute left-24 z-20 h-14 w-14 border-4 border-white rounded-full bg-blue-600 text-white flex justify-center items-center font-semibold">
                  25+
                </span>
              </div>
              <h4 className="text-xl font-semibold text-blue-600">Speakers</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
