"use client";

import OnePage from "@/components/OnePage";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { chapterContinue } from "@/data/data";

const ChapterContinue: React.FC = () => {
  return (
    <>
      <OnePage id="continue" className="p-5 overflow-hidden gap-10">
        <div>
          <h1 className="font-zeyada text-3xl">And the story continue...</h1>
          <hr className=" " />
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
            {chapterContinue.map((item, indexs) => (
              <SwiperSlide key={indexs} className="w-full flex flex-col">
                {item.texts.map((text, index) => (
                  <p key={index} className={`font-josefin last:pt-5`}>
                    {text.text}
                  </p>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="font-alison text-3xl text-center">Selamat hari jadi yang ke-satu tahun ❤</p>
        </div>
      </OnePage>
    </>
  );
};

export default ChapterContinue;
