import { CometCard } from "@/components/ui/comet-card";

function Cards({ props }) {
  return (
    <CometCard>
      <button
        type="button"
        className="my-10 flex flex-1 min-w-0 max-w-[300px] cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 hover:saturate-100 md:saturate-0 md:my-20 md:p-4"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 my-[20px] flex justify-center items-center">
          <img src={props.image} alt="react" className="w-[45%] md:w-[45%] " />
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs mx-auto">
            <p className="text-[20px] md:text-[26px]">{props.text}</p>
            <p
              className={`text-[14px] md:text-[18px] font-[600] mt-[5px] ${props.style}`}
            >
              {props.text2}
            </p>
          </div>
        </div>
      </button>
    </CometCard>
  );
}

export default Cards;
