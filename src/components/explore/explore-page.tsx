"use client";
import { Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
const AspectRatio = AspectRatioPrimitive.Root;

export default function ExploreHome() {
  return (
    <div className="container-fluid">
      <div className="m-auto max-w-xl mt-16">
        <h3 className="m-0 text-2xl font-semibold text-white">Explore</h3>
        <h4 className="mb-[4] mb text-white">Tech Events in Your City</h4>
        <div className="cities grid grid-rows-2 grid-flow-col gap-2">
          <div className="card">
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
                src="https://cdnimg.vietnamplus.vn/uploaded/ivpycivo/2023_07_13/pho_co_hoi_an.png"
                className="w-72 h-64 rounded-lg"
                alt="hình ảnh"
              />
              <div className="card-img-overlay d-flex flex-column z-1 w-64">
                <h5 className="card-title text-white absolute top-4 left-3 mb-auto text-xl font-semibold">
                  Huế
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
    </div>
  );
}
