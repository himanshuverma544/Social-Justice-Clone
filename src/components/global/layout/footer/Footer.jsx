import UpperFooter from "@/components/global/layout/footer/components/UpperFooter";
import LowerFooter from "@/components/global/layout/footer/components/LowerFooter";


export default function Footer({ className = "" }) {

  return (
    <footer className={`${className}`}>
      <UpperFooter/>
      <LowerFooter/>
    </footer>
  );
}