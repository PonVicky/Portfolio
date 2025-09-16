import Lines from "./Lines";

import vicky from "../images/me.jpg";
import { useState } from "react";
function Landing() {
  const [style, setStyle] = useState("lg:block ");
  return (
    // <div className="h-full flex flex-col justify-between  px-[40px]  mx-auto  pt-[210px] pb-[50px] bg-[#f5f4f3]   rounded-b-4xl">
    <div className="md:min-h-screen flex flex-col justify-between px-[24px] md:px-[40px]  mx-auto pt-[110px] md:pt-[160px] pb-[50px] bg-[#f5f4f3]   rounded-b-xl  md:rounded-b-3xl">
      {/* <section className=" mb-[100px]"> */}
      <section className=" md:flex flex-1 items-center">
        <div className="relative flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full md:max-w-[50%]">
            <div className="rounded-full overflow-hidden w-[50px] h-[50px] flex justify-center items-center ">
              <img
                src={vicky}
                alt="myImage"
                className="object-cover scale-140 "
              />
            </div>
            <p
              className="w-[95%] font-[400] text-[#333] mt-[25px] text-[24px] md:text-[30px]
              "
            >
              <b>Frontend Developer</b> skilled at building sleek, responsive
              interfaces. Every line of code is a brushstroke shaping the user’s
              experience.
            </p>
          </div>

          {/* <nav className=" hidden lg:block absolute top-[-160px] right-[2%]"> */}
          <nav
            className={` hidden ${style} absolute top-[-170px] right-[4%]  `}
            // onClick={() => setStyle("")}
          >
            <Lines
              rows={10}
              columns={9}
              containerSize="400px"
              lineColor="#666"
              lineWidth="4px"
              lineHeight="38px"
              baseAngle={45}
              style={{ margin: "2rem auto" }}
            />
          </nav>
        </div>
      </section>
      {/* <section className="w-[90%] flex justify-between text-[#555] font-[500] leading-[1.2] "> */}
      <section className="w-[90%] text-[14px]  md:text-[16px] flex flex-col md:flex-row justify-between text-[#555] font-[500] leading-[1.2] py-13 md:mt-[20px]">
        <nav className="flex-[0.3]">
          <p className="hover:text-[#000] hover:duration-300 hover:cursor-default">
            Creator
          </p>
          <p className="hover:text-[#000] hover:duration-300">Developer</p>
        </nav>
        <div className="md:hidden flex gap-[35%] mt-[20px]">
          <nav className="">
            <p className="hover:text-[#000] hover:duration-300">From</p>
            <p className="hover:text-[#000] hover:duration-300">India</p>
          </nav>
          <nav>
            <p className="hover:text-[#000] hover:duration-300">Contact</p>
            <p className="hover:text-[#000] hover:duration-300 md:text-[#555] text-[#000]">
              ponvicky6@gmail.com
            </p>
          </nav>
        </div>
        <nav className="hidden md:block">
          <p className="hover:text-[#000] hover:duration-300">From</p>
          <p className="hover:text-[#000] hover:duration-300">India</p>
        </nav>
        <nav className="hidden md:block">
          <p className="hover:text-[#000] hover:duration-300">Contact</p>
          <p className="text-[#000] hover:cursor-pointer hover:duration-300">
            ponvicky6@gmail.com
          </p>
        </nav>
      </section>
    </div>
  );
}

export default Landing;
