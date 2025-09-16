import logo from "../images/logo.png";
function Header() {
  const array = ["About", "Projects", "Experience", "Education"];
  return (
    // <div className="py-[20px] px-[40px] font-montserrat flex justify-between text-[#222] sticky top-0 bg-[#f5f4f3]">
    <div className="px-[10px] py-[20px] md:px-[40px] font-montserrat flex justify-between items-center sticky top-0  text-white bg-transparent mix-blend-difference z-3">
      <section className="flex items-center gap-[2px] md:gap-1 hover:cursor-pointer">
        <img
          src={logo}
          alt="logo"
          className="w-[22px] md:w-[25px] filter invert"
        />
        <p className="text-[14px] font-montserrat md:text-[16px] font-[600] md:font-[700]">
          ponv.dev
        </p>
      </section>
      <section className="flex font-[600] md:gap-2 md:tracking-tight">
        <a
          href="#about"
          className=" hidden md:block
        px-[15px] py-[5px] rounded-xl transition-all duration-300
            border border-transparent
            hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border
            hover:border-current hover:shadow-[3px_3px_0px_0px_currentColor]
            hover:cursor-pointer
        "
        >
          About
        </a>
        <a
          href="#projects"
          className="text-[13px] md:text-[16px] px-[10px]  md:px-[15px] py-[5px] rounded-xl transition-all duration-300
            border border-transparent
            hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border
            hover:border-current hover:shadow-[3px_3px_0px_0px_currentColor]
            hover:cursor-pointer
        "
        >
          Project
        </a>
        {/* <p
          className="text-[13px] md:text-[16px] px-[10px]  md:px-[15px] py-[5px] rounded-xl transition-all duration-300
            border border-transparent
            hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border
            hover:border-current hover:shadow-[3px_3px_0px_0px_currentColor]
            hover:cursor-pointer
        "
        >
          Education
        </p> */}

        <a
          href="#contact"
          className=" text-[13px] md:text-[16px] px-[10px]  md:px-[15px]
        px-[15px] py-[5px] rounded-xl transition-all duration-300
            border border-transparent
            hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border
            hover:border-current hover:shadow-[3px_3px_0px_0px_currentColor]
            hover:cursor-pointer
        "
        >
          Contact
        </a>
      </section>
    </div>
  );
}

export default Header;
