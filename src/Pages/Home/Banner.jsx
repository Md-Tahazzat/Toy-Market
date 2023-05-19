import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full my-10 md:my-20">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row items-center justify-between my-5">
          <div>
            <h1 className="text-2xl text-center my-4 md:my-0 md:text-3xl max-w-lg text-slate-600 md:font-semibold">
              Get Ready to Race with Our Incredible Toy Car Collection - Fun for
              All Ages!
            </h1>
          </div>
          <img
            src="https://i.ibb.co/3sGc2Kz/banner-toy-2.png"
            className="w-full md:w-3/6"
          />
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 md:translate-y-0  left-5 right-5 top-1/2 md:top-[60%]">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent md:bg-slate-500/95 text-[#51e2f5]"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent md:bg-slate-500/95 text-[#51e2f5]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row items-center justify-between my-5">
          <div>
            <h1 className="text-2xl text-center my-4 md:my-0 md:text-3xl max-w-lg text-slate-600 md:font-semibold">
              Experience Endless Adventures with Our High-Quality Toy Cars for
              Kids!
            </h1>
            <p></p>
          </div>
          <img
            src="https://i.ibb.co/McNRwvW/banner-toy-3.png"
            className="w-full md:w-3/6"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-[60%]">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent md:bg-slate-500/95 text-[#51e2f5]"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent md:bg-slate-500/95 text-[#51e2f5]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row items-center justify-between my-5">
          <div>
            <div>
              <h1 className="text-2xl text-center my-4 md:my-0 md:text-3xl max-w-lg text-slate-600 md:font-semibold">
                Bring Joy and Excitement to Playtime with Our Top-Notch Toy Cars
                for Kids!
              </h1>
            </div>
          </div>
          <img
            src="https://i.ibb.co/DLfkZSR/banner-toy1.png"
            className="w-full md:w-3/6"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-[60%]">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent md:bg-slate-500/95 text-[#51e2f5]"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent md:bg-slate-500/95 text-[#51e2f5]"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
