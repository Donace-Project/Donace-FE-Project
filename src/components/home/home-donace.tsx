import * as React from "react"
import { Button } from "../ui/button"
import { CalendarDays, CalendarRange, Plus } from "lucide-react"
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <div id="page-content" className="pt-[calc(3.25rem+1px)] box-border">
                <div id="page-header" className="opacity-1 pt-[3rem] pl-[1rem_!important] pr-[1rem_!important] max-w-[820px] m-[0_auto]">
                    <div id="" className="gap-[.5rem] mb-[.5rem_!important] flex justify-between items-center">
                        <h1 id="tab-title" className="text-[2rem] font-[600] mb-[0px] leading-[1.2]">Events</h1>
                        <div id="lux-button-switcher always" className="min-w-[auto] p-[0.125rem] overflow-hidden rounded-[0.5rem]">
                            <div id="segment" className="grid relative grid-cols-2">
                                <Button variant="secondary" className="text-[0.8rem] p-[0.25rem_0.5rem]">
                                    <div className="z-2 relative">Upcoming</div>
                                </Button>
                                <Button variant="ghostSignin" className="text-[0.8rem] p-[0.25rem_0.5rem]">
                                    <div>Past</div>
                                </Button>
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
            <div id="lux-empty-state" className="text-center mt-[4rem] flex flex-col items-center">
                <div id="icon" className="justify-center flex items-center">
                    <div className="mb-[-40px]">
                        <CalendarDays className="w-[250px] h-auto block align-middle" />
                    </div>
                </div>
                <h3 id="text-secondary-alpha" className="text-[1.5rem] font-[500] p-[0_!important] mt-[3.5rem_!important] mb-[0_!important] leading-[1.2]">
                    No Upcoming Events
                </h3>
                <div className="pl-[3rem] pr-[3rem] mt-[.5rem_!important]">
                    You have no upcoming events. Why not host one?
                </div>
                <div className="mt-[1.5rem_!important] justify-center flex items-center">
                    <Link href={"/"}>
                        <Button variant="secondary" className="font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px_solid_transparent] max-w-[100%] p-[0.625rem_0.875rem] text-[1rem] gap-[0.5rem] h-[calc(2.25rem+2*1px)] w-fit mt-[1rem_!important] flex items-center no-underline">
                            <Plus className="mr-[0.5rem] stroke-[2.5] w-[1rem] h-[1rem] shrink-0"/>
                            <div className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                                Create Event
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}