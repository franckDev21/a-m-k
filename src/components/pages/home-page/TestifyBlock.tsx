import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { listOfComments } from "../../../utils/testData";

const TestifyBlock: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      id="temoignage"
      className={`${className} py-10 h-[670px] relative`}
      style={{
        backgroundImage: `linear-gradient(#3C5EAB, #3c5dab57, #3c5dab57),url('/assets/istockphoto-1248897199-1024x1024.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        // backgroundPosition: "center",
        // backgroundSize:'content',
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto ">
        <h1 className=" mx-auto mt-5 lg:mt-10 text-center text-4xl font-extrabold text-white">
          Nos étudiants témoignent
        </h1>

        <div className="p-5 w-[99%] md:w-[70%] text-white rounded-md absolute mt-14 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Swiper
            freeMode
            pagination={{ clickable: true }}
            modules={[FreeMode, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            className="w-full relative pt-10"
            autoplay={{ delay: 10000 }}
          >
            {listOfComments.map((item, key) => (
              <SwiperSlide
                key={key}
                style={{ display: "flex" }}
                className="flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0"
              >
                <div className={`w-[200px] flex justify-center ${key !== 0 && 'items-center'} h-[200px] lg:w-[300px] flex-none lg:h-[300px] overflow-hidden relative border-4`}>
                  <img
                    src={item.image}
                    className="absolute w-full h-auto object-cover "
                  />
                </div>
                <div>
                  <p className="text-lg lg:text-xl xl:text-[1.47rem] font-light">
                    {item.content}
                  </p>
                  <div className="mt-10">
                    <p className="bg-primary text-white max-w-max px-2">
                      {item.job}
                    </p>
                    <h1 className="text-2xl font-extrabold">
                      {item.firstname} {item.lastname}
                    </h1>
                    <h1 className="text-tertiary font-bold bg-white max-w-max px-2">
                      {item.certif}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestifyBlock;
