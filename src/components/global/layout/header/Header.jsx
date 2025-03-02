import UpperHeader from "@/components/global/layout/header/components/UpperHeader";
import MiddleHeader from "@/components/global/layout/header/components/MiddleHeader";
import LowerHeader from "@/components/global/layout/header/components/LowerHeader";


export default function Header({ className = "" }) {

  return (
    <header className={`${className}`}>
      <UpperHeader/>
      <MiddleHeader/>
      <LowerHeader/>      
    </header>
  );
}
