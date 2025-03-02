import Image from "next/image";

import Icon from "@/components/utilities/Icon";


export default function MiddleHeader() {

  return (
    <div className="middle-header flex flex-col items-center gap-3 px-5 pt-5 pb-10 bg-lightYellow md:flex-row md:justify-between md:pb-5">

      <div className="left-cont flex justify-between items-center gap-5">

        <div className="img-cont relative w-[6rem] h-[8rem]">
          <Image
            fill
            src="/images/ashoka.png"
            alt="Ashoka"
          />
        </div>

        <div className="text-cont flex flex-col justify-center gap-3 p-3">
          <div className="heading text-sm font-bold text-skyBlue sm:text-base lg:text-lg xl:text-xl">
            Integrated Drug Addiction Monitoring System (IDAMS)
          </div>
          <div className="text text-xs sm:text-sm lg:text-base xl:text-lg">
            Department of Social Justice & Empowerment.<br/>
            Government of India.
          </div>
        </div>

      </div>

      <div className="right-cont flex items-center relative gap-10 md:w-1/2 md:justify-end lg:w-auto lg:justify-start">

        <div className="icon-cont p-3 rounded-full bg-darkGreen lg:p-5">
          <Icon
            className="relative w-[2rem] h-[2rem] "
            icon="/icons/phone.svg"
            alt="Call Icon"
          />
        </div>

        {/* <Icon
          className="absolute top-0 -right-[100%] w-[45rem] h-[5rem]"
          icon="/icons/curvy-line.svg"
          alt="Curvy Line Icon"
        /> */}

        <div className="helpline-cont flex flex-col items-center justify-center gap-0.5 px-[4vw] py-1 rounded-full bg-darkGreen text-white md:px-[2vw]">
          <div className="text text-center text-xs font-semibold sm:text-sm md:text-xs lg:text-lg lg:font-medium xl:text-xl">
            Drug De-addiction Helpline
          </div>
          <div className="ph-no text-lg font-semibold sm:text-xl md:text-lg lg:text-3xl lg:font-medium xl:text-4xl">
            14446
          </div>
          <button className="call-to-action absolute top-[90%] px-5 py-1 rounded-full text-sm font-bold bg-white text-red-500">
            Call today
          </button>
        </div>

      </div>
    </div>
  );
}
