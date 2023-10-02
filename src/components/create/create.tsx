"use client";

import { ArrowDown, CalendarIcon, ImageIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import Image from "next/image"
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function CreateEvents() {
    const [date, setDate] = React.useState<Date>()

    return (
        <div id="page-content" className="box-border pt-16">
            <form action="#" className="block mt-0">
                <div id="tint-root">
                    {/* lớp meta nằm ở đây */}
                    <div id="event-theme">
                        <div id="background full-page" className="top-0 left-0 fixed z-0 pointer-events-none w-full h-full"></div>
                        <div id="page-container" className="min-h-[auto] relative bg-transparent">
                            <div id="zm-container" className="p-[1.5rem_1rem] max-w-[820px] m-[0_auto]">
                                <div id="outer-wrapper" className="m-[0px_-1.25rem] py-4 px-[1.25rem] p-[1rem_1.25rem]">
                                    <div id="content-card" className="p-[1rem_1.25rem] relative rounded-[0.75rem] bg-gray-200 border border-solid border-gray-200 backdrop-filter-none shadow-none overflow-hidden">
                                        <div id="content-container" className="grid grid-cols-[1fr_1fr] gap-[2.5rem]">
                                            <div id="left" className="min-w-0">
                                                <div>
                                                    <div id="lux-menu-trigger" className="m-[-0.375rem_-0.625rem] p-[0.375rem_0.625rem] cursor-pointer rounded-[0.5rem] gap-[0.75rem] w-[240px] inline-flex min-w-0 leading-[1.3] items-center">
                                                        <div id="avatar-wrapper small">
                                                            <Avatar className="w-[1.5rem] h-[1.5rem] rounded-[1000px]">
                                                                <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                                            </Avatar>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-[0.75rem] text-gray-500">Create under</div>
                                                            <div className="font-[500] text-[0.875rem]">Personal Calendar</div>
                                                        </div>
                                                        <div id="chervon" className="text-gray-500">
                                                            <ArrowDown className="block w-4 h-4 align-middle" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="one-column-only" className="hidden m-[0.75rem_0px]">
                                                    <div>
                                                        <div>
                                                            <div role="button" className="bg-gray-200 rounded-[0.5rem] overflow-hidden outline-offset-2 outline-transparent outline-dashed outline-2 relative cursor-pointer">
                                                                <Input type="file" accept="image/*,.jpg,.jpeg,.png,.gif,.webp" tabIndex={-1} className="hidden text-inherit m-0 font-sans"></Input>
                                                                <div id="animated">
                                                                    <div id="img-aspect-ratio" className="pb-[50%] w-full bg-gray-200 overflow-hidden relative rounded-[0.5rem]">
                                                                        {/* đây là hình ảnh, có hình là xài sau */}
                                                                        <Image src="" alt="" className="absolute top-0 left-0 w-full h-full object-cover align-middle"></Image>
                                                                    </div>
                                                                </div>
                                                                <div id="button-icon" className="absolute bottom-[-2px] right-[-2px] w-[calc(2rem+2px)] h-[calc(2rem+2px)] text-[rgb(19,21,23)] border-2 border-solid border-[rgb(19,21,23)] rounded-[0.5rem] justify-center flex items-center">
                                                                    <ImageIcon className="block w-4 h-4 align-middle" />
                                                                </div>
                                                                <div id="hidden animated" className="block opacity-0 pointer-events-none">
                                                                    <div id="remove-button" className="absolute top-[0.375rem] right-[0.375rem] opacity-[0.7] justify-center flex items-center">
                                                                        {/* CSS sau */}
                                                                        <Button>

                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="name-input-wrapper" className="h-[42px] m-[1.5rem_0px] flex">
                                                    <Textarea className="h-[42px!important] leading-[1.3] overflow-hidden border-none bg-transparent p-0 text-[2rem] font-medium w-full resize-none m-0 shadow-none" spellCheck="false" autoCapitalize="words" placeholder="Event Name"></Textarea>
                                                </div>
                                                <div className="">
                                                    <div id="attribute-row" className="w-full gap-[0.75rem] mb-4 flex items-start">
                                                        <div id="icon-container" className="w-[2.5rem] h-[2.5rem] border-[1px] border-solid border-gray-200 text-gray-500 rounded-[0.5rem] flex-shrink-0 mt-[0.5rem] overflow-hidden justify-center flex items-center">
                                                            <div id="full-width" className="text-center w-full">
                                                                <div id="month" className="bg-gray-200 text-[0.5rem] font-semibold uppercase p-[2px]">Sep</div>
                                                                <div id="day" className="transform translate-y-[1px] font-medium">29</div>
                                                            </div>
                                                        </div>
                                                        <div id="time-picker" className="bg-gray-300 rounded-[0.5rem] overflow-hidden flex-1">
                                                            <div id="start-row" className="p-[0.25rem_0.25rem_0.25rem_0.75rem] flex justify-between items-baseline">
                                                                <div id="label" className="w-12">Start</div>
                                                                <div className="">
                                                                    <div id="datetime-timezone" className="w-auto max-w-full">
                                                                        <div id="datetime-input" className="max-w-[13.5rem] flex items-stretch">
                                                                            <div id="date-input">
                                                                                <div id="wrapper" className="flex-1 relative flex items-center">
                                                                                    <Popover>
                                                                                        <PopoverTrigger asChild>
                                                                                            <Button
                                                                                                variant={"ghost"}
                                                                                                className={cn(
                                                                                                    "w-auto justify-between text-white font-medium bg-gray-400",
                                                                                                    !date && "text-white"
                                                                                                )}
                                                                                            >
                                                                                                {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                                                                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                                                            </Button>
                                                                                        </PopoverTrigger>
                                                                                        <PopoverContent className="w-auto p-0 m-2 rounded-md">
                                                                                            <Calendar
                                                                                                mode="single"
                                                                                                selected={date}
                                                                                                onSelect={setDate}
                                                                                                initialFocus
                                                                                            />
                                                                                        </PopoverContent>
                                                                                    </Popover>
                                                                                    {/* <div className="px-[calc(0.875rem-1px)] h-[calc(calc(2.25rem+2*1px)-2px)] min-w-0 flex bg-transparent text-base outline-none w-full border-0 border-solid border-transparent rounded-[0.25rem] text-left appearance-none items-center">Fri, Sep 29</div>
                                                                                    <input type="date" value={"2023-09-29"}></input> */}
                                                                                </div>
                                                                            </div>
                                                                            <div id="divider" className="w-[1px] bg-transparent"></div>
                                                                            <div id="time" className="border-l-0 rounded-[0_var(0.25rem)_var(0.25rem)_0] border-[1px] border-solid border-transparent bg-gray-200 flex items-center">
                                                                                <div id="lux-menu-trigger" className="flex cursor-pointer min-w-0">
                                                                                
                                                                                </div>                                 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}