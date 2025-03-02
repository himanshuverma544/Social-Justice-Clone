import Link from "next/link";
import Image from "next/image";


export default function MiddleHeader() {

  return (
    <div className="middle-header flex flex-col items-center gap-5 px-5 py-5 bg-lightYellow md:flex-row md:justify-between">

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

      {/* To make it work well responsively, it has been done this way. */}

      <Link className="right-cont flex justify-center items-center" href="tel:14446">
        <div className="call-today-link img-cont relative w-[90vw] h-[6rem] md:w-[40vw]">
          <Image
            fill
            className="call-today"
            src="/images/call-today.svg"
            alt="call-today-image"
          />
        </div>
      </Link>
    </div>
  );
}
