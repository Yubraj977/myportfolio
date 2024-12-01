import Image from "next/image";
import { ImagesSliderDemo } from "./components/ui/ImagesSliderDemo";
import { LampDemo } from "./components/ui/LampDemo";
import { LampContainer } from "./components/Ancertenity/lamp";
import { TextGenerateEffectDemo } from "./components/ui/TextGenerateEffectDemo";
import { BackgroundLinesDemo } from "./components/ui/BackgroundLines";
export default function Home() {
  return (
    <div className="w-full bg-black text-white  border  border-red-900  z-0">
      <div className="h-screen">
      <BackgroundLinesDemo />
      </div>
      <div className="h-screen bg-white">
      
      </div>
      
    </div>
  );
}
