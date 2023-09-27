'use client';

import * as React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin, Plus, User2 } from "lucide-react"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

const customRight = `calc((1 - 0.5 - 0.1) * 1.125rem)`;


export default function HomePastEvent() {
    return (
        <div>
            <div id="page-content" className="pt-[calc(3.25rem+1px)] box-border">
                <div id="page-header" className="opacity-1 pt-[3rem] pl-[1rem_!important] pr-[1rem_!important] max-w-[820px] m-[0_auto]">
                    <div id="" className="gap-[.5rem] mb-[.5rem_!important] flex justify-between items-center">
                        <h1 id="tab-title" className="text-[2rem] font-[600] mb-[0px] leading-[1.2]">Events</h1>
                        <div id="lux-button-switcher always" className="min-w-[auto] p-[0.125rem] overflow-hidden rounded-[0.5rem]">
                            <div id="segment" className="grid relative grid-cols-2">
                                <Link href="/home">
                                    <Button variant="ghostSignin" className="text-[0.8rem] p-[0.25rem_0.5rem]">
                                        <div className="z-2 relative">Upcoming</div>
                                    </Button>
                                </Link>
                                <Link href={"/home-past-event"}>
                                    <Button variant="secondary" className="text-[0.8rem] p-[0.25rem_0.5rem]">
                                        <div>Past</div>
                                    </Button>
                                </Link>
                                {/* <div id="slider-animated" className="left-[calc(0%)] pointer-events-none bg-[#fff2] rounded-[calc(var(0.5rem)/1.25)] w-[calc(100%/var(2))] shadow-[var(rgba(0,0,0,.25))] absolute h-[100%] z-1 transition-transform">
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div id="blank"></div>
                </div>
                <div className="p-[2rem_1rem_1rem] max-w-[var(820px)] m-[0_auto]" id="load-more-observer"></div>
                <div className="min-h-[1px]"></div>
            </div>
            <div id="zm-container" className="gap-[3rem] p-[1rem] pt-[2rem] max-w-[820px] m-[0_auto] box-border">
                <div id="timeline">
                    <div id="timeline-section" className="relative flex w-full gap-[4rem] pb-[3rem]">
                        <div id="line" className="absolute top-[1.5rem] bottom-0 left-[calc(7rem+4rem/2)] border-l-[0.125rem] border-dashed"></div>
                        <div id="title-away" className="relative z-[5] w-[7rem]">
                            <div id="container" className="sticky top-[var(4.5rem)]">
                                <div id="timeline-title">
                                    <div id="content">
                                        <div id="date" className="font-[500]">
                                            Sep 5
                                        </div>
                                        <div id="weekday">
                                            Friday
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="dot-outer-wrapper" className="absolute top-[0.375rem] right-[calc(-2rem-0.4375rem)] justify-center flex items-center">
                                <div id="dot-wrapper" className="justify-center flex items-center">
                                    <div id="dot" className="w-[0.75rem] h-[0.75rem] border-2 border-custom rounded-[100%]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-[0] flex-[1_1]">
                            <div id="card-wrapper" className="p-[0.75rem_0.75rem_0.75rem_1rem]">
                                <div className="p-[0.75rem_0.75rem_0.75rem_1rem] relative rounded-[0.75rem] bg-gray-100 overflow-hidden">
                                    <Link href={"/"} className="absolute no-underline">
                                        &nbsp;
                                    </Link>
                                    <div id="event-content" className="gap-[0.75rem] flex flex-col">
                                        <div id="info-and-cover" className="flex-row-reverse gap-4 flex">
                                            <div id="cover-image" className="pointer-events-none">
                                                <div className="w-[200px]">
                                                    <div className="w-[100%] bg-gray-100 overflow-hidden relative rounded-[0.5rem] pb-[50%]">
                                                        {/* giữ lại thuộc tính css, đổi div thành hình ảnh nếu có */}
                                                        <div className="absolute top-0 left-0 w-[100%] h-[100%] object-cover align-middle">
                                                            đây là hình ảnh
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="info" className="gap-[0.5rem] min-w-[0] flex-[1_1] flex flex-col">
                                                <div id="event-time" className="gap-[.5rem] flex items-center">
                                                    <div className="min-w-[0] overflow-hidden text-ellipsis whitespace-nowrap bg-gray-100">
                                                        <span id="time">12:12PM</span>
                                                    </div>
                                                </div>
                                                <div className="text-[1.25rem]">
                                                    <h3 className="inline text-[1.25rem] font-[500] break-words leading-[1.2] mt-[0] mb-[1rem]">
                                                        Happy Bee
                                                    </h3>
                                                </div>
                                                <div className="gap-[.25rem] flex flex-col">
                                                    <div id="attribute" className="text-[1rem] bg-gray-100 gap-[.5rem] flex items-start">
                                                        <div id="icon" className="h-custom-icon text-[1rem] flex items-center">
                                                            <MapPin className="w-[1rem] h-[1rem] block align-middle" />
                                                        </div>
                                                        <div className="text-[1rem] min-w-[0]">
                                                            Ho Chi Minh City
                                                        </div>
                                                    </div>
                                                    <div id="attribute" className="text-[1rem] bg-gray-100 gap-[.5rem] flex items-start">
                                                        <div id="icon" className="h-custom-icon text-[1rem] flex items-center">
                                                            <User2 className="w-[1rem] h-[1rem] block align-middle" />
                                                        </div>
                                                        <div className="text-[1rem] min-w-[0]">
                                                            Approved Guest
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="event-bottom-bar" className="flex justify-between items-center">
                                            <div className="gap-[.5rem] flex items-center">
                                                <div id="status-or-price" className="flex">
                                                    <Link href={"/"} className="bg-slate-200 border-transparent border border-solid p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[calc(1.75rem+2*1px)] font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent max-w-[100%] w-fit flex items-center cursor-pointer no-underline">
                                                        <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                                                            Manage Event
                                                        </div>
                                                        <ArrowRight className="ml-[var(0.375rem)] stroke-[2.5] w-[1rem] h-[1rem] flex-shrink-0 block align-middle" />
                                                    </Link>
                                                </div>
                                                <div id="heads" className="flex items-center">
                                                    <div id="head" className="relative flex items-start">
                                                        <div id="avatar-wrapper-small">
                                                            <div id="avatar" className="w-[1.125rem] h-[1.125rem] rounded-[1000px] bg-center bg-cover relative">
                                                                <Avatar>
                                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" className="rounded-[1000px]"></AvatarImage>
                                                                </Avatar>
                                                                <div id="online-indicator-wrapper" className="w-[25%] h-[25%] min-w-[6px] min-h-[6px] rounded-[100%] absolute right-[0] bottom-[0] overflow-hidden">
                                                                    <div id="online-indicator" className="m-[var(--border)] w-[calc(100%-2*var(--border))] h-[calc(100%-2*var(--border))] rounded-[100%]"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="lux-menu-trigger-wrapper" className="absolute inline-flex min-w-[0]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="timeline-section" className="pb-[0px] relative flex w-full gap-[4rem] box-border">
                        <div id="line" className="top-[1.5rem] absolute bottom-0 left-[calc(7rem+4rem/2)] border-l-[0.125rem] border-dashed"></div>
                        <div id="title-aways" className="relative z-[5] w-[7rem]">
                            <div id="container" className="sticky top-[4.5rem]">
                                <div id="timeline-title">
                                    <div id="content">
                                        <div id="date" className="font-[500]">
                                            Dec 12
                                        </div>
                                        <div id="weekday" className="">
                                            Friday
                                        </div>
                                    </div>
                                </div>
                                <div id="dot-outer-wrapper" className="absolute top-[0.375rem] right-[calc(-2rem-0.4375rem)] justify-center flex items-center">
                                <div id="dot-wrapper" className="justify-center flex items-center">
                                    <div id="dot" className="w-[0.75rem] h-[0.75rem] border-2 border-custom rounded-[100%]"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="min-w-[0] flex-[1_1]">
                            <div id="card-wrapper" className="mb-[1rem] p-[0.75rem_0.75rem_0.75rem_1rem]">
                                <div id="content-card" className="p-[0.75rem_0.75rem_0.75rem_1rem] cursor-pointer relative rounded-[0.75rem] bg-gray-100 border-[1px] border-solid overflow-hidden">
                                    <Link id="event-link-content" href={"/"} className="absolute cursor-pointer no-underline">
                                        &nbsp;
                                    </Link>
                                    <div id="event-content" className="gap-[0.75rem] flex flex-col">
                                        <div id="info-and-cover" className="flex-row-reverse gap-[1rem] flex">
                                            <div id="cover-image" className="pointer-events-none">
                                                <div className="w-[200px]">
                                                    <div id="img-aspect-ratio" className="pb-[50%] w-full bg-gray-100 overflow-hidden relative rounded-[0.5rem]">
                                                        {/* đây là hình, đổi div thành img giữ css */}
                                                        <div className="absolute top-0 left-0 w-full h-full object-none align-middle">
                                                            Đây là hình ảnh
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="info" className="gap-[0.5rem] min-w-[0] flex-[1_1] flex flex-col">
                                                <div id="event-time" className="gap-[.5rem] flex items-center">
                                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap bg-gray-100">
                                                        <span>12:00PM</span>
                                                    </div>
                                                </div>
                                                <div className="text-[1.25rem]">
                                                    <h3 className="inline text-[1.25rem] font-[500] break-words leading-[1.2] mt-[0] mb-[1rem]">Họp Hội Đồng Donace</h3>
                                                </div>
                                                <div className="gap-[.25rem] flex flex-col">
                                                    <div id="attribute" className="text-[1rem] bg-gray-100 gap-[.5rem] flex items-start">
                                                        <div id="icon" className="h-custom-icon text-[1rem] flex items-center">
                                                            <div id="heads" className="flex items-center">
                                                                <div id="head" className="relative flex items-start">
                                                                    <div id="avatar-wrapper-small">
                                                                        <div id="avatar" className="w-[1rem] h-[1rem] rounded-[1000px] bg-center bg-cover relative">
                                                                            <Avatar>
                                                                                <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" className="rounded-[1000px]"></AvatarImage>
                                                                            </Avatar>
                                                                            <div id="online-indicator-wrapper" className="w-[25%] h-[25%] min-w-[6px] min-h-[6px] rounded-[100%] absolute right-[0] bottom-[0] overflow-hidden">
                                                                                <div id="online-indicator" className="m-[var(--border)] w-[calc(100%-2*var(--border))] h-[calc(100%-2*var(--border))] rounded-[100%]"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="lux-menu-trigger-wrapper" className="absolute inline-flex min-w-[0]"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-[1rem] min-w-[0]">
                                                            <div className="whitespace-nowrap overflow-hidden text-ellipsis ">
                                                                By Donace
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="attribute" className="text-[1rem] bg-gray-100 gap-[.5rem] flex items-start">
                                                        <div id="icon" className="h-custom-icon text-[1rem] flex items-center">
                                                            <MapPin className="w-[1rem] h-[1rem] block align-middle" />
                                                        </div>
                                                        <div className="text-[1rem] min-w-[0]">
                                                            Tại một nơi anh mất em
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="event-bottom-bar" className="flex justify-between items-center">
                                            <div className="gap-[.5rem] flex items-center">
                                                <div id="status-or-price" className="flex">
                                                    <div id="pill" className="p-[0.25rem_0.4375rem] text-[0.75rem] text-white bg-[#07a460] rounded-[0.25rem] whitespace-nowrap inline-flex items-center leading-[1] border-none font-[500]">
                                                        {/* <div>&nbsp;</div> */}
                                                        <div>Going</div>
                                                    </div>
                                                </div>
                                                <div id="heads" className="flex items-center">
                                                    <div id="head" className="relative flex items-start">
                                                        <div id="avatar-wrapper-small">
                                                            <div id="avatar" className="w-[1.125rem] h-[1.125rem] rounded-[1000px] bg-center relative">
                                                                <Avatar>
                                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" className="rounded-[1000px]"></AvatarImage>
                                                                </Avatar>
                                                                <div id="online-indicator-wrapper" className="w-[25%] h-[25%] min-w-[6px] min-h-[6px] rounded-[100%] absolute right-[0] bottom-[0] overflow-hidden">
                                                                    <div id="online-indicator" className="m-[var(--border)] w-[calc(100%-2*var(--border))] h-[calc(100%-2*var(--border))] rounded-[100%]"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="lux-menu-trigger-wrapper" className="{`right-${customRight}`} absolute inline-flex min-w-[0]"></div>
                                                    </div>
                                                    <div id="head" className="relative flex items-start">
                                                        <div id="avatar-wrapper-small">
                                                            <div id="avatar" className="w-[1.125rem] h-[1.125rem] rounded-[1000px] bg-center relative">
                                                                <Avatar>
                                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" className="rounded-[1000px]"></AvatarImage>
                                                                </Avatar>
                                                                <div id="online-indicator-wrapper" className="w-[25%] h-[25%] min-w-[6px] min-h-[6px] rounded-[100%] absolute right-[0] bottom-[0] overflow-hidden">
                                                                    <div id="online-indicator" className="m-[var(--border)] w-[calc(100%-2*var(--border))] h-[calc(100%-2*var(--border))] rounded-[100%]"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="lux-menu-trigger-wrapper" className="{`right-${customRight}`} absolute inline-flex min-w-[0]"></div>
                                                    </div>
                                                    <div id="head" className="relative flex items-start">
                                                        <div id="avatar-wrapper-small">
                                                            <div id="avatar" className="w-[1.125rem] h-[1.125rem] rounded-[1000px] bg-center relative">
                                                                <Avatar>
                                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" className="rounded-[1000px]"></AvatarImage>
                                                                </Avatar>
                                                                <div id="online-indicator-wrapper" className="w-[25%] h-[25%] min-w-[6px] min-h-[6px] rounded-[100%] absolute right-[0] bottom-[0] overflow-hidden">
                                                                    <div id="online-indicator" className="m-[var(--border)] w-[calc(100%-2*var(--border))] h-[calc(100%-2*var(--border))] rounded-[100%]"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="lux-menu-trigger-wrapper" className="{`right-${customRight}`} absolute inline-flex min-w-[0]"></div>
                                                    </div>
                                                    <div id="head" className="relative flex items-start">
                                                        <div id="avatar-wrapper-small">
                                                            <div id="avatar" className="w-[1.125rem] h-[1.125rem] rounded-[1000px] bg-center relative">
                                                                <Avatar>
                                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" className="rounded-[1000px]"></AvatarImage>
                                                                </Avatar>
                                                                <div id="online-indicator-wrapper" className="w-[25%] h-[25%] min-w-[6px] min-h-[6px] rounded-[100%] absolute right-[0] bottom-[0] overflow-hidden">
                                                                    <div id="online-indicator" className="m-[var(--border)] w-[calc(100%-2*var(--border))] h-[calc(100%-2*var(--border))] rounded-[100%]"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="lux-menu-trigger-wrapper" className="{`right-${customRight}`} absolute inline-flex min-w-[0]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="load-more-observer"></div>
                                <div className="min-h-[1px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}