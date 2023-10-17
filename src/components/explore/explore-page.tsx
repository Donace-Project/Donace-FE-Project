"use client";
import { Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
const AspectRatio = AspectRatioPrimitive.Root;

export default function ExploreHome() {
  return (
    <div id="page-content" className="pt-[calc(3.25rem)+1px]">
      <div id="page-header" className="opacity-[1] pt-12 pl-[1rem!important] pr-[1rem!important] max-w-[820px] m-[0_auto]">
        <div id="spread" className="gap-[.5rem] mb-[.5rem!important] flex justify-between items-center">
          <h1 id="title" className="text-[2rem] font-semibold text-[rgb(19,21,23)] mb-0 leading-[1.2] mt-0">Explore</h1>
        </div>
        <div></div>
      </div>
      <div id="zm-container" className="pl-[1rem!important] pr-[1rem!important] max-w-[820px] m-[0_auto]">
        <h1 className="text-[1.75rem] font-normal text-[rgba(19,21,23,0.36)] leading-[1.2] mt-0 mb-4">Tech Events in Your City</h1>
        <div className="cities grid grid-rows-2 grid-flow-col p-[0_auto] gap-2 justify-center items-center pt-4">
          <div className="card mr-20 mb-5 h-auto">
            <a
              href="#"
              className="bg-cover bg-black drop-shadow-lg rounded-lg w-72 h-64"
            >
              <img
                src="https://www.landmark81skyview.com/wp-content/uploads/2019/04/banner-day.png"
                className="w-72 h-64 rounded-lg shadow hover:shadow-lg"
                alt="hình ảnh"
              />
              <div className="card-img-overlay d-flex flex-column z-1 w-64">
                <h5 className="card-title text-white absolute top-4 left-3 mb-auto text-xl font-semibold">
                  Hồ Chí Minh
                </h5>
              </div>
            </a>
          </div>

          <div className="card">
            <a
              href="#"
              className="bg-cover bg-black drop-shadow-lg rounded-lg w-72 h-64"
            >
              <img
                src="https://www.runglakimresort.com/Uploads/Images/tintuc/1280x904/quang-truong-lam-vien-ve-dem.jpg"
                className="w-72 h-64 rounded-lg"
                alt="hình ảnh"
              />
              <div className="card-img-overlay d-flex flex-column z-1 w-64">
                <h5 className="card-title text-white absolute top-4 left-3 mb-auto text-xl font-semibold">
                  Đà Lạt
                </h5>
              </div>
            </a>
          </div>

          <div className="card">
            <a
              href="#"
              className="bg-cover bg-black drop-shadow-lg rounded-lg w-72 h-64"
            >
              <img
                src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/08/The-Golden-Bridge-is-lifted-by-two-giant-hands-in-the-tourist-resort-on-Ba-Na-Hill-in-Danang-Vietnam.jpg"
                className="w-72 h-64 rounded-lg mb-4"
                alt="hình ảnh"
              />
              <div className="card-img-overlay d-flex flex-column z-1 w-64">
                <h5 className="card-title text-white absolute top-4 left-3 mb-auto text-xl font-semibold">
                  Đà Nẵng
                </h5>
              </div>
            </a>
          </div>

          <div className="card">
            <a
              href="#"
              className="bg-cover bg-black drop-shadow-lg rounded-lg w-72 h-64"
            >
              <img
                src="https://media.vneconomy.vn/images/upload/2023/05/13/dbscl-4604.jpg"
                className="w-72 h-64 rounded-lg"
                alt="hình ảnh"
              />
              <div className="card-img-overlay d-flex flex-column z-1 w-64">
                <h5 className="card-title text-white absolute top-4 left-3 mb-auto text-xl font-semibold">
                  Cần Thơ
                </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="m-auto max-w-xl mt-16">
          <h3 className="m-0 text-2xl font-semibold">Explore</h3>
          <h4 className="mb-4">Tech Events in Your City</h4>
        </div>
      </div> */}
    </div>
  );
}
