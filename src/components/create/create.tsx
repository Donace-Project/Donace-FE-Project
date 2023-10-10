"use client";

import { ArrowDown, ArrowUpToLine, CalendarIcon, CaseUpper, CheckCircle2, ChevronsUpDown, Circle, Copy, Divide, FileImage, Globe, GlobeIcon, ImageIcon, Info, Map, MapPin, Pen, PlusCircle, PlusIcon, Sparkles, Ticket, UserCheck2, Video, Wallet } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import Image from "next/image"
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea"
import React from "react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch"
import Link from "next/link";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function CreateEvents() {
    const [date1, setDate1] = React.useState<Date>()
    const [date2, setDate2] = React.useState<Date>()
    const [date3, setDate3] = React.useState<Date>()


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
                                                    <Popover>
                                                        <PopoverTrigger asChild>
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
                                                        </PopoverTrigger>
                                                        <PopoverContent className="absolute left-[-120px] max-h-[697px] rounded-[0.5rem] backdrop-blur-lg">
                                                            <div id="lux-menu overflow">
                                                                <div id="menu-content" className="max-w-[280px] p-1">
                                                                    <div id="header" className="p-[0.25rem_0.5625rem] text-[0.75rem] text-gray-500">Choose the calendar of the event:</div>
                                                                    <div id="calendar-selector-row" className="cursor-pointer p-[0.375rem_0.5625rem] gap-[0.75rem] rounded-[0.25rem] transition-all duration-300 ease-in-out flex items-center">
                                                                        <div id="avatar-wrapper small">
                                                                            <div id="avatar" className="w-5 h-5 rounded-[1000px] bg-center bg-cover relative">
                                                                                <Avatar className="w-[1.5rem] h-[1.5rem] rounded-[1000px]">
                                                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                                                                </Avatar>
                                                                            </div>
                                                                        </div>
                                                                        <div className="gap-[.25rem] min-w-0 flex-1 flex items-center">
                                                                            <div id="text" className="overflow-hidden text-ellipsis whitespace-nowrap pt-1">Personal Calendar</div>
                                                                        </div>
                                                                        <div id="check" className="transition-all duration-300 ease-in-out">
                                                                            <CheckCircle2 className="block w-4 h-4 align-middle" />
                                                                        </div>
                                                                    </div>
                                                                    <div id="calendar-selector-row" className="cursor-pointer p-[0.375rem_0.5625rem] gap-[0.75rem] rounded-[0.25rem] transition-all duration-300 ease-in-out flex items-center">
                                                                        <div id="icon" className="p-[0px_0.125rem] flex-shrink-0 pt-1">
                                                                            <PlusIcon className="block w-4 h-4 align-middle"/>
                                                                        </div>
                                                                        <div className="gap-[.25rem] min-w-0 flex-1 flex items-center">
                                                                            <div id="text" className="overflow-hidden text-ellipsis whitespace-nowrap pt-1">Create Calendar</div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="calendar-selector-row" className="p-[0.375rem_0.25rem] gap-[0.75rem] rounded-[0.25rem] text-gray-500 flex items-center">
                                                                        <div id="icon" className="p-[0px_0.125rem] flex-shrink-0 pt-1">
                                                                            <Info className="block w-4 h-4 align-middle" />
                                                                        </div>
                                                                        <div className="text-[0.75rem]">Creating the event under a calendar grants its admins manage access.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </PopoverContent>
                                                    </Popover>
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
                                                    <Textarea className="h-[42px!important] leading-[1.3] overflow-hidden border-none bg-transparent p-0 text-[2rem] font-medium w-full resize-none m-0 shadow-none" spellCheck="false" autoCapitalize="words" placeholder="Event Name" />
                                                </div>
                                                <div className="">
                                                    <div id="attribute-row" className="w-full gap-[0.75rem] mb-4 flex items-start">
                                                        <div id="icon-container" className="w-[2.5rem] h-[2.5rem] border border-solid border-gray-400 text-gray-500 rounded-[0.5rem] flex-shrink-0 mt-[0.5rem] overflow-hidden justify-center flex items-center">
                                                            <div id="full-width" className="text-center w-full">
                                                                <div id="month" className="bg-gray-300 text-[0.5rem] font-semibold uppercase p-[2px]">Sep</div>
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
                                                                                                    !date1 && "text-white"
                                                                                                )}
                                                                                            >
                                                                                                {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                                                                                                {date1 ? format(date1, "PPP") : <span>Pick a date</span>}
                                                                                            </Button>
                                                                                        </PopoverTrigger>
                                                                                        <PopoverContent className="w-auto p-0 m-2 rounded-md">
                                                                                            <Calendar
                                                                                                mode="single"
                                                                                                selected={date1}
                                                                                                onSelect={setDate1}
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
                                                            <div id="end-row" className="p-[0px_0.25rem_0.25rem_0.75rem] flex justify-between items-baseline">
                                                                <div id="label" className="w-12">End</div>
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
                                                                                                    !date2 && "text-white"
                                                                                                )}
                                                                                            >
                                                                                                {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                                                                                                {date2 ? format(date2, "PPP") : <span>Pick a date</span>}
                                                                                            </Button>
                                                                                        </PopoverTrigger>
                                                                                        <PopoverContent className="w-auto p-0 m-2 rounded-md">
                                                                                            <Calendar
                                                                                                mode="single"
                                                                                                selected={date2}
                                                                                                onSelect={setDate2}
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
                                                            <div id="tz-input" className="p-[0.25rem_0.75rem] transition-all duration-300 ease-in-out hover:bg-secondary/80">
                                                                <div id="lux-menu-trigger-wrapper" className="cursor-pointer inline-flex min-w-0 w-full">
                                                                    <div className="text-[0.8125rem] gap-[.25rem] flex items-center">
                                                                        <div id="icon" className="mr-[.25rem!important] flex items-center">
                                                                            <Globe className="w-[0.75rem] h-[0.75rem] block align-middle" />
                                                                        </div>
                                                                        <div id="mono-number">GMT+7:00</div>
                                                                        <div id="nowrap" className="whitespace-nowrap overflow-hidden text-ellipsis">Saigon</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Dialog>
                                                                <DialogTrigger asChild>
                                                                    <Button variant="secondary" type="button" className="justify-start text-black rounded-t-none border-t border-solid border-[rgba(255,255,255,0.08)] p-[0.375rem_0.75rem] w-full cursor-pointer transition-all duration-300 ease-in-out text-[0.8125rem] gap-[.5rem] flex items-center m-0 bg-transparent border leading-[1.5]">
                                                                        <div id="icon">
                                                                            <Copy className="w-3 h-3 block align-middle" />
                                                                        </div>
                                                                        <div>Create Multi-Session Event</div>
                                                                    </Button>
                                                                </DialogTrigger>
                                                                <DialogContent className="max-w-[400px] p-[1rem_1.25rem] overflow-hidden flex flex-col rounded-2xl bg-gray-200">
                                                                    <div>
                                                                        <DialogHeader className="text-[1.125rem] leading-[1.2] font-semibold mt-0 mb-4">
                                                                            <DialogTitle>
                                                                                Create Multi-Session Event
                                                                            </DialogTitle>
                                                                        </DialogHeader>
                                                                    </div>
                                                                    <div className="pb-[1rem!important]">
                                                                        <Label className="text-[0.875rem] block mb-[.375rem] font-medium text-gray-500 transition-all duration-300 ease-in-out">
                                                                            <div>Duration</div>
                                                                        </Label>
                                                                        <div id="duration-input" className="flex max-w-[350px]">
                                                                            <div id="lux-input-wrapper" className="mr-[.5rem!important]">
                                                                                <div id="inner-wrapper" className="inline-block w-full">
                                                                                    <div className="flex items-baseline">
                                                                                        <div className="flex-1 flex items-center">
                                                                                            <div id="zero-with-filler">&nbsp;</div>
                                                                                            <div id="input-inner-wrapper" className="relative flex-1">
                                                                                                <Input placeholder="0" type="number" inputMode="numeric" className="min-w-[5rem] text-right text-base h-[calc(2.25rem+2*1px)] p-[0.625rem_0.875rem] rounded-r-[0!important] m-0 border border-solid border-[#333537]" />
                                                                                                <div id="indicator invisible" className="pointer-events-none opacity-0 absolute right-[.75rem] bottom-[50%]"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div id="accessory-text" className="text-[1rem] h-[calc(2.25rem+2*1px)] p-[0.625rem_0.875rem] border-l-0 rounded-l-[0!important] leading-[1] text-gray-500 bg-gray-300 border border-solid border-[#333537] rounded-[0.5rem] flex items-center">hour</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="helper-text" className="text-[#939597] max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out text-[0.875rem]"></div>
                                                                            </div>
                                                                            <div id="lux-input-wrapper" className="mr-[.5rem!important]">
                                                                                <div id="inner-wrapper" className="inline-block w-full">
                                                                                    <div className="flex items-baseline">
                                                                                        <div className="flex-1 flex items-center">
                                                                                            <div id="zero-with-filler">&nbsp;</div>
                                                                                            <div id="input-inner-wrapper" className="relative flex-1">
                                                                                                <Input placeholder="0" type="number" inputMode="numeric" className="min-w-[5rem] text-right text-base h-[calc(2.25rem+2*1px)] p-[0.625rem_0.875rem] rounded-r-[0!important] m-0 border border-solid border-[#333537]" />
                                                                                                <div id="indicator invisible" className="pointer-events-none opacity-0 absolute right-[.75rem] bottom-[50%]"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div id="accessory-text" className="text-[1rem] h-[calc(2.25rem+2*1px)] p-[0.625rem_0.875rem] border-l-0 rounded-l-[0!important] leading-[1] text-gray-500 bg-gray-300 border border-solid border-[#333537] rounded-[0.5rem] flex items-center">miniute</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="helper-text" className="text-[#939597] max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out text-[0.875rem]"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="" className="pt-6">
                                                                            <Label className="text-[0.875rem] block mb-[.375rem] font-medium text-gray-500 transition-all duration-300 ease-in-out">
                                                                                <div>Session</div>
                                                                            </Label>
                                                                            <div className="gap-[.5rem] flex flex-col">
                                                                                <div id="animated session-input" className="transition-all duration-300 ease-in-out flex items-center">
                                                                                    <div className="min-w-0">
                                                                                        <div id="datetime-timzezone" className="w-[300px] max-w-full">
                                                                                            <div id="datetime-input" className="flex transition-all duration-300 ease-in-out">
                                                                                                <Popover>
                                                                                                    <PopoverTrigger className="w-full">
                                                                                                        <Button
                                                                                                            variant={"ghost"}
                                                                                                            className={cn(
                                                                                                                "w-full items-center justify-center text-white font-medium bg-gray-400",
                                                                                                                !date3 && "text-white"
                                                                                                            )}
                                                                                                        >
                                                                                                            {date3 ? format(date3, "PPP") : <span>Pick a date</span>}
                                                                                                        </Button>
                                                                                                    </PopoverTrigger>
                                                                                                    <PopoverContent className="w-auto p-0 m-2 rounded-md">
                                                                                                        <Calendar
                                                                                                            mode="single"
                                                                                                            selected={date3}
                                                                                                            onSelect={setDate3}
                                                                                                            initialFocus
                                                                                                        />
                                                                                                    </PopoverContent>
                                                                                                </Popover>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </DialogContent>
                                                            </Dialog>
                                                        </div>
                                                    </div>

                                                    <div id="attribute-row" className="w-full gap-[0.75rem] mb-4 flex items-start">
                                                        <div id="icon" className="w-10 h-10 border border-solid border-gray-400 rounded-[0.5rem] flex-shrink-0 mt-2 overflow-hidden justify-center flex items-center">
                                                            <MapPin className="w-5 h-5 block align-middle" />
                                                        </div>
                                                        <Popover>
                                                            <PopoverTrigger asChild className="w-full">
                                                                <div id="location-picker-wrapper" className="min-w-0 flex-1">
                                                                    <div id="lux-menu-trigger" className="cursor-pointer inline-flex min-w-0 w-full">
                                                                        <div id="meta-row" className="relative bg-gray-300 rounded-[0.5rem] min-w-0 transition-all duration-300 ease-in-out w-full">
                                                                            <div id="inner" className="min-h-[3.5625rem] p-[0.375rem_0.75rem] rounded-[0.5rem] hover:bg-secondary/80">
                                                                                <div id="">
                                                                                    <div id="">
                                                                                        <div id="" className="min-w-0">
                                                                                            <div id="title" className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">Add Event Location</div>
                                                                                            <div id="subtitle" className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.875rem]">Offline location or virtual link</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="bg-gray-300 relative rounded-[0.5rem] shadow-none overflow-auto">
                                                                <div id="container" className="w-full p-1">
                                                                    <div id="input-container" className="bg-zinc-300 m-[-1.25rem_-1.25rem_0.25rem] p-[0.75rem_1rem_0.375rem] border-b border-solid border-gray-500">
                                                                        <textarea className="shadow-none outline-none h-[21px!important] leading-[1.3] overflow-hidden border-none bg-transparent p-0 text-[1rem] font-normal w-full resize-none m-0" spellCheck autoCapitalize="sentences" placeholder="Enter Location or virtual link" />
                                                                    </div>
                                                                    <div id="label top" className="pt-[0.375rem] p-[0.5rem_0.75rem_0.125rem] text-[0.8125rem]">Recent Locations</div>
                                                                    <div id="">
                                                                        <div id="location-row" className="bg-gray-200 cursor-pointer rounded-[0.25rem] p-[0.3125rem_0.75rem]">
                                                                            <div className="overflow-hidden text-ellipsis gap-[.5rem] flex items-center">
                                                                                <div id="icon" className="w-4 flex-shrink-0 text-gray-500 mr-[0.125rem] overflow-hidden text-ellipsis">
                                                                                    <MapPin className="block w-4 h-4 align-middle" />
                                                                                </div>
                                                                                <div className="overflow-hidden text-ellipsis">
                                                                                    <div id="title" className="text-[0.875rem] overflow-hidden text-ellipsis">Ho Chi Minh City</div>
                                                                                    <div id="text-secondary" className="overflow-hidden text-ellipsis text-[0.8125rem]">Vietnam</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="label" className="p-[0.5rem_0.75rem_0.125rem] text-[0.8125rem]">Virtual Options</div>
                                                                    <div id="location-row clickable" className="cursor-pointer rounded-[0.25rem] p-[0.3125rem_0.75rem]">
                                                                        <div className="text-[0.875rem] gap-[.5rem] flex items-center">
                                                                            <Video className="w-[0.875rem] h-[0.875rem] block align-middle" />
                                                                            <div>Create Zoom meeting</div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="location-row clickable" className="cursor-pointer rounded-[0.25rem] p-[0.3125rem_0.75rem]">
                                                                        <div className="text-[0.875rem] gap-[.5rem] flex items-center">
                                                                            <Video className="w-[0.875rem] h-[0.875rem] block align-middle" />
                                                                            <div>Select existing Zoom</div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="location-row" className="p-[0.3125rem_0.5rem]">
                                                                        <div className="text-[0.8125rem] text-gray-500 gap-[.5rem] flex items-center">
                                                                            <div id="icon" className="flex-shrink-0">
                                                                                <Info className="h-[0.875rem] w-[0.875rem] block align-middle" />
                                                                            </div>
                                                                            <div>If you have a virtual event link, you can enter or paste it above.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </PopoverContent>
                                                        </Popover>
                                                    </div>
                                                </div>
                                                <div id="advanced-options" className="mt-[1.5rem!important]">
                                                    <Label id="lux-input-label" className="text-[0.875rem] block mb-[.375rem] font-medium text-gray-500 transition-all duration-300 ease-in-out">
                                                        <div>Event Options</div>
                                                    </Label>
                                                    <div id="options-card" className="mt-2 rounded-[0.5rem] overflow-hidden">
                                                        <div id="option-button" className="w-full p-[0.5rem_0.75rem] transition-all duration-300 ease-in-out relative overflow-hidden bg-gray-300">
                                                            <div id="divider"></div>
                                                            <div id="" className="gap-[.5rem] flex items-center">
                                                                <div id="icon" className="mr-1">
                                                                    <Ticket className="block w-4 h-4 align-middle" />
                                                                </div>
                                                                <div id="label" className="select-none flex-1">Tickets</div>
                                                                <div className="gap-[.25rem] flex items-center">
                                                                    <div id="value" className="font-medium">Free</div>
                                                                    <Dialog>
                                                                        <HoverCard>
                                                                            <HoverCardTrigger asChild>
                                                                                <DialogTrigger asChild>
                                                                                    <Button variant="nothing" className="mr-[-0.25rem] text-black p-[0.3125rem] h-auto border-[transparent!important] border border-solid bg-transparent gap-[0.375rem] flex-shrink-0 cursor-pointer transition-[all_0.3s_cubic-bezier(0.4,0,0.2,1)] font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-2 outline outline-transparent max-w-full text-[0.875rem] w-fit hover:bg-gray-400 hover:text-white">
                                                                                        <Pen className="stroke-[2.5] w-[0.875rem] h-[0.875rem] flex-shrink block align-middle" />
                                                                                    </Button>
                                                                                </DialogTrigger>
                                                                            </HoverCardTrigger>
                                                                            <HoverCardContent className="flex justify-center items-center w-12 h-12">
                                                                                <div className="font-medium">
                                                                                    Edit
                                                                                </div>
                                                                            </HoverCardContent>
                                                                        </HoverCard>
                                                                        <DialogContent className="w-full p-[1rem_1.25rem] overflow-auto">
                                                                            <div id="alert-wrapper" className="p-1">
                                                                                <DialogHeader className="pt-1">
                                                                                    <div id="lux-alert-top" className="pt-1">
                                                                                        <div id="icon-wrapper" className="m-[0.25rem_0px_0.75rem] w-14 h-14 rounded-[1000px] bg-gray-300 justify-center flex items-center">
                                                                                            <Wallet className="w-8 h-8 block align-middle" />
                                                                                        </div>
                                                                                        <div id="title" className="font-semibold text-[1.25rem] mb-2">Accept Payments</div>
                                                                                        <DialogDescription>
                                                                                            <div id="desc" className="text-gray-400">
                                                                                                <div>
                                                                                                    <p className="mt-4">Your account
                                                                                                        is not yet set up to accept payments.
                                                                                                    </p>
                                                                                                    <p className="pt-4">We use
                                                                                                        <Link href={""} target="_blank" className="text-red-500 font-bold"> VN</Link>
                                                                                                        <Link href={""} target="_blank" className="text-blue-500 font-bold">Pay </Link>
                                                                                                        as our payment processor. Connect or set up a
                                                                                                        <span className="text-red-500 font-bold"> VN</span>
                                                                                                        <span className="text-blue-500 font-bold">Pay </span>
                                                                                                        account to start accepting payments. It usually takes less than 5 minutes.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </DialogDescription>
                                                                                    </div>
                                                                                </DialogHeader>
                                                                                <DialogTitle className="pt-2 items-center">
                                                                                    <div className="mt-4 flex items-center">
                                                                                        <Button variant="nothing" type="button" className="flex-1 text-[rgb(19,21,23)] bg-gray-200 border-gray-200 border border-solid w-full cursor-pointer transition-[all_0.3s_cubic-bezier(0.4,0,0.2,1)] font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-2 outline outline-transparent max-w-full p-[0.625rem_0.875rem] h-[calc(2.25rem+2*1px)] flex items-center m-0 leading-[1.5]">
                                                                                            <div id="label" className="">Connect <span className="text-red-500 font-bold">VN</span><span className="text-blue-500 font-bold">Pay</span></div>
                                                                                        </Button>
                                                                                    </div>
                                                                                </DialogTitle>
                                                                            </div>
                                                                        </DialogContent>
                                                                    </Dialog>
                                                                </div>
                                                            </div>
                                                            <div id="lux-collapse" className="overflow-hidden h-0 hidden">
                                                                <div id="footnote" className="ml-7 text-[0.8125rem]"></div>
                                                            </div>
                                                        </div>
                                                        <div id="option-button" className="w-full p-[0.5rem_0.75rem] transition-all duration-300 ease-in-out relative overflow-hidden bg-gray-300">
                                                            <div id="divider" className="absolute top-0 left-10 right-0 border-b border-solid border-gray-400 z-10"></div>
                                                            <div id="" className="gap-[.5rem] flex items-center">
                                                                <div id="icon" className="mr-1 transition-all duration-300 ease-in-out">
                                                                    <UserCheck2 className="block w-4 h-4 align-middle" />
                                                                </div>
                                                                <Label id="label" className="select-none cursor-pointer transition-all duration-300 ease-in-out flex-1">Require Approval</Label>
                                                                <Switch className="flex-shrink-0 relative inline-block mb-0" />
                                                            </div>
                                                        </div>
                                                        <div id="option-button" className="w-full p-[0.5rem_0.75rem] transition-all duration-300 ease-in-out relative overflow-hidden bg-gray-300">
                                                            <div id="divider" className="absolute top-0 left-10 right-0 border-b border-solid border-gray-400 z-10"></div>
                                                            <div id="" className="gap-[.5rem] flex items-center">
                                                                <div id="icon" className="mr-1">
                                                                    <ArrowUpToLine className="block w-4 h-4 align-middle" />
                                                                </div>
                                                                <div id="label" className="select-none flex-1">Capacity</div>
                                                                <div className="gap-[.25rem] flex items-center">
                                                                    <div id="value" className="font-medium">Unlimited</div>
                                                                    <Dialog>
                                                                        <HoverCard>
                                                                            <HoverCardTrigger asChild>
                                                                                <DialogTrigger asChild>
                                                                                    <Button variant="nothing" className="mr-[-0.25rem] text-black p-[0.3125rem] h-auto border-[transparent!important] border border-solid bg-transparent gap-[0.375rem] flex-shrink-0 cursor-pointer transition-[all_0.3s_cubic-bezier(0.4,0,0.2,1)] font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-2 outline outline-transparent max-w-full text-[0.875rem] w-fit hover:bg-gray-400 hover:text-white">
                                                                                        <Pen className="stroke-[2.5] w-[0.875rem] h-[0.875rem] flex-shrink block align-middle" />
                                                                                    </Button>
                                                                                </DialogTrigger>
                                                                            </HoverCardTrigger>
                                                                            <HoverCardContent className="flex justify-center items-center w-12 h-12">
                                                                                <div className="font-medium">
                                                                                    Edit
                                                                                </div>
                                                                            </HoverCardContent>
                                                                        </HoverCard>
                                                                        <DialogContent className="w-full p-[1rem_1.25rem] overflow-auto">
                                                                            <div id="alert-wrapper" className="p-1">
                                                                                <DialogHeader className="pt-1">
                                                                                    <div id="lux-alert-top" className="pt-1">
                                                                                        <div id="icon-wrapper" className="m-[0.25rem_0px_0.75rem] w-14 h-14 rounded-[1000px] bg-gray-300 justify-center flex items-center">
                                                                                            <ArrowUpToLine className="w-8 h-8 block align-middle" />
                                                                                        </div>
                                                                                        <div id="title" className="font-semibold text-[1.25rem] mb-2">Max Capacity</div>
                                                                                        <DialogDescription>
                                                                                            <div id="desc" className="text-gray-400">
                                                                                                Auto-close registration when the capacity is reached. Only approved guests count toward the cap.
                                                                                            </div>
                                                                                        </DialogDescription>
                                                                                    </div>
                                                                                </DialogHeader>
                                                                                <DialogTitle>
                                                                                    <form action={"#"} className="gap-4 pt-[.25rem!important] mt-[.5rem!important] flex flex-col">
                                                                                        <div id="lux-input-wrapper">
                                                                                            <div id="inner-wrapper" className="inline-block w-full">
                                                                                                <Label id="lux-input-label" className="text-[0.875rem] block mb-[.375rem] font-medium text-gray-500 transition-all duration-300 ease-in-out">
                                                                                                    <div>Capacity</div>
                                                                                                </Label>
                                                                                                <div id="input-wrapper" className="flex items-baseline">
                                                                                                    <div className="flex-1 flex items-center">
                                                                                                        <div id="zero-width-filler">&nbsp;</div>
                                                                                                        <div id="input-inner-wrapper" className="relative flex-1">
                                                                                                            <input name="max_capacity" step={1} min={1} inputMode="numeric" placeholder="0" className="text-[1rem] h-[calc(2.25rem+2*1px)] p-[0.625rem_0.875rem] transition-all duration-300 ease-in-out leading-[1] rounded-[0.5rem] overflow-hidden border border-solid border-[#333537] bg-gray-200 w-full m-0"></input>
                                                                                                            <div id="indicator invisible" className="pointer-events-none opacity-0 absolute right-[.75rem] bottom-[50%] translate-y-1/2 text-[#facc28] transition-opacity duration-[0.3s] ease-in-out w-4 h-4"></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div id="helper-text" className="text-[#939597] max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out text-[0.875rem]"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div id="spread" className="gap-[.5rem] flex justify-between items-center">
                                                                                            <Label className="font-medium text-gray-500 flex-1">Over-Capacity Waitlist</Label>
                                                                                            <Label id="lux-toggle" className="w-[2.375rem] h-[1.5rem] flex-shrink-0 relative inline-block mb-0">
                                                                                                <Switch className="transition-all duration-300 ease-in-out absolute cursor-pointer top-0 left-0 bottom-0 right-0" />
                                                                                            </Label>
                                                                                        </div>
                                                                                        <div id="spread" className="gap-[.5rem] flex justify-between items-center">
                                                                                            <Button variant="nothing" type="submit" className="text-black bg-slate-300 border-white border border-solid w-full cursor-pointer transition-[all_0.3s_cubic-bezier(0.4,0,0.2,1) font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-2 outline outline-transparent max-w-full text-base p-[0.625rem_0.875rem] h-[calc(2.25rem+2*1px)] flex items-center m-0 leading-[1.5]">
                                                                                                <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                                                                                                    Set Limit
                                                                                                </div>
                                                                                            </Button>
                                                                                            <Button variant="nothing" type="button" className="bg-gray-200 border-white border border-solid w-full cursor-pointer transition-[all_0.3s_cubic-bezier(0.4,0,0.2,1) font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-2 outline outline-transparent max-w-full text-base p-[0.625rem_0.875rem] h-[calc(2.25rem+2*1px)] flex items-center m-0 leading-[1.5]">
                                                                                                <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                                                                                                    Remove Limit
                                                                                                </div>
                                                                                            </Button>
                                                                                        </div>
                                                                                    </form>
                                                                                </DialogTitle>
                                                                            </div>
                                                                        </DialogContent>
                                                                    </Dialog>
                                                                </div>
                                                            </div>
                                                            <div id="lux-collapse" className="overflow-hidden h-0 hidden">
                                                                <div id="footnote" className="ml-7 text-[0.8125rem]">Waitlist Enabled</div>
                                                            </div>
                                                        </div>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <div id="option-button" className="w-full p-[0.5rem_0.75rem] transition-all duration-300 ease-in-out relative overflow-hidden bg-gray-300">
                                                                    <div id="divider" className="absolute top-0 left-10 right-0 border-b border-solid border-gray-400 z-10"></div>
                                                                    <div id="lux-menu-trigger" className="cursor-pointer min-w-0 gap-[.5rem] flex-1 items-center">
                                                                        <div id="" className="gap-[.5rem] flex items-center">
                                                                            <div id="icon" className="mr-1">
                                                                                <Globe className="block w-4 h-4 align-middle" />
                                                                            </div>
                                                                            <div id="label" className="select-none flex-1">Visibility</div>
                                                                            <div className="gap-[.25rem] flex items-center">
                                                                                <div id="value" className="font-medium">Public</div>
                                                                                <div id="accessory" className="transition-all duration-300 ease-in-out hover:text-white">
                                                                                    <ChevronsUpDown className="block w-4 h-4 align-middle" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="min-w-[120px] max-w-[260px]">
                                                                <div id="rows" className="p-[.25rem_0.25rem]">
                                                                    <div role="button" className="w-full box-border gap-[0.75rem] max-w-[260px] transition-all duration-300 ease-in-out p-[.375rem_.5rem] rounded-[0.25rem] relative z-[1] flex items-center m-0 bg-transparent border border-solid border-transparent leading-[1.5]">
                                                                        <div id="icon" className="text-gray-500 flex-shrink-0">
                                                                            <GlobeIcon className="block w-4 h-4 align-middle" />
                                                                        </div>
                                                                        <div id="text">
                                                                            <div className="font-medium">Public</div>
                                                                            <div className="text-[0.8125rem] text-gray-500 float-left">Shown on your calendar and eligible to be featured.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div role="button" className="w-full box-border gap-[0.75rem] max-w-[260px] transition-all duration-300 ease-in-out p-[.375rem_.5rem] rounded-[0.25rem] relative z-[1] flex items-center m-0 bg-transparent border border-solid border-transparent leading-[1.5]">
                                                                        <div id="icon" className="text-gray-500 flex-shrink-0">
                                                                            <Sparkles className="block w-4 h-4 align-middle" />
                                                                        </div>
                                                                        <div id="text">
                                                                            <div className="font-medium">Private</div>
                                                                            <div className="text-[0.8125rem] text-gray-500 float-left">Unlisted. Only people with the link can register.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </PopoverContent>
                                                        </Popover>
                                                    </div>
                                                </div>
                                                <div id="one-column-only" className="hidden">
                                                    <div className="pt-[1.5rem!important]">
                                                        <div className="pb-[1rem!important]">
                                                            <Label id="lux-input-label" className="text-[0.875rem] block mb-[.375rem] font-medium transition-all duration-300 ease-in-out">
                                                                <div>Theme</div>
                                                            </Label>
                                                            <div className="gap-[.5rem] flex items-start">
                                                                <Button type="button" className="cursor-pointer m-0 bg-transparent border border-solid border-transparent leading-[1.5] text-inherit">
                                                                    <div>
                                                                        <div className="outline-white p-2 bg-[#212325] rounded-[0.5rem] outline-2 outline relative overflow-hidden transition-all duration-300 ease-in-out">
                                                                            <div id="bg" className="absolute top-0 left-0 w-[200%] h-[200%] scale-50 origin-top-left"></div>
                                                                            <div id="card" className="relative bg-[#212325] p-[0.25rem_0.5rem_0.375rem] rounded-[0.25rem]">
                                                                                <div className="font-semibold text-[0.75rem]">Title</div>
                                                                                <div id="line" className="w-[3.25rem] h-[0.375rem] mt-1 bg-[rgba(255,255,255,0.08)]"></div>
                                                                                <div id="line" className="w-8 h-[0.375rem] mt-1 bg-[rgba(255,255,255,0.08)]"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="" className="text-center text-[0.8125rem] mt-[.25rem!important]">Minimal</div>
                                                                </Button>
                                                                <Button type="button" className="cursor-pointer m-0 bg-transparent border border-solid border-transparent leading-[1.5] text-inherit">
                                                                    <div>
                                                                        <div className="outline-white p-2 bg-[#212325] rounded-[0.5rem] outline-2 outline relative overflow-hidden transition-all duration-300 ease-in-out">
                                                                            <div id="bg" className="absolute top-0 left-0 w-[200%] h-[200%] scale-50 origin-top-left"></div>
                                                                            <div id="card" className="relative bg-[#212325] p-[0.25rem_0.5rem_0.375rem] rounded-[0.25rem]">
                                                                                <div className="font-semibold text-[0.75rem]">Title</div>
                                                                                <div id="line" className="w-[3.25rem] h-[0.375rem] mt-1 bg-[rgba(255,255,255,0.08)]"></div>
                                                                                <div id="line" className="w-8 h-[0.375rem] mt-1 bg-[rgba(255,255,255,0.08)]"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="" className="text-center text-[0.8125rem] mt-[.25rem!important]">Abstract</div>
                                                                </Button>
                                                                <Button type="button" className="cursor-pointer m-0 bg-transparent border border-solid border-transparent leading-[1.5] text-inherit">
                                                                    <div>
                                                                        <div className="outline-white p-2 bg-[#212325] rounded-[0.5rem] outline-2 outline relative overflow-hidden transition-all duration-300 ease-in-out">
                                                                            <div id="bg" className="absolute top-0 left-0 w-[200%] h-[200%] scale-50 origin-top-left"></div>
                                                                            <div id="card" className="relative bg-[#212325] p-[0.25rem_0.5rem_0.375rem] rounded-[0.25rem]">
                                                                                <div className="font-semibold text-[0.75rem]">Title</div>
                                                                                <div id="line" className="w-[3.25rem] h-[0.375rem] mt-1 bg-[rgba(255,255,255,0.08)]"></div>
                                                                                <div id="line" className="w-8 h-[0.375rem] mt-1 bg-[rgba(255,255,255,0.08)]"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="" className="text-center text-[0.8125rem] mt-[.25rem!important]">Quantum</div>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div id="theme-control-card" className="rounded-[0.5rem] overflow-hidden">
                                                            <div id="lux-collapse" className="overflow-hidden h-0 hidden">
                                                                <div id="lux-menu-trigger-wrapper" className="cursor-pointer inline-flex min-w-0 w-full">
                                                                    <div id="option-row" className="w-full p-[0.5rem_0.75rem] flex-1 transition-all duration-300 ease-in-out relative overflow-hidden bg-gray-300"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pt-[.5rem!important] mt-[1.5rem!important]">
                                                    <Button variant="secondary2" type="submit" className="text-black bg-white border-white border border-solid w-full text-[1.125rem] cursor-pointer font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-none max-w-full p-[0.75rem_1.125rem] h-[calc(2.625rem+2*1px)] flex items-center m-0 leading-[1.5]">
                                                        <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Create Event</div>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div id="right" className="min-w-0">
                                                <div>
                                                    <div>
                                                        <div role="button" className="relative aspect-[2] bg-[rgba(255,255,255,0.08)] rounded-[0.5rem] overflow-hidden outline-offset-2 outline-transparent outline-dashed outline-2">
                                                            <Input type="file" accept="image/*,.jpg,.jpeg,.png,.gif,.webp" tabIndex={-1} className="hidden m-0"></Input>
                                                            <div id="animated-image" className="transition-all duration-300 ease-in-out">
                                                                <div id="img-aspect-ratio" className="pb-[50%] w-full bg-gray-300 overflow-hidden relative rounded-[0.5rem]">
                                                                    {/* ĐÂY LÀ HÌNH ẢNH ĐƯỢC MỜI */}
                                                                    <Image src={""} alt={""} loading="eager" className="absolute top-0 left-0 w-full h-full object-cover align-middle"></Image>
                                                                </div>
                                                            </div>
                                                            <div id="button-icon" className="absolute bottom-[-2px] right-[-2px] w-[calc(2rem+2px)] h-[calc(2rem+2px)] text-[rgb(19,21,23)] bg-white border-2 border-solid border-[rgb(19,21,23)] rounded-[0.5rem] transition-all duration-300 ease-in-out justify-center flex items-center hover:bg-red-400">
                                                                <FileImage className="block w-4 h-4 align-middle" />
                                                            </div>
                                                            <div id="hidden-animated" className="block opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                                                                <div id="remove-button" className="absolute top-[0.375rem] right-[0.375rem] opacity-[0.7] transition-all duration-300 ease-in-out justify-center flex items-center">
                                                                    <Button id="remove-image">
                                                                        {/* NHỚ LÀM CSS */}
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="ở-dưới" className="pt-[1rem!important]">
                                                    <div className="pb-[1rem!important]">
                                                        <Label id="lux-input-label" className="text-[0.875rem] block mb-5 font-medium transition-all duration-300 ease-in-out">
                                                            <div>Theme</div>
                                                        </Label>
                                                        <div className="gap-[.5rem] flex items-start">
                                                            <div>
                                                                <Link href={"/"}>
                                                                    <Button variant="nothing" type="button" className="cursor-pointer m-0 bg-transparent border border-solid border-transparent leading-[1.5]">
                                                                        <div id="">
                                                                            <div id="theme-preview" className="outline-white p-2 bg-[#212325] rounded-[0.5rem] outline-2 outline relative overflow-hidden transition-all duration-300 ease-in-out">
                                                                                <div id="bg" className="absolute top-0 left-0 w-[200%] h-[200%] scale-50 origin-top-left"></div>
                                                                                <div id="card" className="relative bg-[#212325] p-[0.25rem_0.5rem_0.375rem] rounded-[0.25rem]">
                                                                                    <div className="font-semibold text-[0.75rem] text-white">Title</div>
                                                                                    <div id="line" className="w-[3.25rem] h-[0.375rem] mt-1 bg-gray-400"></div>
                                                                                    <div id="line" className="w-[2rem] h-[0.375rem] mt-1 bg-gray-400"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Button>
                                                                    <div className="text-center text-[0.8125rem] mt-[1.25rem!important]">Minimal</div>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link href={""}>
                                                                    <Button variant="nothing" type="button" className="cursor-pointer m-0 bg-transparent border border-solid border-transparent leading-[1.5]">
                                                                        <div id="">
                                                                            <div id="theme-preview" className="outline-white p-2 bg-[#212325] rounded-[0.5rem] outline-2 outline relative overflow-hidden transition-all duration-300 ease-in-out">
                                                                                <div id="bg" className="absolute top-0 left-0 w-[200%] h-[200%] scale-50 origin-top-left"></div>
                                                                                <div id="card" className="relative bg-[#212325] p-[0.25rem_0.5rem_0.375rem] rounded-[0.25rem]">
                                                                                    <div className="font-semibold text-[0.75rem] text-white">Title</div>
                                                                                    <div id="line" className="w-[3.25rem] h-[0.375rem] mt-1 bg-gray-400"></div>
                                                                                    <div id="line" className="w-[2rem] h-[0.375rem] mt-1 bg-gray-400"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Button>
                                                                    <div className="text-center text-[0.8125rem] mt-[1.25rem!important]">Abtrasct</div>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link href={""}>
                                                                    <Button variant="nothing" type="button" className="cursor-pointer m-0 bg-transparent border border-solid border-transparent leading-[1.5]">
                                                                        <div id="">
                                                                            <div id="theme-preview" className="outline-white p-2 bg-[#212325] rounded-[0.5rem] outline-2 outline relative overflow-hidden transition-all duration-300 ease-in-out">
                                                                                <div id="bg" className="absolute top-0 left-0 w-[200%] h-[200%] scale-50 origin-top-left"></div>
                                                                                <div id="card" className="relative bg-[#212325] p-[0.25rem_0.5rem_0.375rem] rounded-[0.25rem]">
                                                                                    <div className="font-semibold text-[0.75rem] text-white">Title</div>
                                                                                    <div id="line" className="w-[3.25rem] h-[0.375rem] mt-1 bg-gray-400"></div>
                                                                                    <div id="line" className="w-[2rem] h-[0.375rem] mt-1 bg-gray-400"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Button>
                                                                    <div className="text-center text-[0.8125rem] mt-[1.25rem!important]">Quantum</div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="theme-control-card" className="rounded-[0.5rem] overflow-hidden">
                                                        {/* SẼ CÓ 1 CSS hidden ở đây, khi nào rảnh làm */}
                                                        <div id="lux-collapse" className="overflow-hidden h-0 hidden"></div>
                                                        {/*  */}
                                                        <div id="lux-collapse option-row" className="h-auto block">
                                                            <div id="lux-menu-trigger-wrapper" className="cursor-pointer inline-flex min-w-0 w-full">
                                                                <div id="option-row" className="w-full p-[0.5rem_0.75rem] flex-1 transition-all duration-300 ease-in-out relative overflow-hidden bg-gray-300">
                                                                    <div id="divider"></div>
                                                                    <div className="gap-[.5rem] flex items-center">
                                                                        <div id="icon" className="mr-[.25rem!important]">
                                                                            <div className="bg-gray-400 w-6 h-6 rounded-[100px]"></div>
                                                                        </div>
                                                                        <div id="label" className="select-none flex-1">Color</div>
                                                                        <div id="value" className="font-medium capitalize">Gray</div>
                                                                        <div id="accessory" className="text-gray-400 transition-all duration-300 ease-in-out hover:text-white">
                                                                            <ChevronsUpDown className="block w-4 h-4 align-middle" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* SẼ CÓ 1 CSS hidden ở đây, khi nào rảnh làm */}
                                                        <div id="lux-collapse" className="overflow-hidden h-0 hidden"></div>
                                                        {/*  */}
                                                        {/* SẼ CÓ 1 CSS hidden ở đây, khi nào rảnh làm */}
                                                        <div id="lux-collapse" className="overflow-hidden h-0 hidden"></div>
                                                        {/*  */}
                                                        <div id="lux-collapse option-row" className="h-auto block">
                                                            <div id="lux-menu-trigger-wrapper" className="cursor-pointer inline-flex min-w-0 w-full">
                                                                <div id="option-row" className="w-full p-[0.5rem_0.75rem] flex-1 transition-all duration-300 ease-in-out relative overflow-hidden bg-gray-300">
                                                                    <div id="divider"></div>
                                                                    <div className="gap-[.5rem] flex items-center">
                                                                        <div id="icon" className="mr-[.25rem!important]">
                                                                            <div id="icon">
                                                                                <CaseUpper className="w-6 h-6 block align-middle" />
                                                                            </div>
                                                                        </div>
                                                                        <div id="label" className="select-none flex-1">Typeface</div>
                                                                        <div id="value" className="font-medium capitalize">Default</div>
                                                                        <div id="accessory" className="text-gray-400 transition-all duration-300 ease-in-out hover:text-white">
                                                                            <ChevronsUpDown className="block w-4 h-4 align-middle" />
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