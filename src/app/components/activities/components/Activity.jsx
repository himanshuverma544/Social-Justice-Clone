import ContentOnBackground from '@/components/utilities/ContentOnBackground';


export default function Activity({ className = "", activity = null }) {

  return (
    <div
      className={`
        wrapper
        w-full h-[80vw]
        sm:h-[40vw]
        lg:h-[25vw]
        relative
        group perspective-1000
        ${className}
      `}
    >
      <div className="flip-cont relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="front-side absolute w-full h-full rounded-lg shadow-lg transform rotate-y-0 backface-hidden">
          <ContentOnBackground
            className="h-full flex flex-col justify-end p-5 rounded-lg"
            image={{
              innerClassName: "object-fill object-center",
              src: activity?.image || "",
              alt: activity?.name || "",
            }}
          >
            <p className="text-sm font-semibold text-white 2xs:text-base xs:text-lg sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl">
              {activity?.name || ""}
            </p>
            <p className="text-sm font-semibold text-white 2xs:text-base xs:text-lg sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl">
              {activity?.people || ""}
            </p>
          </ContentOnBackground>
        </div>

        {/* Back Side */}
        <div className="back-side w-full h-full flex flex-col justify-center absolute gap-6 p-5 rounded-lg shadow-lg transform rotate-y-180 backface-hidden text-[4.5vw] bg-parrotGreen text-white sm:text-[2vw] lg:text-[1.5vw]">
          <div className="w-full flex justify-between">
            <span className="w-1/2 font-semibold text-black">
              Activity Name:
            </span>
            <span className="w-1/2 ms-2">
              {activity?.name || ""}
            </span>
          </div>
          <div className="w-full flex justify-between">
            <span className="w-1/2 font-semibold text-black">
              Activity Date:
            </span>
            <span className="w-1/2 ms-2">
              {activity?.date || ""}
            </span>
          </div>
          <div className="w-full flex justify-between">
            <span className="w-1/2 font-semibold text-black">
              No. of Participants:
            </span>
            <span className="w-1/2 ms-2">
              {activity?.people || ""}
            </span>
          </div>
          <div className="w-full flex justify-between">
            <span className="w-1/2 font-semibold text-black">
              Remarks:
            </span>
            <span className="w-1/2 ms-2">
              {activity?.remarks || ""}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
