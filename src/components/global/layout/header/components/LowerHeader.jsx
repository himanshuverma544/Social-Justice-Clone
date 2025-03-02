'use client';

import NavItem from "@/components/utilities/NavItem";

import { Home, AboutUs, ContactUs, UserGuides, Login, Register } from "@/routes";


export default function LowerHeader() {

  const activeRouteClassName = "text-white"; 

  return (
    <div className="lower-header flex flex-wrap justify-between items-center gap-5 px-5 py-3 bg-parrotGreen">

      <ul className="links flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-nowrap font-medium text-darkGreen lg:font-semibold">
        <NavItem
          title={{
            className: `home-nav-item`,
            name: Home.title
          }}
          href={{
            activeClassName: activeRouteClassName,
            pathname: Home.pathname
          }}
        />
        <NavItem
          title={{
            className: `about-us-nav-item`,
            name: AboutUs.title
          }}
          href={{
            activeClassName: activeRouteClassName,
            pathname: AboutUs.pathname
          }}
        />
        <NavItem
          title={{
            className: `contact-us-nav-item`,
            name: ContactUs.title
          }}
          href={{
            activeClassName: activeRouteClassName,
            pathname: ContactUs.pathname
          }}
        />
        <NavItem
          title={{
            className: `user-guide-nav-item`,
            name: UserGuides.title
          }}
          href={{
            activeClassName: activeRouteClassName,
            pathname: UserGuides.pathname
          }}
        />
      </ul>

      <ul className="flex flex-wrap justify-between items-center gap-x-5 gap-y-4 text-sm font-medium text-white lg:font-semibold">
        <NavItem
          title={{
            className: "login-nav-item px-4 py-0.5 rounded-l-sm bg-lightGreen",
            name: Login.title
          }}
          href={{
            className: "flex flex-row-reverse items-center",
            activeClassName: activeRouteClassName,
            pathname: Login.pathname
          }}
          icon={{
            contClassName: "p-1 rounded-r-sm bg-lightParrotGreen",
            className: "relative size-[1.2rem]",
            status: {
              general: "/icons/login.svg",
            }
          }}
        />
        <NavItem
          title={{
            className: "register-nav-item px-4 py-0.5 rounded-l-sm bg-lightParrotGreen",
            name: Register.title
          }}
          href={{
            className: "flex flex-row-reverse items-center",
            activeClassName: activeRouteClassName,
            pathname: Register.pathname
          }}
          icon={{
            contClassName: "p-1 rounded-r-sm bg-lightGreen",
            className: "relative size-[1.2rem]",
            status: {
              general: "/icons/register.svg",
            }
          }}
        />
      </ul>
    </div>
  );
}