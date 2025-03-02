import Hero from "@/app/components/Hero";
import AboutUs from "@/app/components/AboutUs";
import Activities from "@/app/components/activities/Activities";


export default function Home() {

  return (
    <div className="home-page">
      <Hero/>
      <AboutUs/>
      <Activities/>
    </div>
  );
}
