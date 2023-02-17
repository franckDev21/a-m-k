import React, { FC } from "react";
import ReactPlayer from "react-player";

const VideoPresentation: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`${className} lg:flex-row px-3 flex-col-reverse flex items-center md:space-x-5 container mx-auto mt-16`}
    >
      <ReactPlayer
        width={650}
        className="hidden lg:block"
        controls
        url="/assets/video.mp4"
      />
      <ReactPlayer
        className="video-responsive lg:hidden "
        controls
        url="/assets/video.mp4"
      />
      <div className="flex justify-center items-center flex-col flex-grow mb-4 lg:mb-0">
        <div className="text-center w-full mb-5">
          <h1 className="text-3xl space-x-2 font-bold">
            <span className="text-tertiary">Obtenez</span>
            <span className="text-4xl font-extrabold text-primary">99.99%</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-800 font-bold">
            de chance de réussir votre <br /> Certification au 1<sup>er</sup>{" "}
            essai
          </p>
        </div>
        <img src="/assets/undraw_certificate_re_yadi.svg" width={300} />
      </div>
    </div>
  );
};

export default VideoPresentation;
