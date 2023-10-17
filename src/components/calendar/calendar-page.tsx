'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { CalendarDays, Plus } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function CalendarHomePage(){
    return(
        <div className="pt-1 box-border" id="page-content">
            <div id="page-header" className="opacity-[1] pt-12 pl-[1rem-!important] pr-[1rem_!important] max-w-[820px] m-[0_auto]">
                <div className="gap-[.5rem] mb-[.5rem_!important] flex justify-between items-center">
                    <h1 id="tab-title" className="text-[2rem] font-semibold mb-0 leading-[1.2] mt-0 text-[rgb(19,21,23)]">Calendars</h1>
                </div>
                <div></div>
            </div>
            <div id="container" className="pt-8 pl-[1rem_!important] pr-[1rem_!important] max-w-[820px] m-[0_auto]">
                <div id="can-divide">
                    <div id="section-title-wrapper">
                        <div id="section-title-row" className="mb-5 flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-semibold mb-0 leading-[1.2] mt-0 text-[rgb(19,21,23)]">My Calendars</h2>
                            <div id="right-element" className="m-[-.25rem_0]">
                                <Link href={"/create-calendar"}>
                                    <button className="hover:text-[#fff] hover:bg-[rgb(19,21,23)] text-[rgba(19,21,23,0.64)] bg-[rgba(19,21,23,0.04)] p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[calc(1.75rem+2*1px)] font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-none max-w-full w-fit flex items-center no-underline transition-all duration-300 ease-in-out">
                                        <Plus className="w-[0.875rem] h-[0.875rem] block align-middle"/>
                                        <div className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Create</div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="flex-column" className="gap-3 flex flex-col">
                        <div id="calendar-grid" className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,_1fr))] gap-[0.75rem]">
                            <Link href={"/my-calendar"} className="hover:border-1 hover:border-solid hover:border-gray-300 p-[1rem_1rem_0.875rem] cursor-pointer block relative rounded-[0.75rem] bg-[rgba(255,255,255,0.8)] border border-solid border-[#fff] overflow-hidden no-underline transition-all duration-300 ease-in-out">
                                    <div className="min-h-[100%] flex justify-between flex-col">
                                        <div>
                                            <Avatar>
                                                <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="Avatar for Personal" className="rounded-[1000px] align-middle w-[48px] h-[48px]"></AvatarImage>
                                            </Avatar>
                                            <div className="font-medium text-[1.125rem] text-[rgb(19,21,23)] mt-3 mb-1">Donace</div>
                                            <div className="text-[0.875rem] text-[rgba(19,21,23,0.36)]">0 Subscriber</div>
                                        </div>
                                        <div className="gap-[.5rem] mt-[1rem_!important] flex justify-between flex-wrap items-center">
                                            <div className="text-[0.875rem] text-[rgba(19,21,23,0.36)]">
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
                        <div id="content-card" className="p-[1rem_1rem_0.875rem] cursor-pointer block relative rounded-[0.75rem] bg-[rgba(255,255,255,0.8)] border border-solid border-[#fff] overflow-hidden no-underline transition-all duration-300 ease-in-out">
                            <div id="icon">
                                <div className="mb-0">
                                    <CalendarDays className="w-auto h-[48px] block align-middle text-gray-400" />
                                </div>
                            </div>
                            <div className="font-medium text-[1.125rem] mt-3 mb-1 text-[rgba(19,21,23,0.64)]">
                                No Subscriptions
                            </div>
                            <div className="text-[0.875rem] text-[rgba(19,21,23,0.36)]">
                                You have not subscribed to any calendars.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}