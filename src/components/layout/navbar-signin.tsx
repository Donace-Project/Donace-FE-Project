"use client"

import {
    Bell,
    CalendarDays,
    CloudHail,
    Compass,
    LogOut,
    Search,
    Settings,
    Ticket,
    User,
} from "lucide-react"

import Clock from 'react-live-clock';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Button } from "../ui/button";

// test commit

export function NavbarSignIn() {
    return (
        <div id="nav-wrapper" className="fixed border-b-[1px] border-solid border-transparent z-[10] w-full backdrop-blur-lg transition-all duration-300 ease-in-out">
            <div id="background" className="opacity-[1] pointer-events-none fixed w-full h-[180px] z-[1]"></div>
            <div id="nav" className="relative w-full p-[0.75rem_1rem] z-[200] flex justify-between items-center">
                <Link href={"/home"} className="relative z-[1] cursor-pointer no-underline">
                    <div className="m-[0px_-4px] p-[4px_10px_4px_4px] flex items-center">
                        <p className="text-opacity-50 text-green-500 font-bold">DONACE</p>
                    </div>
                </Link>
                <div id="center-and-right" className="flex justify-between items-center flex-shrink flex-grow basis-[0%] max-w-[calc(820px+calc((100%-820px)/2))] min-w-0">
                    <div id="center-wrapper">
                        <div id="center-links-wrapper" className="gap-[1.25rem] p-[0px_1rem] text-[0.875rem] flex items-baseline max-w-[var(820px)] m-[0_auto]">
                            <Link href={"/home"} className="cursor-pointer font-[500] no-underline">
                                <div className="gap-[.5rem] flex items-center">
                                    <div id="icon">
                                        <Ticket className="block w-[1rem] h-[1rem] align-middle" />
                                    </div>
                                    <div id="label" className="font-[500]">Events</div>
                                </div>
                            </Link>
                            <Link href={"/calendar"} className="cursor-pointer font-[500] no-underline">
                                <div className="gap-[.5rem] flex items-center">
                                    <div id="icon">
                                        <CalendarDays className="block w-[1rem] h-[1rem] align-middle" />
                                    </div>
                                    <div id="label" className="font-[500]">Calendars</div>
                                </div>
                            </Link>
                            <Link href={"/explore"} className="cursor-pointer font-[500] no-underline">
                                <div className="gap-[.5rem] flex items-center">
                                    <div id="icon">
                                        <Compass className="block w-[1rem] h-[1rem] align-middle" />
                                    </div>
                                    <div id="label" className="font-[500]">Explore</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div id="right-wrapper" className="gap-[1rem] flex items-center">
                        <div className="text-[0.875rem] relative" id="time">
                            <Clock format={"hh:mm"} ticking={true} />
                        </div>
                        <Link href={"/create"} className="relative font-[500] rounded-[0.5rem] justify-center flex items-center cursor-pointer no-underline">
                            <div className="text-[0.875rem] whitespace-nowrap" id="label-nowrap">
                                Create&nbsp;
                                <span>Event</span>
                            </div>
                        </Link>
                        <Link href={"/"}>
                            <Button variant="nothing" className="cursor-pointer p-[0.25rem_0.5rem] m-[-0.25rem_-0.5rem] relative inline-flex min-w-0 font-[500] rounded-[0.5rem] bg-transparent">
                                <Search className="block w-[1rem] h-[1rem] align-middle" />
                            </Button>
                        </Link>
                        <DropdownMenu>
                        </DropdownMenu>
                        <Link href={"/"} >
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="nothing" className="p-[0.25rem_0.5rem] m-[-0.25rem_-0.5rem] relative inline-flex min-w-0">
                                            <Bell className="block w-[1rem] h-[1rem] align-middle" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-[300px] max-w-[300px] min-h-[300px] max-h-[60vh] overflow-auto">
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className="text-[0.875rem]">
                                                <div id="notifaction-row" className="relative p-[0.875rem_1rem]">
                                                    <Link href={"home"}>
                                                        <div></div>
                                                        <div className="gap-[0.75rem] flex items-start">
                                                            <div id="icon-wrapper" className="relative mt-[0.125rem]">
                                                                <div id="avatar">
                                                                    <div id="avatar-wrapper">
                                                                        <Avatar>
                                                                            <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" className="w-[32px] h-[32px] rounded-[1000px] relative align-middle"></AvatarImage>
                                                                        </Avatar>
                                                                    </div>
                                                                </div>
                                                                <div id="icon" className="rounded-[100px] w-[1rem] h-[1rem] absolute right-[-0.125rem] bottom-[-0.125rem] justify-center flex items-center">
                                                                    <CloudHail className="w-[0.5625rem] h-[0.5625rem] block align-middle bg-red-200 rounded-[150px]" />
                                                                </div>
                                                            </div>
                                                            <div className="min-w-[0] flex-[1_1] flex flex-col">
                                                                <div>
                                                                    <span>
                                                                        <strong>Donace </strong>
                                                                        registered for
                                                                        <strong> FPT Poly</strong>
                                                                    </span>
                                                                    <br />
                                                                    <span title="set-time-zone">Sep 13</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div id="load-more-observer"></div>
                                                <div className="min-h-[]1px"></div>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </Link>
                        <div className="m-[-0.5rem] p-[0.5rem] rounded-[100px] inline-flex min-w-0 items-center">
                            <div id="avatar-wrapper">
                                <div className="w-[24px] h-[24px] rounded-[1000px] bg-center bg-cover relative">
                                    <div className="w-[25%] h-[25%] min-w-[6px] min-h-[6px] rounded-[100%] absolute right-0 bottom-0 overflow-hidden">
                                        <div className="m-[var(max(1px_10%))] rounded-[100%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={"/profile"}>
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Avatar>
                                            <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@shadcn" className="rounded-full inline-flex h-[40px] w-[40px] overflow-hidden mr-5"></AvatarImage>
                                            <AvatarFallback>DN</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <Link href={"/profile"}>
                                                <DropdownMenuItem>
                                                    <User className="mr-2 h-4 w-4" />
                                                    <span>Profile</span>
                                                </DropdownMenuItem>
                                            </Link>
                                            <Link href={"/setting"}>
                                                <DropdownMenuItem>
                                                    <Settings className="mr-2 h-4 w-4" />
                                                    <span>Settings</span>
                                                </DropdownMenuItem>
                                            </Link>
                                            <Link href={"/"}>
                                                <DropdownMenuItem>
                                                    <LogOut className="mr-2 h-4 w-4" />
                                                    <span>Log Out</span>
                                                </DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
function moment(arg0: string) {
    throw new Error("Function not implemented.");
}

