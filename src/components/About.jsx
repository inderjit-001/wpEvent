import React from "react";
import { assets } from "../assets/assets";
import { FaPlayCircle } from "react-icons/fa";


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
              <div className="absolute left-20 bottom-16 z-10 h-[180px] w-[180px]" style={{backgroundImage: `url(${assets.aboutVideoBtn})`}}>
                <a href="" className="w-full h-full inline-block after:block after:h-9 after:w-40 after:bg-black after:-bottom-[30px] after:skew-y-[20deg] after:absolute after:-z-[1]" >
                <span className="bg-blue-600 flex justify-center items-center text-5xl text-white w-full h-full" style={{opacity: '.8'}}> <span className="w-1/2 h-1/2 border rounded-full flex justify-center items-center"> <FaPlayCircle /></span></span>
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
            <h4 className="text-blue-900 italic font-semibold">About Eventek</h4>
            <h2 className="text-6xl font-bold mt-6">Know More About The Eventek</h2>
            <p className="text-gray-900 py-6 border-b-1 border-b-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
