import OnePage from "@/components/OnePage";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";

const words = [
    {
      text: "Happy anniversary one year, my love ❤",
      className: " text-2xl font-zeyada"
    },
  ];

const Hero: React.FC = () => {
    return(
        <>
        <OnePage className="pb-10" id="hero">
            <div className=" text-center flex flex-col gap-5 pt-10 text-xl px-5">
                <p className="font-bold font-nothingyoucouldo ">Hallo, Deisya Meidhina</p>
                <p className="font-josefin">I dedicated this website to you, the one I love the most. </p>
            </div>
            <div className="p-5">
                <TypewriterEffectSmooth words={words}  className=""/>
            </div>
            <div className="w-full px-10">
                <div className="h-[300px] w-full overflow-hidden py-5 border-2 border-white rounded-xl flex justify-center ">
                    <Image 
                    src="https://drive.google.com/uc?export=view&id=1dyP1OT_tiyTYEY38tOgFecCeKorjAatD"
                    width={200}
                    height={150}
                    alt="image"
                    className="object-cover object-top rounded-xl"
                    />
                </div>
            </div>
        </OnePage>
        </>
    )
}

export default Hero;