function Project(props) {
  const openWebsite = () => {
    window.open(`${props.website}`, "_blank"); // _blank opens in a new tab
  };

  // props.website, props.number, props.images, props.title, props.description, props.projectImage

  return (
    <div>
      <section className="w-[100%] md:w-[75%] mx-auto mb-[40px] md:mb-[50px]">
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
              <p className=" font-[600] pr-[10px] md:pr-[20px]  border-r border-[#888] mr-[20px] md:mr-[50px]">
                {props.number}{" "}
              </p>
              {props.images && (
                <div className="flex items-center">
                  {props.images.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt="tech-logo"
                      className="w-[20px] md:w-[30px] mr-[18px] md:mr-[35px]"
                    />
                  ))}
                </div>
              )}
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
                  {props.title}
                </p>

                <p className="text-[13px] md:text-[18px]  clamp-3 md:line-clamp-none mt-[2px] md:mt-[5px]">
                  {props.description}
                </p>
              </section>
            </nav>
            <img
              src={props.projectImage}
              alt="desktop"
              className="w-[100%]  md:w-[70%]"
            />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Project;
