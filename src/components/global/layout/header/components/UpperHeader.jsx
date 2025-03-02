import Link from "next/link";

import Icon from "@/components/utilities/Icon";


export default function UpperHeader() {

  return (
    <div
      id="upper-header"
      className="w-full flex flex-wrap justify-between items-center gap-5 px-5 bg-darkGreen"
    >
      <div className="logo w-full flex justify-around items-center gap-1 pt-3 text-center font-semibold text-white md:w-auto md:pb-3">
        <div className="name-hindi">
          भारत सरकार
        </div>
        <hr className="w-[2.5rem] rotate-90"/>
        <div className="name-english">
          Government of India.
        </div>
      </div>

      <div className="links w-full flex flex-wrap justify-center items-center gap-3 pb-3 font-medium text-white md:w-auto md:pb-0">
        <div className="skip-content-text">
          Skip to Main Content
        </div>

        <ul className="items flex justify-center items-center">  
          <li className="item">
            <button className="px-2 py-2 border-x border-x-white md:py-5">
              <Icon
                className="relative w-[1.5rem] h-[1.5rem]"
                icon="/icons/magnifier.svg"
                alt="Magnifier Icon"
              />
            </button>
          </li>
          
          <li className="item">
            <button className="px-2 py-1 md:py-5">
              <Icon
                className="relative w-[2rem] h-[2rem]"
                icon="/icons/language.svg"
                alt="Language Icon"
              />
            </button>
          </li>

          <li className="item flex items-center">
            <Link
              className="flex items-center px-2 py-1 border-x border-x-white md:py-5"
              href="#"
            >
              <Icon
                className="relative w-[1.5rem] h-[1.5rem]"
                icon="/icons/facebook.svg"
                alt="Facebook Icon"
              />
              <Icon
                className="relative w-[1.9rem] h-[1.9rem]"
                icon="/icons/instagram.svg"
                alt="Instagram Icon"
              />
            </Link>
          </li>

          <li className="hindi-lang-item">
            <button className="ps-2 py-1 md:py-5">
              <Icon
                className="relative w-[1.5rem] h-[1.5rem]"
                icon="/icons/letter-hindi.svg"
                alt="Letter Hindi Icon"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}