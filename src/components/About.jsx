import Cards from "./Cards";
import react from "../images/techstackLogos/React.svg";
import node from "../images/techstackLogos/Nodejs.svg";
import java from "../images/miscallaneous/Java.svg";
import tailwind from "../images/techstackLogos/Tailwind.svg";
import html from "../images/techstackLogos/HTML5.svg";
import git from "../images/miscallaneous/Git.svg";
import javascript from "../images/techstackLogos/JavaScript.svg";

import github from "../images/socials/GitHub.svg";
import dsa from "../images/githubdesktop.png";

import desktop from "../images/swiggyDesktop.png";
import amazon from "../images/amazondesktop.png";
import todo from "../images/tododesktop.png";
import css from "../images/techstackLogos/CSS3.svg";
import port from "../images/portfoliodesktop.png";
import gumroad from "../images/gumroaddesktop.png";
import harini from "../images/harini.png";
function About() {
  const cardDetails = [
    {
      image: react,
      text: "Web Developer",
      text2: "React",
      style: "text-[#61dafb]",
    },
    {
      image: java,
      text: "Problem Solver",
      text2: "Java",
      style: "text-[#ea2d2e]",
    },
    {
      image: node,
      text: "Backend Explorer",
      text2: "Node JS",
      style: "text-[#83cd29]",
    },
  ];

  const openWebsite = () => {
    window.open("https://swiggy-vickys-react5.netlify.app/", "_blank"); // _blank opens in a new tab
  };
  const openAmazon = () => {
    window.open("https://vickyamazon.netlify.app/", "_blank"); // _blank opens in a new tab
  };
  const openTodo = () => {
    window.open("https://vickytodo.netlify.app/", "_blank"); // _blank opens in a new tab
  };
  const openGumroad = () => {
    window.open("https://gumroad-vicky-react2.netlify.app/", "_blank"); // _blank opens in a new tab
  };
  const openHarini = () => {
    window.open("https://benevolent-pavlova-0db68b.netlify.app/", "_blank"); // _blank opens in a new tab
  };
  const openLeet = () => {
    window.open(
      "https://github.com/PonVicky/LeetCode-ProblemSolving",
      "_blank"
    ); // _blank opens in a new tab
  };

  const word =
    "I'm a skilled software developer with experience in building responsive and modern web applications using React JS and TailwindCSS. Alongside web development, I atively practice Data Structures and Algorithms in Java on platforms like LeetCode, sharpening my problem-solving and logical thinking skills. Currently, I'm expanding my expertise by learning Node.js, aiming to strengthem my backend development knowledge.";
  return (
    <div className="bg-black rounded-2xl md:rounded-3xl px-[18px] md:px-[40px] pt-[30px] md:pt-[50px] min-h-[800px]">
      <p className="ml-[12px] tracking-[6px] md:tracking-[8px] text-[12px] md:text-[16px] text-white">
        INTRODUCTION
      </p>
      <p className=" text-white text-[50px] md:text-[80px] font-[700]">
        Overview<b>.</b>
      </p>

      <p className="text-[#dddcdb] text-[14px] md:text-[18px] mt-1 md:w-[52%] md:mt-[15px]">
        I'm a skilled software developer with experience in building responsive
        and modern web applications using <b className="text-white">React JS</b>{" "}
        and <b className="text-white">Tailwind CSS</b>. Alongside web
        development, I actively practice{" "}
        <b className="text-white">Data Structures and Algorithms</b> in{" "}
        <b className="text-white">Java</b> on platforms like LeetCode,
        sharpening my problem-solving and logical thinking skills. Currently,
        I'm expanding my expertise by learning{" "}
        <b className="text-white">Node.js</b>, aiming to strengthen my backend
        developement knowledge and become a more well-rounded developer
      </p>
      <div className="flex justify-between items-center mt-[20px] md:mt-0 md:w-[85%] flex-col md:flex-row md:mx-auto md:gap-4">
        {cardDetails.map((cardDetail, index) => (
          <Cards key={index} props={cardDetail} />
        ))}
      </div>
      <div className=" mt-[40px]">
        <p className=" text-white text-[50px] md:text-[80px] font-[700] mb-[50px] md:mb-[90px] leading-[1.1]">
          Side Projects<b>.</b>
        </p>
        <section className="w-[100%] md:w-[75%] mx-auto mb-[20px] md:mb-[50px]">
          <div
            className="bg-[#1e1d1c] h-auto rounded-xl mb-[20px] overflow-hidden px-[10px] md:p-[20px] text-[#888]
          transition duration-300 ease-in-out hover:shadow-[0_0_15px_3px_rgba(198,198,198,0.9)]
          hover:scale-101
          hover:cursor-pointer
          "
            onClick={openWebsite}
          >
            <section className="flex justify-between text-[16px] md:text-[22px] p-[5px] pt-[15px] md:p-[15px]">
              <div className="flex items-center ">
                <p className=" font-[600] pr-[10px] md:pr-[20px]  border-r border-[#888] mr-[10px] md:mr-[50px]">
                  01{" "}
                </p>
                <img
                  src={html}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]
                 "
                />
                <img
                  src={javascript}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={react}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={tailwind}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img src={git} alt="nothing" className="w-[15px] md:w-[30px]" />
              </div>
              <p className="hidden  bg-[#0e2d1d] text-[9px] md:text-[14px] md:flex items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#16a34a] font-mono font-bold hover:text-[#45b56e] hover:bg-[#1f382c]">
                Responsive
              </p>
            </section>
            <section
              className="flex items-center just mb-[10px]
              flex-col md:flex-row
            "
            >
              <nav className=" min-w-[38%] md:pl-[20px]  md:pt-[15px]">
                <section
                  className="textra flex justify-center
               flex-col  mt-[20px]  md:mt-[40%]"
                >
                  <p className="text-[20px] md:text-[34px] text-white font-[700] ">
                    Swiggy
                  </p>

                  <p className="text-[13px] md:text-[18px]  clamp-3 md:line-clamp-none mt-[2px] md:mt-[5px]">
                    A responsive front-end recreation of a food ordering
                    interface, designed with a focus on clean layouts and smooth
                    user flow.
                  </p>
                </section>
              </nav>
              <img
                src={desktop}
                alt="desktop"
                className="w-[100%]  md:w-[70%]"
              />
            </section>
          </div>
        </section>

        <section className="w-[100%] md:w-[75%] mx-auto mb-[20px] md:mb-[50px]">
          <div
            className="bg-[#1e1d1c] h-auto rounded-xl mb-[20px] overflow-hidden px-[10px] md:p-[20px] text-[#888]
          transition duration-300 ease-in-out hover:shadow-[0_0_15px_3px_rgba(198,198,198,0.9)]
          hover:scale-101
          hover:cursor-pointer
          "
            onClick={openWebsite}
          >
            <section className="flex justify-between text-[16px] md:text-[22px] p-[5px] pt-[15px] md:p-[15px]">
              <div className="flex items-center ">
                <p className=" font-[600] pr-[10px] md:pr-[20px]  border-r border-[#888] mr-[10px] md:mr-[50px]">
                  02{" "}
                </p>
                <img
                  src={html}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]
                 "
                />
                <img
                  src={javascript}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={react}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={tailwind}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img src={git} alt="nothing" className="w-[15px] md:w-[30px]" />
              </div>
              <p className="hidden  bg-[#0e2d1d] text-[9px] md:text-[14px] md:flex items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#16a34a] font-mono font-bold hover:text-[#45b56e] hover:bg-[#1f382c]">
                Responsive
              </p>
            </section>
            <section className="flex items-center just mb-[10px] flex-col md:flex-row">
              <nav className=" min-w-[38%] md:pl-[20px]  md:pt-[15px]">
                <section
                  className="textra flex justify-center
               flex-col  mt-[20px]  md:mt-[40%]"
                >
                  <p className="text-[20px] md:text-[34px] text-white font-[700] ">
                    Portfolio{" "}
                    <b className="font-[700]  text-[18px] md:text-[30px]">
                      (Recursion Unlocked🔁)
                    </b>
                  </p>

                  <p className="text-[13px] md:text-[18px]  clamp-3 md:line-clamp-none mt-[2px] md:mt-[5px]">
                    Yes... my portfolio lives inside my portfolio. Built fully
                    responsive with React and Tailwind, it's a clean showcase of
                    my work, my skills.
                  </p>
                </section>
              </nav>
              <img src={port} alt="desktop" className="w-[100%]  md:w-[70%]" />
            </section>
          </div>
        </section>

        <section className="w-[100%] md:w-[75%] mx-auto mb-[20px] md:mb-[50px]">
          <div
            className="bg-[#1e1d1c] h-auto rounded-xl mb-[20px] overflow-hidden px-[10px] md:p-[20px] text-[#888]
          transition duration-300 ease-in-out hover:shadow-[0_0_15px_3px_rgba(198,198,198,0.9)]
          hover:scale-101
          hover:cursor-pointer
          "
            onClick={openAmazon}
          >
            <section className="flex justify-between text-[16px] md:text-[22px] p-[5px] pt-[15px] md:p-[15px]">
              <div className="flex items-center ">
                <p className=" font-[600] pr-[10px] md:pr-[20px]  border-r border-[#888] mr-[10px] md:mr-[50px]">
                  03{" "}
                </p>
                <img
                  src={html}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]
                 "
                />
                <img
                  src={javascript}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={react}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={tailwind}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img src={git} alt="nothing" className="w-[15px] md:w-[30px]" />
              </div>
              {/* <p className="hidden  bg-[#0e2d1d] text-[9px] md:text-[14px] md:flex items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#16a34a] font-mono font-bold hover:text-[#45b56e] hover:bg-[#1f382c]">
                Responsive
              </p> */}
              <p className="hidden  bg-[#6c0707] text-[9px] md:text-[14px] md:flex items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#be1010] font-mono font-bold hover:text-[#be1010] hover:bg-[#7b2020]">
                🔨
              </p>
            </section>
            <section className="flex items-center just mb-[10px] flex-col md:flex-row">
              <nav className=" min-w-[38%] md:pl-[20px]  md:pt-[15px]">
                <section
                  className="textra flex justify-center
               flex-col  mt-[20px]  md:mt-[40%]"
                >
                  <p className="text-[20px] md:text-[34px] text-white font-[700] ">
                    Amazon UI
                  </p>

                  <p className="text-[13px] md:text-[18px]  clamp-3 md:line-clamp-none mt-[2px] md:mt-[5px]">
                    An e-commerce front-end look alike Amazon, showcasing
                    product listing, header interactions, and catalog-style
                    layouts.
                  </p>
                </section>
              </nav>
              <img
                src={amazon}
                alt="desktop"
                className="w-[100%]  md:w-[70%]"
              />
            </section>
          </div>
        </section>

        <section className="w-[100%] md:w-[75%] mx-auto mb-[20px] md:mb-[50px]">
          <div
            className="bg-[#1e1d1c] h-auto rounded-xl mb-[20px] overflow-hidden px-[10px] md:p-[20px] text-[#888]
          transition duration-300 ease-in-out hover:shadow-[0_0_15px_3px_rgba(198,198,198,0.9)]
          hover:scale-101
          hover:cursor-pointer
          "
            onClick={openHarini}
          >
            <section className="flex justify-between text-[16px] md:text-[22px] p-[5px] pt-[15px] md:p-[15px]">
              <div className="flex items-center ">
                <p className=" font-[600] pr-[10px] md:pr-[20px]  border-r border-[#888] mr-[10px] md:mr-[50px]">
                  04{" "}
                </p>
                <img
                  src={html}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]
                 "
                />
                <img
                  src={css}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
              </div>
              {/* <p className="hidden  bg-[#0e2d1d] text-[9px] md:text-[14px] md:flex  items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#16a34a] font-mono font-bold hover:text-[#45b56e] hover:bg-[#1f382c]">
                Responsive
              </p> */}
              <p className="hidden  bg-[#6c0707] text-[9px] md:text-[14px] md:flex items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#be1010] font-mono font-bold hover:text-[#be1010] hover:bg-[#7b2020]">
                🔨
              </p>
            </section>
            <section className="flex items-center just mb-[10px] flex-col md:flex-row">
              <nav className=" min-w-[38%] md:pl-[20px]  md:pt-[15px]">
                <section
                  className="textra flex justify-center
               flex-col  mt-[20px]  md:mt-[40%]"
                >
                  <p className="text-[18px] md:text-[34px] text-white font-[700] ">
                    Client Portfolio
                  </p>

                  <p className="text-[13px] md:text-[18px]  clamp-3 md:line-clamp-none mt-[2px] md:mt-[5px]">
                    My first design just using pure vanilla HTML and CSS created
                    for a friend, tailored to put content and readability at the
                    center.
                  </p>
                </section>
              </nav>
              <img
                src={harini}
                alt="desktop"
                className="w-[100%]  md:w-[70%]"
              />
            </section>
          </div>
        </section>

        <section className="w-[100%] md:w-[75%] mx-auto mb-[20px] md:mb-[50px]">
          <div
            className="bg-[#1e1d1c] h-auto rounded-xl mb-[20px] overflow-hidden px-[10px] md:p-[20px] text-[#888]
          transition duration-300 ease-in-out hover:shadow-[0_0_15px_3px_rgba(198,198,198,0.9)]
          hover:scale-101
          hover:cursor-pointer
          "
            onClick={openGumroad}
          >
            <section className="flex justify-between text-[16px] md:text-[22px] p-[5px] pt-[15px] md:p-[15px]">
              <div className="flex items-center ">
                <p className=" font-[600] pr-[10px] md:pr-[20px]  border-r border-[#888] mr-[10px] md:mr-[50px]">
                  05{" "}
                </p>
                <img
                  src={html}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]
                 "
                />
                <img
                  src={javascript}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={react}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={tailwind}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />

                <img src={git} alt="nothing" className="w-[15px] md:w-[30px]" />
              </div>
              {/* <p className="hidden  bg-[#0e2d1d] text-[9px] md:text-[14px] md:flex  items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#16a34a] font-mono font-bold hover:text-[#45b56e] hover:bg-[#1f382c]">
                Responsive
              </p> */}
              <p className="hidden  bg-[#6c0707] text-[9px] md:text-[14px] md:flex items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#be1010] font-mono font-bold hover:text-[#be1010] hover:bg-[#7b2020]">
                🔨
              </p>
            </section>
            <section className="flex items-center just mb-[10px] flex-col md:flex-row">
              <nav className=" min-w-[38%] md:pl-[20px]  md:pt-[15px]">
                <section
                  className="textra flex justify-center
               flex-col  mt-[20px]  md:mt-[40%]"
                >
                  <p className="text-[18px] md:text-[34px] text-white font-[700] ">
                    Gumroad clone
                  </p>

                  <p className="text-[13px] md:text-[18px]  clamp-3 md:line-clamp-none mt-[2px] md:mt-[5px]">
                    A multi page web app inspired by Gumroad, built to explore
                    product presentation and Strong CTAs.
                  </p>
                </section>
              </nav>
              <img
                src={gumroad}
                alt="desktop"
                className="w-[100%]  md:w-[70%]"
              />
            </section>
          </div>
        </section>

        <section className="w-[100%] md:w-[75%] mx-auto mb-[20px] md:mb-[50px]">
          <div
            className="bg-[#1e1d1c] h-auto rounded-xl mb-[20px] overflow-hidden px-[10px] md:p-[20px] text-[#888]
          transition duration-300 ease-in-out hover:shadow-[0_0_15px_3px_rgba(198,198,198,0.9)]
          hover:scale-101
          hover:cursor-pointer
          "
            onClick={openTodo}
          >
            <section className="flex justify-between text-[16px] md:text-[22px] p-[5px] pt-[15px] md:p-[15px]">
              <div className="flex items-center ">
                <p className=" font-[600] pr-[10px] md:pr-[20px]  border-r border-[#888] mr-[10px] md:mr-[50px]">
                  06{" "}
                </p>
                <img
                  src={html}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]
                 "
                />
                <img
                  src={css}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />
                <img
                  src={javascript}
                  alt="nothing"
                  className="w-[15px] md:w-[30px] mr-[10px] md:mr-[35px]"
                />

                <img src={git} alt="nothing" className="w-[15px] md:w-[30px]" />
              </div>
              <p className="hidden  bg-[#0e2d1d] text-[9px] md:text-[14px] md:flex  items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#16a34a] font-mono font-bold hover:text-[#45b56e] hover:bg-[#1f382c]">
                Responsive
              </p>
              {/* <p className="hidden  bg-[#6c0707] text-[9px] md:text-[14px] md:flex items-center px-[10px] md:px-[20px] md:py-[2px] rounded-2xl text-[#be1010] font-mono font-bold hover:text-[#be1010] hover:bg-[#7b2020]">
                🔨
              </p> */}
            </section>
            <section className="flex items-center just mb-[10px] flex-col md:flex-row">
              <nav className=" min-w-[38%] md:pl-[20px]  md:pt-[15px]">
                <section
                  className="textra flex justify-center
               flex-col  mt-[20px]  md:mt-[40%]"
                >
                  <p className="text-[18px] md:text-[34px] text-white font-[700] ">
                    To-Do App (Basic)
                  </p>

                  <p className="text-[13px] md:text-[18px]  clamp-3 md:line-clamp-none mt-[2px] md:mt-[5px]">
                    A responsive to-do application built with vanilla
                    JavaScript, featuring task creation, completion, and
                    persistence with local storage.
                  </p>
                </section>
              </nav>
              <img src={todo} alt="desktop" className="w-[100%]  md:w-[70%]" />
            </section>
          </div>
        </section>
      </div>
      {/* leetcode stuffs */}
      <div className="mt-[100px]">
        <p className=" text-white text-[50px] md:text-[80px] font-[700] mb-[50px] md:mb-[90px] leading-[1.1] ">
          Codecraft<b>.</b>
        </p>
        <section className="w-[100%] md:w-[75%] mx-auto mb-[20px] md:mb-[50px]">
          <div
            className="bg-[#f5f4f3] h-auto rounded-xl mb-[20px] overflow-hidden px-[10px] md:p-[20px] md:pb-0 text-[#888]
            
          "
          >
            <section className="flex justify-between text-[16px] md:text-[22px] p-[5px] pt-[15px] pb-[0] md:p-[15px] ">
              <div className="flex items-center ">
                <div className="pr-[10px] md:pr-[20px] pb-[5px] md:pb-[5px] border-r-2 border-[#888] mr-[20px] md:mr-[30px] ">
                  <img
                    src={java}
                    alt="nothing"
                    className="w-[20px] md:w-[40px]"
                  />
                </div>
                <p className="text-[#333] font-[600] text-[20px] md:text-[26px]">
                  Java
                </p>
              </div>
            </section>
            <section className="flex items-center just md:gap-2 flex-col md:flex-row">
              <nav className=" min-w-[38%] md:pl-[20px] md:pb-[10px] md:pt-[15px]">
                <section
                  className="textra flex justify-center
               flex-col  mt-[25px]  md:mt-[40%]"
                >
                  <p className="text-[20px] md:text-[34px] text-[#222] font-[700] leading-[1.1] md:leading-[1.4] mb-[5px] ">
                    DSA & Problem-Solving{" "}
                  </p>
                  <p
                    className="text-[#222] text-[10px] font-[700] md:text-[16px] hover:cursor-pointer hover:underline"
                    onClick={openLeet}
                  >
                    {" "}
                    [ Check it out ]
                  </p>

                  <p className="text-[12px] md:text-[18px]  clamp-3 md:line-clamp-none mt-[2px] md:mt-[5px] text-[#333]">
                    I consistently practice Data Structures and Algorithms to
                    strengthen my logical thinking and coding discipline. Over
                    time, I’ve solved problems across arrays, strings, trees,
                    and graphs — refining not just speed but clarity of
                    solutions. You can explore my curated solutions on GitHub,
                    where I keep improving one problem at a time.
                  </p>
                </section>
              </nav>
              <img
                src={dsa}
                alt="desktop"
                className=" w-[95%] md:w-[70%] rounded-2xl md:rounded-r-none md:rounded-bl-none mt-[20px] md:mt-[0] mb-[18px] md:mb-[0]"
              />
            </section>
          </div>
        </section>
      </div>
      <div>ha you found mee ;D </div>
    </div>
  );
}

export default About;
