import logo from "../images/logo.png";

function Footer() {
  const openGithub = () => {
    window.open("https://github.com/PonVicky", "_blank"); // _blank opens in a new tab
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/pon-vignesh-899baa36b", "_blank");
  };
  return (
    <div className="text-white bg-black">
      <div className="px-[24px] md:px-[32px] mx-auto pt-[150px]  md:pt-[200px] flex flex-col gap-[30px]">
        <p className="hidden md:block text-[22px] md:text-[32px] text-[#888888]">
          Want to collaborate on a project?
        </p>
        <p className="md:hidden text-[20px] ml-[5px] md:text-[32px] text-[#888888]">
          Got an idea to build ?
        </p>
        <nav className="flex items-center">
          <img
            src={logo}
            alt="nothing"
            className="invert-100 w-[70px] md:w-[160px] mr-[10px]"
          />
          <p className="text-[45px] md:text-[120px] font-[700] "> Contact</p>
        </nav>
        <p className="text-[20px] ml-[10px] md:text-[28px] mb-[20px] font-thin">
          ponvicky6@gmail.com
        </p>

        <hr className=" border-t-[1px] border-[#888] " />
        <nav className="text-[14px] md:text-[18px] flex gap-[20px] ml-[10px] md:ml-[20px] mb-[20px]">
          <p onClick={openLinkedin} className="hover:cursor-pointer">Linkedin</p>
          <p onClick={openGithub} className="hover:cursor-pointer">
            Github
          </p>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
