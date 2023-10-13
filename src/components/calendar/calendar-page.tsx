'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { CalendarDays, Plus } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function CalendarHomePage(){
    return(
        <div className="pt-[calc(3.25rem+1px)] box-border" id="page-content">
            <div id="page-header" className="opacity-[1] pt-[3rem] pl-[1rem-!important] pr-[1rem_!important] max-w-[820px] m-[0_auto]">
                <div className="gap-[.5rem] mb-[.5rem_!important] flex justify-between items-center">
                    <h1 id="tab-title" className="text-[2rem] font-[600] mb-[0px] leading-[1.2] mt-[0]">Calendars</h1>
                </div>
                <div></div>
            </div>
            <div id="container" className="pt-[2rem] pl-[1rem_!important] pr-[1rem_!important] max-w-[820px] m-[0_auto]">
                <div id="can-divide">
                    <div id="section-title-wrapper">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">My Calendars</h2>
                            <div id="right-element" className="m-[-.25rem_0]">
                                <Link href={"/"}>
                                    <Button variant="secondary" className="p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[calc(1.75rem+2*1px)] font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-2 outline-transparent outline max-w-[100%] w-fit flex items-center no-underline">
                                        <Plus className="w-[0.875rem] h-[0.875rem] block align-middle"/>
                                        <div className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Create</div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="flex-column" className="gap-[0.75rem] flex flex-col">
                        <div id="calendar-grid" className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,_1fr))] gap-[0.75rem]">
                            <Link href={"/my-calendar"} className="p-[1rem_1rem_0.875rem] block relative rounded-[0.75rem] overflow-hidden no-underline bg-gray-100 box-border">
                                    <div className="min-h-[100%] flex justify-between flex-col">
                                        <div>
                                            <Avatar>
                                                <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="Avatar for Personal" className="rounded-[1000px] align-middle w-[48px] h-[48px]"></AvatarImage>
                                            </Avatar>
                                            <div className="font-[500] text-[1.125rem] mt-[0.75rem] mb-[0.25rem]">Donace</div>
                                            <div className="text-[0.875rem]">0 Subscriber</div>
                                        </div>
                                        <div className="gap-[.5rem] mt-[1rem_!important] flex justify-between flex-wrap items-center">
                                            <div className="text-[0.875rem]">
                                                Personal
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-hidden h-[0px] hidden">
                        <div className="grid grid-cols-[auto-fill_mimax(12.5rem,_1fr)] gap-[0.75rem] pt-[1rem_!important]"></div>
                    </div>
                </div>
                <div id="can-divide" className="mt-[2rem] pt-[2rem] border-t-2">
                    <div id="section-title-wrapper">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-0 leading-[1.2] mt-[0]">
                                Subscribed Calendars
                            </h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                    </div>
                    <div id="calendar-grid" className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,_1fr))] gap-[0.75rem]">
                        <div id="content-card" className="p-[1rem] relative rounded-[0.75rem] overflow-hidden bg-gray-100">
                            <div id="icon">
                                <div className="mb-[0px]">
                                    <CalendarDays className="w-auto h-[48px] block align-middle"/>
                                </div>
                            </div>
                            <div className="font-[500] text-[1.125rem] mt-[0.75rem] mb-[0.25rem]">
                                No Subscriptions
                            </div>
                            <div className="text-[0.875rem]">
                                You have not subscribed to any calendars.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}