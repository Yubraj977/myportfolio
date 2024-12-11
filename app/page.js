import Image from "next/image";
import { ImagesSliderDemo } from "./components/ui/ImagesSliderDemo";
import { LampDemo } from "./components/ui/LampDemo";
import { LampContainer } from "./components/Ancertenity/lamp";
import { TextGenerateEffectDemo } from "./components/ui/TextGenerateEffectDemo";
import { BackgroundLinesDemo } from "./components/ui/BackgroundLines";
export default function Home() {
  return (
    <div className="w-full bg-black text-white  border  border-red-900  z-0">
      
      <div className="lg:h-screen bg-white">
        <img src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      
    </div>
  );
}
