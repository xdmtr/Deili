"use client";

import OnePage from "@/components/OnePage";
import { chapterZero } from "@/data/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';


const ChapterZero: React.FC = () => {
  return (
    <>
      <OnePage className="p-5 overflow-hidden gap-10" id="zero">
        <div className="">
          <h1 className="font-zeyada text-3xl">How we know each other</h1>
          <hr className="border-separate " />
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            slidesPerView="auto" 
            grabCursor={true} 
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper pb-20"
          >
            {chapterZero.map((item, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="flex flex-col gap-5">
                  <p className="font-josefin">{item.description}</p>
                  <div className="p-5 border-white border-2 rounded-xl flex justify-center">
                    <div className="h-[300px] overflow-y-scroll chap-image ">
                      <Image
                        src={item.image}
                        width={372}
                        height={300}
                        alt="image"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </OnePage>
    </>
  );
};

export default ChapterZero;
