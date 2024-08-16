"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const slides = [
    "https://ricelakechamber.org/wp-content/uploads/2019/06/Pizza-Hut-Logo.jpg",
    "/mc.png",
    "/kfc.png",
    "https://ricelakechamber.org/wp-content/uploads/2019/06/Pizza-Hut-Logo.jpg",
    "/mc.png",
    "/kfc.png",
]
export default function App() {
    return (
        <>
            <div>
                <div>
                    <h2 class='chillax CFL tac heading'>
                        Order From Various Resturants:
                    </h2>
                    <h3 class='CFL excon tac'>In the Mood of favorite resturant? Go Ahead and pick one</h3>
                </div>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={3}
                loop={true}
                    autoplay={{
                        delay: 1000,
                    }}
                    modules={[Autoplay]}
                    className="RSwiper"
                >
                    {slides.map(function (title) {
                        return (
                            <SwiperSlide class="rslides">
                                <img
                                    class='SliderImg-Container'
                                    src={title}

                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    dir='rtl'
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="RSwiper"
                >
                    {slides.map(function (title) {
                        return (
                            <SwiperSlide class="rslides">
                                <img
                                    class='SliderImg-Container'
                                    src={title}
                                    loading="lazy"

                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="RSwiper"
                >
                    {slides.map(function (title) {
                        return (
                            <SwiperSlide class="rslides">
                                <img
                                    class='SliderImg-Container'
                                    src={title}
                                    loading="lazy"

                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    );
}
