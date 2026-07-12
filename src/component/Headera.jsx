import React from "react";

const Headera = () => {
  return (
    <div className="relative h-screen overflow-hidden ">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://video-previews.elements.envatousercontent.com/files/eba22159-ba06-417d-b1f4-3d3432e1b03e/video_preview_h264.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div>
          <h1 className="text-6xl font-bold text-cyan-400">About Me</h1>

          <p className="mt-4 text-xl">Frontend Developer | React Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Headera;
