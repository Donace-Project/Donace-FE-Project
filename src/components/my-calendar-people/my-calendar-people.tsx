"use client";
import { ArrowDownWideNarrow, Calendar, ChevronDown, Download, Filter, Plus, PlusIcon, Search, UserPlus } from "lucide-react";
import Link from "next/link"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";


export default function MyCalendarPeople() {
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
                            <Link href={"/my-calendar"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Events
                            </Link>
                            <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                People
                            </Link>
                            <Link href={"/"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
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
                            <h2 className="text-[1.25rem] font-semibold mb-0 leading-[1.2] mt-0">People (1)</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-subtitle" className="mt-[-.875rem] mb-6 text-gray-400 text-[1rem]">Manage your subscribers and event attendees.</div>
                    </div>
                    <div id="search-bar" className="box-border">
                        <div id="spread" className="border border-solid border-[#333537] rounded-[0.5rem] relative overflow-hidden flex justify-between items-center">
                            <Input placeholder="Search" className="border-0 rounded-none pl-10 pt-2 pb-2 text-[1.125rem] bg-gray-200 flex-1 m-0" />
                            <div id="search-icon" className="absolute left-3 text-gray-400 h-full pointer-events-none flex items-center">
                                <Search className="w-5 h-5 block align-middle" />
                            </div>
                            <div id="buttons" className="absolute right-0 bg-gray-200 flex items-center">
                                <Button variant="nothing" type="button" className="rounded-none p-3 border-l border-solid border-gray-400 bg-transparent h-auto outline-offset-[.375rem] cursor-pointer font-medium relative whitespace-nowrap justify-center outline-none max-w-full text-[0.875rem] w-fit flex items-center m-0 leading-[1.5]">
                                    <UserPlus className="w-[calc(0.875rem/1.1)] h-[calc(0.875rem/1.1)] mr-[0.375rem] stroke-[2.5] flex-shrink-0 block align-middle" />
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Add People</div>
                                </Button>
                                <Button variant="nothing" type="button" className="rounded-none p-3 border-l border-solid border-gray-400 bg-transparent h-auto outline-offset-[.375rem] cursor-pointer font-medium relative whitespace-nowrap justify-center outline-none max-w-full text-[0.875rem] w-fit flex items-center m-0 leading-[1.5]">
                                    <Download className="w-[calc(0.875rem/1.1)] h-[calc(0.875rem/1.1)] mr-[0.1275rem] stroke-[2.5] flex-shrink-0 block align-middle" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div id="spread" className="gap-[.5rem] mb-[.5rem!important] mt-[.5rem!important] flex justify-between items-center">
                        <div id="lux-menu-trigger" className="cursor-pointer inline-flex min-w-0">
                            <Button variant="nothing" type="button" className="text-gray-600 bg-gray-200 border-transparent border border-solid cursor-pointer font-medium relative whitespace-nowrap justify-center outline-none max-w-full p-[0.4375rem_0.625rem] h-7 text-[0.875rem] w-fit flex items-center m-0 leading-[1.5]">
                                <Filter className="mr-[0.375rem] stroke-[2.5] w-[0.875rem] h-[0.875rem] flex-shrink-0 block align-middle" />
                                <div id="label" className="flex items-center gap-1 leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis flex-1">
                                    <div>Filter</div>
                                </div>
                                <span id="chevron" className="ml-1 mr-[-0.125rem] flex items-center">
                                    <ChevronDown className="mr-0 stroke-[2.5] w-[0.875rem] h-[0.875rem] flex-shrink-0 block align-middle" />
                                </span>
                            </Button>
                        </div>
                        <div id="lux-menu-trigger" className="cursor-pointer inline-flex min-w-0">
                            <Button variant="nothing" type="button" className="text-gray-600 bg-gray-200 border-transparent border border-solid cursor-pointer font-medium relative whitespace-nowrap justify-center outline-none max-w-full p-[0.4375rem_0.625rem] h-7 text-[0.875rem] w-fit flex items-center m-0 leading-[1.5]">
                                <ArrowDownWideNarrow className="mr-[0.375rem] stroke-[2.5] w-[0.875rem] h-[0.875rem] block align-middle" />
                                <div id="label" className="flex items-center gap-1 leaidng-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis flex-1">
                                    <div>Recently Joined</div>
                                </div>
                                <span id="chevron" className="ml-1 mr-[-0.125rem] flex items-center">
                                    <ChevronDown className="mr-0 stroke-[2.5] w-[0.875rem] h-[0.875rem] flex-shrink-0 block align-middle" />
                                </span>
                            </Button>
                        </div>
                    </div>
                    <div id="simple-table-wrapper" className="border border-solid border-gray-300 rounded-[0.5rem] overflow-hidden bg-gray-200">
                        <div id="base-row" className="border-b-0 border-t-0 p-[0.75rem_1rem] cursor-pointer">
                            <div id="simple-user-row" className="gap-3 flex justify-between items-center">
                                <div id="avatar-wrapper small">
                                    <Avatar>
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" className="w-[24px] h-[24px] rounded-[1000px] bg-center bg-cover relative"></AvatarImage>
                                    </Avatar>
                                </div>
                                <div id="info" className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 min-w-0 flex-1">
                                    <div id="name" className="inline">
                                        <div className="inline font-medium overflow-hidden text-ellipsis whitespace-nowrap mr-[.5rem!important] min-w-0 text-black">Donace</div>
                                    </div>
                                    <div id="email" className="inline overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 min-w-0">donace@gmail.com</div>
                                </div>
                                <span className="whitespace-nowrap text-[0.875rem]">Sep 5</span>
                            </div>
                        </div>
                    </div>
                    <div id="load-more-observer"></div>
                    <div className="pt-2"></div>
                </div>
            </div>
        </div>

    )
}