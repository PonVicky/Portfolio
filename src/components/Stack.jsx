function Stack({ props }) {
  return (
    <div className="px-[24px] py-[130px]">
      {/* <section className="hidden  w-[80%] mx-auto">
        <nav className="ml-[50px] flex items-center">
          <p className="text-[30px] pr-[20px]  border-r-[2px] border-black font-[700] py-[12px] mr-[90px]">
            Tech Stack
          </p>
          <img src={html} alt="nothing" className="w-[55px] mr-[65px]" />
          <img src={css} alt="nothing" className="w-[55px] mr-[65px]" />
          <img src={javascript} alt="nothing" className="w-[55px] mr-[65px]" />
          <img src={react} alt="nothing" className="w-[55px] mr-[65px]" />
          <img src={tailwind} alt="nothing" className="w-[55px] mr-[65px]" />
          <img src={node} alt="nothing" className="w-[55px] mr-[65px]" />
          <img src={git} alt="nothing" className="w-[55px] mr-[65px]" />
        </nav>
        <nav className="flex items-center mt-[50px]">
          <p className="text-[30px] pr-[20px]  border-r-[2px] border-black font-[700] py-[12px] mr-[90px]">
            Miscellaneous
          </p>
          <img src={java} alt="nothing" className="w-[55px] mr-[65px]" />
          <img src={c} alt="nothing" className="w-[55px] mr-[65px]" />
          <img src={sql} alt="nothing" className="w-[55px] mr-[65px]" />
        </nav>
      </section> */}
      <div className="flex items-center flex-col gap-[15px]">
        <p className="  bg-[#6c0707] py-[4px] text-[11px] md:text-[14px] md:flex items-center px-[20px] md:px-[20px] md:py-[2px] rounded-2xl text-[#cb4040] font-mono font-bold hover:text-[#be1010] hover:bg-[#7b2020]">
          Patch work 🔨
        </p>
        <p className=" md:hidden bg-[#0e2d1d] text-[10px] md:text-[14px] flex items-center px-[15px] md:px-[20px] py-[5px] rounded-2xl text-[#16a34a] font-mono font-bold hover:text-[#45b56e] hover:bg-[#1f382c]">
          VIEW IN DESKTOP FOR FULL VERSION
        </p>
      </div>
    </div>
  );
}

export default Stack;
