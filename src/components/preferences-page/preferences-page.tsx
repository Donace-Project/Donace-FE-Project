
import Link from "next/link"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Switch } from "../ui/switch"

export default function PrefePage() {
    return (
        <div id="page-content" className="box-border">
            <div id="sticky-page-header" className="hidden fixed w-[100%] top-[0px] pt-[0.25rem] z-10">
                <div id="zm-container" className="opacity-0 gap-[1rem] pl-[1rem_!important] pr-[1rem_!important] flex justify-between items-center max-w-[820px] m-[0_auto]">
                    <h3 className="text-[1.125rem] overflow-hidden text-ellipsis whitespace-nowrap pb-[.5rem!important] pt-[.5rem!important] mb-[0!important] leading-[1.2] font-[600] mt-[0]">
                        Preferences
                    </h3>
                </div>
                <div id="tab-wrapper" className="opacity-0 pointer-events-none">
                    <div id="zm-container" className="max-w-[820px] m-[0_auto]">
                        <div id="page-header-tabs-wrapper" className="flex justify-between items-baseline">
                            <div id="tabs" className="flex max-w-[100%] overflow-auto min-w-[0px] gap-4 flex-[1_1]">
                                <div id="side-padding" className="pl-[var(1rem)-1rem]">&nbsp;</div>
                                <Link href={"/"} id="tab" className="select-all border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Account
                                </Link>
                                <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Preferences
                                </Link>
                                <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Payment
                                </Link>
                                <div id="side-padding" className="pl-[var(1rem)-1rem]"></div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-title-divier" className="border-b-[1px] border-solid border-gray-200"></div>
                </div>
            </div>
            <div id="page-header zm-container" className="opacity-[2] pt-[3rem] pl-[1rem!important] pr-[1rem!important] max-w-[820px] m-[0_auto]">
                <div className="gap-[.5rem] mb-[.5rem!important] flex justify-between items-center">
                    <h1 id="tab-title" className="text-[2rem] font-[600] mb-[0px] leading-[1.2] mt-[0]">Preferences</h1>
                </div>
                <div></div>
            </div>
            <div id="tab-wrapper" className="m-auto pt-[0.5rem]">
                <div id="zm-container" className="pt-[.25rem!important] max-w-[820px] m-[0_auto]">
                    <div id="page-header-tabs-wrapper" className="flex justify-between items-baseline">
                        <div id="tabs" className="flex max-w-[100%] overflow-auto min-w-[0] gap-[1rem] flex-[1_1]">
                            <div id="side-padding" className="pl-[var(1rem)-1rem]">&nbsp;</div>
                            <Link href={"/setting"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Account
                            </Link>
                            <Link href={"/preferences"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                Preferences
                            </Link>
                            <Link href={"/payment"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Payment
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
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Notifications & Reminders</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-title" className="mt-[-.875rem] mb-[1.25rem] text-[#d2d4d7] text-[1rem]">These options apply to all calendars and events you are part of.</div>
                    </div>
                    <div id="content-card" className="p-[1rem_1.125rem_1.125rem] relative rounded-[0.75rem] bg-gray-200 border-[1px] border-solid">
                        <div id="content">
                            <div id="category">
                                <div id="title" className="font-[500] text-[0.875rem] text-gray-600">As Event Guest</div>
                                <div id="grid" className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[0.75rem] mt-[0.5rem]">
                                    <div>
                                        <div id="lux-checkbox" className="relative cursor-pointer text-[1rem] leading-[1.25rem] clear-both flex flex-row justify-start items-center">
                                            <Label id="checkbox-icon" className="block relative mr-[.5rem] leading-[1.2rem] h-[1.2rem] w-[1.2rem] clear-both mb-0">
                                                <Checkbox id="r2a" />
                                            </Label>
                                            <Label id="text-label" className="flex-[1_1] cursor-pointer leading-[1.5] mb-0">
                                                <div id="checkbox-text" className="ml-[.125rem]">
                                                    <div>Email Reminders</div>
                                                </div>
                                            </Label>
                                        </div>
                                    </div>
                                    <div>
                                        <div id="lux-checkbox" className="relative cursor-pointer text-[1rem] leading-[1.25rem] clear-both flex flex-row justify-start items-center">
                                            <Label id="checkbox-icon" className="block relative mr-[.5rem] leading-[1.2rem] h-[1.2rem] w-[1.2rem] clear-both mb-0">
                                                <Checkbox id="r2a" />
                                            </Label>
                                            <Label id="text-label" className="flex-[1_1] cursor-pointer leading-[1.5] mb-0">
                                                <div id="checkbox-text" className="ml-[.125rem]">
                                                    <div>SMS Reminders</div>
                                                </div>
                                            </Label>
                                        </div>
                                    </div>
                                    <div>
                                        <div id="lux-checkbox" className="relative cursor-pointer text-[1rem] leading-[1.25rem] clear-both flex flex-row justify-start items-center">
                                            <Label id="checkbox-icon" className="block relative mr-[.5rem] leading-[1.2rem] h-[1.2rem] w-[1.2rem] clear-both mb-0">
                                                <Checkbox id="r2a" />
                                            </Label>
                                            <Label id="text-label" className="flex-[1_1] cursor-pointer leading-[1.5] mb-0">
                                                <div id="checkbox-text" className="ml-[.125rem]">
                                                    <div>New Sessions</div>
                                                </div>
                                            </Label>
                                        </div>
                                    </div>
                                    <div>
                                        <div id="lux-checkbox" className="relative cursor-pointer text-[1rem] leading-[1.25rem] clear-both flex flex-row justify-start items-center">
                                            <Label id="checkbox-icon" className="block relative mr-[.5rem] leading-[1.2rem] h-[1.2rem] w-[1.2rem] clear-both mb-0">
                                                <Checkbox id="r2a" />
                                            </Label>
                                            <Label id="text-label" className="flex-[1_1] cursor-pointer leading-[1.5] mb-0">
                                                <div id="checkbox-text" className="ml-[.125rem]">
                                                    <div>Event Pots</div>
                                                </div>
                                            </Label>
                                        </div>
                                    </div>
                                    <div>
                                        <div id="lux-checkbox" className="relative cursor-pointer text-[1rem] leading-[1.25rem] clear-both flex flex-row justify-start items-center">
                                            <Label id="checkbox-icon" className="block relative mr-[.5rem] leading-[1.2rem] h-[1.2rem] w-[1.2rem] clear-both mb-0">
                                                <Checkbox id="r2a" />
                                            </Label>
                                            <Label id="text-label" className="flex-[1_1] cursor-pointer leading-[1.5] mb-0">
                                                <div id="checkbox-text" className="ml-[.125rem]">
                                                    <div>Feedback Requets</div>
                                                </div>
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="category" className="mt-[1rem]">
                                <div id="title" className="font-[500] text-[0.875rem] text-gray-600">As Event Host</div>
                                <div id="grid" className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[0.75rem] mt-[0.5rem]">
                                    <div>
                                        <div id="lux-checkbox" className="relative cursor-pointer text-[1rem] leading-[1.25rem] clear-both flex flex-row justify-start items-center">
                                            <Label id="checkbox-icon" className="block relative mr-[.5rem] leading-[1.2rem] h-[1.2rem] w-[1.2rem] clear-both mb-0">
                                                <Checkbox id="r2a" />
                                            </Label>
                                            <Label id="text-label" className="flex-[1_1] cursor-pointer leading-[1.5] mb-0">
                                                <div id="checkbox-text" className="ml-[.125rem]">
                                                    <div>Feedback Responses</div>
                                                </div>
                                            </Label>
                                        </div>
                                    </div>
                                    <div>
                                        <div id="lux-checkbox" className="relative cursor-pointer text-[1rem] leading-[1.25rem] clear-both flex flex-row justify-start items-center">
                                            <Label id="checkbox-icon" className="block relative mr-[.5rem] leading-[1.2rem] h-[1.2rem] w-[1.2rem] clear-both mb-0">
                                                <Checkbox id="r2a" />
                                            </Label>
                                            <Label id="text-label" className="flex-[1_1] cursor-pointer leading-[1.5] mb-0">
                                                <div id="checkbox-text" className="ml-[.125rem]">
                                                    <div>New Guest Registered</div>
                                                </div>
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="category" className="mt-[1rem]">
                                <div id="title" className="font-[500] text-[0.875rem] text-gray-600">As Event Admin</div>
                                <div id="grid" className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[0.75rem] mt-[0.5rem]">
                                    <div>
                                        <div id="lux-checkbox" className="relative cursor-pointer text-[1rem] leading-[1.25rem] clear-both flex flex-row justify-start items-center">
                                            <Label id="checkbox-icon" className="block relative mr-[.5rem] leading-[1.2rem] h-[1.2rem] w-[1.2rem] clear-both mb-0">
                                                <Checkbox id="r2a" />
                                            </Label>
                                            <Label id="text-label" className="flex-[1_1] cursor-pointer leading-[1.5] mb-0">
                                                <div id="checkbox-text" className="ml-[.125rem]">
                                                    <div>New Subscriber</div>
                                                </div>
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="can-divide with-divider medium" className="mt-[2rem] pt-[2rem] border-t-[1px] border-solid border-t-gray-200">
                    <div id="section-title-wrapper medium">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Subscriptions</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-title" className="mt-[-.875rem] mb-[1.25rem] text-[#d2d4d7] text-[1rem]">Keep up-to-date with calendars you are interested in.</div>
                    </div>
                    <div id="content-card" className="p-0 relative rounded-[0.75rem] bg-gray-200 border-[1px] border-solid overflow-hidden">
                        <div id="notification-rows">
                            <div id="notification-row">
                                <div id="divider"></div>
                                <div id="spread" className="p-[0.75rem_1rem] gap-[0.75rem] flex justify-between items-center">
                                    <div id="avatar-wrapper small">
                                        <div id="avatar" className="w-[1.5rem] h-[1.5rem] rounded-[1000px] bg-center bg-cover relative">
                                            <Avatar className="w-[1.5rem] h-[1.5rem] rounded-[1000px] bg-center bg-cover relative">
                                                <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                            </Avatar>
                                        </div>
                                    </div>
                                    <div id="name" className="flex-grow flex-shrink">Donace</div>
                                    <label id="lux-toggle" className="flex-shrink-0 relative inline-block mb-0">
                                        <Switch id="subscriptions"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}