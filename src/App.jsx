import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
      gsap.to(".character", {
        scale: 0.7,
        rotate: 0,
        duration: 2,
        delay: "-.8",
        ease: "Expo.easeInOut",
      });

      gsap.to(".text", {
        scale: 1,
        rotate: 0,
        duration: 2,
        delay: "-.8",
        ease: "Expo.easeInOut",
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[1] w-full overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  du=".35em"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-10deg scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="sky absolute top-0 left-0 object-cover w-full h-full scale-[3] rotate-[-20deg]"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute top-0 left-0 object-cover w-full h-full scale-[3.1] rotate-[-3deg]"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute top-20 left-1/2 flex flex-col gap-2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[6rem] leading-none text-white -ml-25">
                  grand
                </h1>
                <h1 className="text-[6rem] leading-none text-white ml-20">
                  theft
                </h1>
                <h1 className="text-[6rem] leading-none text-white -ml-20">
                  auto
                </h1>
              </div>
              <img
                className="character absolute -bottom-[60%] left-1/2 -translate-x-1/2 scale-[0.65] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-10 py-15 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="font-[Helvatica_Now_Display] text-xl">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[45px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">
            <div className="cntnr flex text-white w-full h-[80%]">
            <div className="limg relative w-1/2 h-full flex items-center justify-center">
                <img
                  className="scale-[0.9]"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[45%] py-10">
                <h1 className="text-8xl">Still running</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Gilroy-Medium]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  officia dolorem et quod ad eligendi magni veritatis neque
                  corporis tenetur.
                </p>
                <p className="mt-3 text-xl font-[Gilroy-Medium]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  officia dolorem et quod ad eligendi magni veritatis neque
                  corporis tenetur.
                </p>
                <p className="mt-3 text-xl font-[Gilroy-Medium]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  officia dolorem et quod ad eligendi magni veritatis neque
                  corporis tenetur.
                </p>
                <button className="bg-yellow-500 px-10 py-10 text-2xl text-black mt-10 rounded-full">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
