"use client"
import { Button } from "@/components/ui/button";
import React, { Suspense } from "react";
import { SpinnerInfinity } from 'spinners-react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Home() {
  return (
    <div className="container min-h-fit py-24">
      <div className="grid grid-cols-12 justify-center items-center">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="my-10 text-center md:text-left">
            <p className="text-2xl font-bold text-muted-foreground">Donace</p>
            <p className="text-3xl inline-block my-2">Những sự kiện thú vị</p>
            <p className="start-here font-bold inline-block text-3xl font-mono">bắt đầu từ đây.</p>
            <p className="my-5 text-lg text-muted-foreground">Lập trang sự kiện, mời bạn bè và bán vé. Hãy tổ chức một sự kiện đáng nhớ ngay hôm nay.</p>
          </div>
          <div className="text-center md:text-left">

            <Button><p className="text-lg">Tạo event đầu tiên ngay!</p></Button>
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
