import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { PapularBrandsData } from '../../utils/data.js';

const PapularBrands = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6 sm:mb-10 relative z-10">
        <h2 className="text-xl sm:text-4xl font-bold">Papular Brands</h2>
        <div className="flex gap-2">
          <button className="custom-prev bg-white border p-2 rounded-full shadow text-lg font-bold">
            ‹
          </button>
          <button className="custom-next bg-white border p-2 rounded-full shadow text-lg font-bold">
            ›
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-prev',
          prevEl: '.custom-next',
        }}
        spaceBetween={15}
        slidesPerView={6}
        autoplay={false}
      >
        {PapularBrandsData.map((cat, index) => (
          <SwiperSlide key={index}>
            <a
              href={cat.url}
              className="flex flex-col items-center p-3 bg-white border rounded-lg shadow hover:shadow-md transition"
            >
              <img src={cat.image} alt={cat.name} className="w-20 h-20 object-cover mb-2" />
              <span className="text-sm font-medium text-center">{cat.name}</span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PapularBrands;
