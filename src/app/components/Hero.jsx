import Image from "next/image";


export default function Hero() {

  return (
    <section id="hero" className="img-cont relative w-full h-[20rem] px-5 py-10">
      <Image
        className="object-cover object-center"
        fill
        priority
        src="/images/hero.png"
        alt="hero-image"
      />
    </section>
  );
}
