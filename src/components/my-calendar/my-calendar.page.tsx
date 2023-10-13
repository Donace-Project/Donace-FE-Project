"use client";
import { Calendar, Plus, PlusIcon } from "lucide-react";
import Link from "next/link"
import { Button } from "../ui/button";


export default function MyCalendarPage() {
    return (
        <div id="page-content" className="box-border">
            <div id="sticky-page-header" className="hidden fixed w-[100%] top-[0px] pt-[0.25rem] z-10">
                <div id="zm-container" className="opacity-0 gap-[1rem] pl-[1rem_!important] pr-[1rem_!important] flex justify-between items-center max-w-[820px] m-[0_auto]">
                    <h3 className="text-[1.125rem] overflow-hidden text-ellipsis whitespace-nowrap pb-[.5rem!important] pt-[.5rem!important] mb-[0!important] leading-[1.2] font-[600] mt-[0]">
                        Personal
                    </h3>
                </div>
                <div id="tab-wrapper" className="opacity-0 pointer-events-none">
                    <div id="zm-container" className="max-w-[820px] m-[0_auto]">
                        <div id="page-header-tabs-wrapper" className="flex justify-between items-baseline">
                            <div id="tabs" className="flex max-w-[100%] overflow-auto min-w-[0px] gap-4 flex-[1_1]">
                                <div id="side-padding" className="pl-[var(1rem)-1rem]">&nbsp;</div>
                                <Link href={"/"} id="tab" className="select-all border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Events
                                </Link>
                                <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    People
                                </Link>
                                <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Newletters
                                </Link>
                                <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Insights
                                </Link>
                                <div id="side-padding" className="pl-[var(1rem)-1rem]"></div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-title-divier" className="border-b-[1px] border-solid border-gray-200"></div>
                </div>
            </div>
            <div id="page-header zm-container" className="opacity-[2] pt-12 pl-[1rem!important] pr-[1rem!important] max-w-[820px] m-[0_auto]">
                <div id="spread" className="gap-[.5rem] mb-[.5rem!important] flex justify-between items-center">
                    <h1 id="tab-title" className="text-[2rem] font-semibold mb-0 leading-[1.2] mt-0">
                        <div className="gap-[.75rem] flex items-center">
                            <div>Personal</div>
                        </div>
                    </h1>
                </div>
                <div></div>
            </div>
            <div id="tab-wrapper" className="m-auto pt-[0.5rem]">
                <div id="zm-container" className="pt-[.25rem!important] max-w-[820px] m-[0_auto]">
                    <div id="page-header-tabs-wrapper" className="flex justify-between items-baseline">
                        <div id="tabs" className="flex max-w-[100%] overflow-auto min-w-[0] gap-[1rem] flex-[1_1]">
                            <div id="side-padding" className="pl-[var(1rem)-1rem]">&nbsp;</div>
                            <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                Events
                            </Link>
                            <Link href={"/my-calendar-people"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                People
                            </Link>
                            <Link href={"/my-calendar-newletters"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Newletters
                            </Link>
                            <Link href={"/"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Insights
                            </Link>
                            <Link href={"/"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Settings
                            </Link>
                            <div id="side-padding" className="pl-[var(1rem)-1rem]"></div>
                        </div>
                    </div>
                </div>
                <div id="tab-title-divider" className="border-b-[1px] border-solid border-gray-200 mb-[1.75rem]"></div>
            </div>
            <div id="zm-container" className="pl-[1rem!important] pr-[1rem!important] max-w-[820px] m-[0_auto]">
                <div id="can-divide with-divider medium">
                    <div id="section-title-wrapper medium">
                        <div id="section-title-row" className="mb-5 flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-semibold mb-0 leading-[1.2] mt-0">
                                <div className="gap-[.5rem] flex items-center">
                                    <span>Events</span>
                                    <Button variant="nothing" aria-label="Add Event" type="button" className="text-gray-600 bg-gray-200 rounded-[1000px] border border-solid flex-shrink-0 cursor-pointer font-medium relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-none max-w-full text-[0.875rem] p-[0.1875rem] w-6 h-6 flex items-center m-0 leading-[1.5] mt-1">
                                        <Plus className="stroke-[2.5] w-[0.875rem] h-[0.875rem] flex-shrink-0 block align-middle" />
                                    </Button>
                                </div>
                            </h2>
                            <div id="right-element" className="m-[-.25rem_0]">
                                <div id="lux-button-switcher always" className="min-w-[auto] p-[0.125rem] overflow-hidden rounded-[0.5rem]">
                                    <div id="segment" className="grid relative grid-cols-2">
                                        <Button variant="secondary" className="text-[0.8rem] p-[0.25rem_0.5rem]">
                                            <div className="z-2 relative">Upcoming</div>
                                        </Button>
                                        <Link href={""}>
                                            <Button variant="ghostSignin" className="text-[0.8rem] p-[0.25rem_0.5rem]">
                                                <div>Past</div>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="timeline-container" className="">
                        <div id="lux-empty-state" className="text-center mt-8 flex flex-col items-center">
                            <div id="icon illu" className="justify-center flex items-center">
                                <div id="mb-[-40px]">
                                    <Calendar className="w-[250px] h-auto block align-middle"/>
                                </div>
                            </div>
                            <h3 className="text-[1.5rem] font-medium text-gray-600 p-[0!important] mt-[1.5rem!important] mb-[0!important] leading-[1.2]">No Events</h3>
                            <div className="pl-12 pr-12 text-gray-400 mt-[.5rem!important]">This calendar has no upcoming events.</div>
                            <div className="mt-[1.5rem!important] justify-center flex items-center">
                                <Button variant="nothing" type="button" className="text-gray-600 bg-gray-200 border-transparent border border-solid cursor-pointer font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-none max-w-full text-[0.875rem] p-[0.4375rem_0.625rem] h-[calc(1.75ren+2*1px)] w-fit flex items-center m-0 leading-[1.5]">
                                    <PlusIcon className="mr-[0.375rem] stroke-[2.5] w-[0.875rem] h-[0.875rem] flex-shrink-0 block align-middle"/>
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Add Event</div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}