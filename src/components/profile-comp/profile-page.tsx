'use client';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import * as React from "react"
import { Button } from "../ui/button";
import { CalendarDays, Pen, PenBox, Plus } from "lucide-react";
import Link from "next/link";

export function ProfilePage() {
    return (
        <div className="relative flex flex-col min-h-[100vh]" id="profile-content-container">
            <div className="pb-8" id="profile-bio is me">
                <div className="p-4 w-full max-w-[650px] m-auto">
                    <div className="pr-0 pb-8 pl-0 pt-8 block text-center">
                        <div className="w-[120px] m-auto">
                            <a>
                                <div>
                                    <Avatar className="w-[120px] h-[120px] rounded-[1000px] bg-center bg-cover relative">
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@shadcn" />
                                        <AvatarFallback>DATN</AvatarFallback>
                                    </Avatar>
                                    <div className="w-[25%] h-[25%] min-w-[20px] min-h-[20px] rounded-[100%] absolute right-0 bottom-0 overflow-hidden">
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className="bg-inherit">
                                <h1 className="font-[600] text-[1.75rem] mt-[1rem]">Donace</h1>
                            </div>
                            <div className="justify-center flex items-center">
                                <div className="pt-[1rem_!important]">
                                    <Link href={"/"}>
                                        <Button className="rounded-[100px] p-[0.25rem_0.75rem_0.25rem_0.75rem] font-[500] border-none bg-black">
                                            {/* <Link href={"/"}></Link> */}
                                            <Pen className="mr-[.25rem] block align-middle w-[0.75rem] h-[0.75rem]" />
                                            <span>Edit Bio</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="profile-content" className="pt-[2rem] w-[100%] max-w-[650px] flex flex-col pb-0 m-auto flex-[1_1_0%]">
                <div id="profile-block-wrapper" className="relative">
                    <div className="h-auto block">
                        <div id="profile-block-content">
                            <div className="block" id="view-block">
                                <div>
                                    <div id="profile-events-wrapper">
                                        <div className="mb-[1rem] overflow-hidden flex justify-between align-baseline">
                                            <h2 className="font-[600] text-[1.25rem] mb-0 overflow-hidden text-ellipsis leading-[1.2] mt-0">Events</h2>
                                            <div className="whitespace-nowrap pl-[0.5rem]">
                                                <Link href={"/"} className="inline-flex items-center justify-center">
                                                    <Plus className="mr-[0.25rem]" />
                                                    <span>Create New</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <div id="profile-event-empty" className="w-[100%] text-center p-[2rem_1rem_2rem_1rem] text-[#939597] border-[1px_solid_#000c] rounded-[0.5rem] flex flex-col items-center">
                                                <CalendarDays className="w-[2rem] h-[2rem] mb-[1rem] block align-middle" />
                                                <div className="font-[600] mb-[0.25rem]">Nothing Upcoming</div>
                                                <div className="text-[0.9rem]">Subscribe to hear about what&apos;s coming up</div>
                                            </div>
                                        </div>
                                        <div className="mt-[1rem]" id="bottom-action">
                                            <div id="block-action" className="inline-block p-[0px]">
                                                <Link href={"/"}>
                                                    View Past.
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <Link href={"/"}>
                                    <Button className="bg-black rounded-[100px] p-[0.25rem_0.75rem] font-[500] border-none">
                                        <Pen className="mr-[.25rem] w-[0.75rem] h-[0.75rem]" />
                                        <span>Edit Block</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-[3rem_!important] pt-[3rem_!important]"></div>
            </div>
        </div>
    )
}