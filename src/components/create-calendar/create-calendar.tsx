"use client";

import { ArrowUp, CheckCircle } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CreateCalendar() {
    return (
        <div id="page-content" className="pt-1">
            <div id="page-header" className="opacity-[1] pt-12 pl-[1rem!important] pr-[1rem!important] max-w-[820px] m-[0_auto]">
                <div id="spread" className="gap-[.5rem] mb-[.5rem!important] flex justify-between items-center">
                    <h1 id="tab-title" className="text-[2rem] font-semibold text-[rgb(19,21,23)] mb-0 leading-[1.2] mt-0">Create Calendar</h1>
                </div>
                <div></div>
            </div>
            <div id="zm-container" className="pt-[1.5rem!important] p-[1rem!important] max-w-[820px] m-[0_auto]">
                <form action={'#'} className="gap-6 flex flex-col">
                    <div id="content-card-1" className="p-0 relative rounded-[0.75rem] bg-[rgba(255,255,255,0.8)] border border-solid border-[#fff] overflow-hidden">
                        <div id="top-card">
                            <div role="button" className="aspect-[3.5] bg-[#ebeced] overflow-hidden transition-all duration-300 ease-in-out relative cursor-pointer">
                                <Input accept="image/*,.jpg,.jpeg,.png,.gif,.webp" type="file" tabIndex={-1} className="hidden m-0" />
                                <div id="overlay animated" className="hover:bg-gray-300 absolute top-0 left-0 right-0 bottom-0 bg-transparent transition-all duration-300 ease-in-out"></div>
                                <div id="animated image" className="transition-all duration-300 ease-in-out">
                                    <div id="placeholder" className="pb-[calc(100%/(3/5))]"></div>
                                </div>
                                <div id="change-cover-container" className="absolute top-2 right-2 backdrop-blur-xl backdrop-contrast-[50%] backdrop-brightness-[130%] border border-solid border-[rgba(19,21,23,0.08)] rounded-[0.5rem] overflow-hidden">
                                    <button type="button" className="hover:text-[#fff] hover:bg-gray-800 text-[rgba(19,21,23,0.64)] bg-[rgba(19,21,23,0.04)] border-transparent border border-solid cursor-pointer transition-[all 0.3s cubic-bezier(0.4,0,0.2,1)] outline-[0s] font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-none max-w-full text-[0.875rem] p-[0.4375rem_0.625rem] h-[calc(1.75rem+2*1px)] w-fit flex items-center m-0 leading-[1.5]">
                                        <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Change Cover</div>
                                    </button>
                                </div>
                            </div>
                            <div className="pb-[32px]">
                                <div id="avatar-container" className="absolute transform translate-y-[-50%] border-[0.25rem] border-solid border-[#fff] rounded-[0.75rem] ml-[0.875rem]">
                                    <div>
                                        <div role="presentation" id="avatar-wrapper" className="w-[64px] h-[64px] relative cursor-pointer">
                                            <Input accept="image/*,.jpg,.jpeg,.png,.gif,.webp" type="file" tabIndex={-1} className="hidden m-0" />
                                            <div id="upload-icon" className="rounded-[0.5rem] bg-center bg-cover flex justify-center items-center text-[#fff] bg-[rgb(19,21,23)] hover:bg-red-500 w-[35%] h-[35%] min-w-[24px] min-h-[24px] border-2 border-solid border-[#fff] absolute right-[-1px] bottom-[-1px] origin-center transition-all duration-300 ease-in-out">
                                                <ArrowUp className="stroke-[2.5] w-[65%] h-[65%] block align-middle" />
                                            </div>
                                            <div id="avatar square" className="w-[64px] h-[64px] rounded-[0.5rem] bg-center bg-cover flex justify-center items-center bg-[#ebeced]">
                                                <Avatar>
                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                                </Avatar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="input-container" className="p-[0.5rem_1rem] pb-0 flex flex-col">
                                <div id="name-input" className="text-[1.5rem] font-medium p-2 h-12">
                                    <textarea id="lux-naked-input bordered mounted" spellCheck="false" autoCapitalize="words" placeholder="Calendar Name" className="h-[47.8px!important] p-2 border-b border-solid outline-none border-b-[#ebeced] transition-all duration-300 ease-in-out height-0 text-[rgb(19,21,23)] leading-[1.3] overflow-hidden bg-transparent text-[1.5rem] font-medium w-full resize-none m-0 focus:border-b-2 focus:border-gray-400 hover:border-b-2 hover:border-gray-400"></textarea>
                                </div>
                                <div id="desc-input" className="p-2">
                                    <textarea id="lux-naked-input mounted" spellCheck="false" autoCapitalize="sentences" placeholder="Add a short description." maxLength={200} className="h-[37px!important] p-2 outline-none transition-all duration-300 ease-in-out height-0 text-[rgb(19,21,23)] leading-[1.3] overflow-hidden bg-transparent text-[1rem] font-normal w-full resize-none m-0"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="text-[#fff] bg-[#333537] hover:bg-gray-700 border-[#333537] border border-solid cursor-pointer transition-[all 0.3s cubic-bezier(0.4,0,0.2,1)] outline-[0s] font-medium rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-none max-w-full text-[1rem] p-[0.625rem_0.875rem] w-fit flex items-center m-0 leading-[1.5]">
                        <CheckCircle className="mr-2 stroke-[2.5] w-4 h-4 flex-shrink-0 block align-middle"/>
                        <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Create Calendar</div>
                    </button>
                </form>
            </div>
        </div>
    )
}