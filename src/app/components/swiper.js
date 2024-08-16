"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../globals.css';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-fade';

export default function App() {
  return (
    <>
      <Swiper
      effect={'fade'}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        height={500}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img src='/food1.png' class='foods' /> */}
          <div class='food1'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='food2'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='food1'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='food2'></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
