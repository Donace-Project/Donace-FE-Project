"use client"
import { Button } from "@/components/ui/button";
import { LoginAPI } from "@/shared/allApiHere";
import Link from "next/link";
import React, { Suspense } from "react";
import { SpinnerInfinity } from 'spinners-react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Home() {

  return (
    <div className="container min-h-fit py-24">
      <div className="grid grid-cols-12 justify-center items-center">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="my-10 text-center md:text-left">
            <div className="mb-[1.5rem] ml-[0.3125rem]">
              <p className="text-2xl font-bold text-muted-foreground">Donace</p>
            </div>
            {/* <p className="text-3xl inline-block my-2">Những sự kiện thú vị</p> */}
            <h1 className="text-4xl leading-10 font-medium mt-0 mb-4 text-white">
              <div>
                Delightful
                <span className="hidden">&nbsp;</span>
                <br></br>
                events
              </div>
            </h1>
            <p className="start-here font-bold inline-block text-3xl">Start here.</p>
            <p className="my-5 text-lg text-gray-400 font-[1.25rem] max-w-[380px]">Set up an event page, invite friends and sell tickets. Host a memorable event today.</p>
          </div>
          <div className="text-center md:text-left">
            <Link href={"/create"}>
              <Button variant="secondary2">
                {/* <p className="text-lg">Tạo event đầu tiên ngay!</p>   */}
                <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                  Create Your First Event
                </div>
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2"></div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <div className="my-10">
            <div className='col-span-1 md:col-span-6 h-[500px] flex justify-center items-center'>
              <Suspense fallback={<SpinnerInfinity size={200} enabled={true} />}>
                <Spline scene="https://prod.spline.design/lz7hvqH6a0vd1xDE/scene.splinecode" />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
