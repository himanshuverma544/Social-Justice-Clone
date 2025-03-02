'use client';

import Link from 'next/link';

import "@/styles/pure-react-carousel.css";;

import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup
} from 'pure-react-carousel';

import useVisibleSlides from '@/hooks/libraries/pure-react-carousel/useVisibleSlides';

import Activity from "@/app/components/activities/components/Activity";

import Icon from "@/components/utilities/Icon";


const activities = [
  {
    id: 1,
    name: "Outreach Activities by IRCA’s",
    date: "02/2/25",
    people: "10 Persons",
    image: "/images/activity-1.png",
    remarks: "By IRCA's"
  },
  {
    id: 2,
    name: "Outreach Activities by IRCA’s",
    date: "02/2/25",
    people: "10 Persons",
    image: "/images/activity-2.png",
    remarks: "By IRCA's"
  },
  {
    id: 3,
    name: "Outreach Activities by IRCA’s",
    date: "02/2/25",
    people: "10 Persons",
    image: "/images/activity-1.png",
    remarks: "By IRCA's"
  },
  {
    id: 4,
    name: "Outreach Activities by IRCA’s",
    date: "02/2/25",
    people: "10 Persons",
    image: "/images/activity-2.png",
    remarks: "By IRCA's"
  },
  {
    id: 5,
    name: "Outreach Activities by IRCA’s",
    date: "02/2/25",
    people: "10 Persons",
    image: "/images/activity-1.png",
    remarks: "By IRCA's"
  },
  {
    id: 6,
    name: "Outreach Activities by IRCA’s",
    date: "02/2/25",
    people: "10 Persons",
    image: "/images/activity-2.png",
    remarks: "By IRCA's"
  }
];


export default function Activities() {

  const { visibleSlidesCount } = useVisibleSlides();

  return (
    <section
      id="activities"
      className="flex flex-col items-center gap-10 px-5 py-10 bg-lightBlue"
    >
      <div className="wrapper w-full relative">
        <div className="heading w-full absolute top-0 right-1/2 translate-x-1/2 px-3 text-2xl text-center font-bold text-darkGreen md:w-auto lg:text-3xl">
          Awareness/Outreach Activities By IRCA’s
        </div>
        <Link
          className="hidden md:w-auto md:flex md:items-center md:absolute md:top-0 md:right-0 md:gap-3 md:px-3 md:py-1 md:border-2 md:border-white md:rounded-md md:font-bold md:bg-darkGreen md:text-white"
          href="#"
        >
          <span className="label">
            view all
          </span>
          <Icon
            className="relative w-[20px] h-[20px]"
            icon="/icons/send.svg"
            alt="send-icon"
          />
        </Link>
      </div>

      <CarouselProvider
        className="carousel flex flex-col items-center justify-center gap-10 mt-16 xs:mt-10 sm:mt-8 md:mt-10 lg:mt-12"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        visibleSlides={visibleSlidesCount}
        totalSlides={activities?.length || 0}
        isPlaying={false}
        interval={3000}
      >
        <Slider className="activities-slider w-[95vw] overflow-hidden">
          {activities.length > 0 &&
            activities.map((activity, index) =>
              <Slide
                key={activity?.id || index}
                index={index}
                className="mx-5 cursor-grab active:cursor-grabbing"
              >
                <Activity activity={activity}/>
              </Slide>
            )
          }
        </Slider>
        <DotGroup className="dot-group flex flex-wrap gap-y-5"/> 
      </CarouselProvider>

      <Link
        className="w-auto flex items-center gap-3 px-3 py-1 border-2 border-white rounded-md font-bold bg-darkGreen text-white md:hidden"
        href="#"
      >
        <span className="label">
          view all
        </span>
        <Icon
          className="relative w-[20px] h-[20px]"
          icon="/icons/send.svg"
          alt="send-icon"
        />
      </Link>
    </section>
  );
}