"use client";
import * as React from "react"
import { Button } from "../ui/button"
import { CalendarDays, Plus } from "lucide-react"
import Link from "next/link"
import HomePastEvent from "./home-past-event";

export default function Home() {
    return (
        <div id="page-content" className="pt-1 box-border">
            <div id="page-header" className="opacity-1 pt-12 pl-[1rem_!important] pr-[1rem_!important] max-w-[820px] m-[0_auto]">
                <div id="spread" className="gap-[.5rem] mb-[.5rem_!important] flex justify-between items-center">
                    <h1 id="tab-title" className="text-[2rem] font-semibold text-[rgb(19,21,23)] mb-0 leading-[1.2]">Events</h1>
                    <div id="lux-button-switcher always" className="min-w-[auto] p-[0.125rem] m-[-0.25rem_0px] overflow-hidden rounded-[0.5rem] bg-[rgba(19,21,23,0.04)]">
                        <div id="segment" className="grid grid-cols-2 relative">
                            <button type="button" className="text-[0.8rem] p-[0.25rem_0.5rem] text-[rgb(19,21,23)] relative rounded-none justify-center cursor-pointer transition-all duration-300 ease-in-out outline-0 font-medium flex items-center m-0 bg-transparent border border-solid border-transparent leading-[1.5]">
                                <div className="z-[2] relative">Upcoming</div>
                            </button>
                            <Link href={"/home-past-event"} className="text-[rgba(19,21,23,0.36)] relative justify-center cursor-pointer transition-all duration-300 ease-in-out outline-0 font-medium flex items-center leading-[1.5]">
                                <button type="button" className="hover:text-gray-800 text-[0.8rem] p-[0.25rem_0.5rem] text-[rgba(19,21,23,0.36)] relative rounded-none justify-center cursor-pointer transition-all duration-300 ease-in-out outline-0 font-medium flex items-center m-0 bg-transparent border border-solid border-transparent leading-[1.5]">
                                    <div className="z-[2] relative ">Past</div>
                                </button>
                            </Link>
                            <div id="slider" className="left-0 pointer-events-none bg-[#fff] rounded-[calc(0.5rem/1.25)] w-[calc(100%/2)] shadow-md absolute h-full z-[1] transition-all duration-300 ease-in-out"></div>
                        </div>
                    </div>
                </div>
                <div id="blank"></div>
            </div>
            <div className="p-[2rem_1rem_1rem] max-w-[var(820px)] m-[0_auto]" id="load-more-observer"></div>
            <div className="min-h-[1px]"></div>
            <div id="lux-empty-state" className="text-center mt-[4rem] flex flex-col items-center">
                <div id="icon" className="justify-center flex items-center">
                    <div className="mb-[-40px]">
                        <CalendarDays className="w-[250px] h-auto block align-middle text-gray-300"/>
                    </div>
                </div>
                <h3 id="text-secondary-alpha" className="text-[1.5rem] text-[rgba(19,21,23,0.64)] font-medium p-[0_!important] mt-[3.5rem_!important] mb-[0_!important] leading-[1.2]">
                    No Upcoming Events
                </h3>
                <div className="pl-12 pr-12 text-[rgba(19,21,23,0.36)] mt-[.5rem_!important]">
                    You have no upcoming events. Why not host one?
                </div>
                <div className="mt-[1.5rem_!important] justify-center flex items-center">
                    <Link href={"/create"}>
                        <button className="hover:text-[#fff] hover:bg-[rgb(19,21,23)] text-[rgba(19,21,23,0.64)] bg-[rgba(19,21,23,0.04)] border-transparent border border-solid transition-all duration-300 ease-in-out font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px_solid_transparent] max-w-[100%] p-[0.625rem_0.875rem] text-[1rem] gap-[0.5rem] h-[calc(2.25rem+2*1px)] w-fit mt-[1rem_!important] flex items-center no-underline">
                            <Plus className="mr-2 stroke-[2.5] w-4 h-4 flex-shrink-0 block align-middle"/>
                            <div className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                                Create Event
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}