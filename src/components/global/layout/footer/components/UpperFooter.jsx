import Link from "next/link";
import Image from "next/image";

import { AboutUs, ContactUs, Gallery, TermsAndConditions, CopyrightPolicy } from "@/routes";


export default function UpperFooter() {

  return (
    <div className="upper-footer w-full grid bg-lightSkyBlue md:grid-cols-[39%_27%_34%]">

      <div className="col-1 flex flex-col order-3 gap-10 px-5 py-10 border-r border-white md:order-none">
        <div className="wrapper flex justify-center items-center gap-5 md:justify-start">
          <div className="img-cont relative w-[35vw] h-[7rem] 2xs:w-[5rem] md:w-[8rem] lg:w-[5rem]">
            <Image
              fill
              src="/images/ashoka.png"
              alt="Ashoka Image"
            />
          </div>
          <div className="text-cont flex flex-col justify-center gap-1 text-darkGreen">
            <div className="heading font-bold sm:text-lg md:text-base">
              Integrated Drug Addiction Monitoring System (IDAMS)
            </div>
            <div className="text text-sm sm:text-base md:text-sm">
              Department of Social Justice & Empowerment.<br/>
              Government of India.
            </div>
          </div>
        </div>

        <Link className="social" href="#" target="_blank">
          <div className="img-cont relative w-full h-[5rem]">
            <Image
              fill
              src="/icons/social.svg"
              alt="social-icons"
            />
          </div>
        </Link>
      </div>

      <div className="col-2 flex justify-center items-center px-5 py-10 text-center font-semibold text-darkGreen">
        <ul className="links flex flex-col gap-5 text-lg">
          {[AboutUs, ContactUs, Gallery, TermsAndConditions, CopyrightPolicy].map(route =>
            <li className="link-item">
              <Link href={route.pathname}>
                {route.title}
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="col-3 px-5 py-10 border-y border-white md:border-l md:border-y-0">
        <div className="wrapper flex flex-col gap-5">
          <div className="cont relative w-full h-[25vw] md:h-[10vw]">
            <Image
              className="object-cover object-center"
              fill
              src="/images/NIC-Logo.svg"
              alt="NIC Logo"
            />
          </div>
          <p className="text text-sm text-center sm:text-base lg:text-lg">
            This site is designed, developed, hosted and maintained by National Informatics Centre,Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment, Government of India.
          </p>
        </div>
      </div>
    </div>
  );
}
