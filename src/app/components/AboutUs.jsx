import Image from "next/image";


export default function AboutUs() {

  return (
    <section
      id="about-us"
      className="flex justify-center bg-darkGreen"
    >
      <div className="wrapper flex flex-col py-10 sm:flex-row sm:w-[100vw] sm:max-w-[80rem] sm:justify-center">
        <div className="w-full text-cont flex flex-col items-center justify-center gap-10 text-center px-10 text-white sm:order-last">
          <h3 className="heading text-5xl font-bold">
            About Us
          </h3>
          <p className="text sm:text-lg lg:text-xl">
            About Us The Ministry of Social Justice and Empowerment (MSJE) has taken an initiative to establish a Integrated Drug Addiction Monitoring System (IDAMS) so that data on help seekers at centres funded by the Ministry is collected in a systematic way. As a centre funded by the ministry, your participation in this exercise is extremely valuable. You are required to submit a form online for each new patient seeking treatment/rehabilitation/counselling (for alcohol or any other drug) at your centre.
          </p>
          <button className="w-fit flex justify-center px-7 py-2 rounded-full text-center sm:text-lg lg:text-xl font-semibold bg-lightYellow text-black">
            Read More
          </button>
        </div>

        <div className="wrapper w-full flex justify-center items-center">
          <div className="img-cont relative w-[20rem] h-[25rem] sm:w-[80%] sm:h-full">
            <Image
              fill
              src="/images/author.png"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
