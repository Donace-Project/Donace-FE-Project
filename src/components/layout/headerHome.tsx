"use client";
import Link from "next/link";
// import { PropsWithChildren } from "react";
import React from "react";
import { Bell, CalendarRange, Compass, GraduationCap, Home, LifeBuoy, Plus, Search, Ticket, User2 } from "lucide-react";
import ThoiGian from "../clock/clock"
import { Button } from "../ui/button";
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function HeaderHome() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) { // Điều kiện để xác định khi nên thay đổi màu
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id="nav-wrapper" className={scrolled ? 'header-scrolled' : 'bg-[#F4F5F6]'}>
            <nav id="spread" className="relative w-full p-[0.75rem_1rem] z-[200] flex justify-between items-center">
                <Link href={"/home"} className="relative z-[1] transition-all duration-300 ease-in-out cursor-pointer no-underline">
                    <div id="logo" className="m-[0_-4px] p-[4px] pr-[10px] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out flex items-center font-semibold">
                        <GraduationCap className="w-[20px] h-[20px] block align-middle" />
                    </div>
                </Link>
                <div id="center-and-right" className="flex justify-between items-center flex-1 max-w-[calc(820px+((100%-820px)/2))]">
                    <div id="center-wrapper">
                        <div id="center-links" className="gap-5 p-[0_1rem] text-[0.875rem] flex items-baseline max-w-[820px] m-[0_auto]">
                            <Link href={"/home"} className="text-[rgb(19,21,23)] pt-1 font-medium transition-all duration-300 ease-in-out cursor-pointer no-underline">
                                <div className="gap-[.5rem] flex items-center">
                                    <div id="icon">
                                        <Ticket className="block w-4 h-4 align-middle" />
                                    </div>
                                    <div id="label">Events</div>
                                </div>
                            </Link>
                            <Link href={"/calendar"} className="text-[rgba(19,21,23,0.36)] hover:text-[rgb(19,21,23)] pt-1 font-medium transition-all duration-300 ease-in-out cursor-pointer no-underline">
                                <div className="gap-[.5rem] flex items-center">
                                    <div id="icon">
                                        <CalendarRange className="block w-4 h-4 align-middle" />
                                    </div>
                                    <div id="label">Calendars</div>
                                </div>
                            </Link>
                            <Link href={"/explore"} className="text-[rgba(19,21,23,0.36)] hover:text-[rgb(19,21,23)] pt-1 font-medium transition-all duration-300 ease-in-out cursor-pointer no-underline">
                                <div className="gap-[.5rem] flex items-center">
                                    <div id="icon">
                                        <Compass className="block w-4 h-4 align-middle" />
                                    </div>
                                    <div id="label">Expolore</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div id="right-wrapper" className="flex items-center gap-4">
                        <div id="time" className="text-[rgba(19,21,23,0.36)] text-[0.875rem] relative">
                            <ThoiGian />
                        </div>
                        <Link href={"/create"} className="hover:text-[rgb(19,21,23)] text-[rgba(19,21,23,0.64)] relative transition-all duration-300 ease-in-out outline-0 font-medium rounded-[0.5rem] justify-center flex items-center cursor-pointer no-underline">
                            <div id="label" className=" text-[0.875rem] whitespace-nowrap">
                                Create
                                <span id="desktop"> Event</span>
                            </div>
                        </Link>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="nothing" className=" cursor-pointer p-[0.25rem_0.5rem] m-[-0.25rem_-0.5rem] relative inline-flex min-w-0 font-[500] rounded-[0.5rem] bg-transparent ">
                                    <Search className="block w-[1rem] h-[1rem] align-middle hover:text-[rgb(19,21,23)] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="opacity-[1] overflow-hidden flex flex-col w-full max-w-[580px] rounded-[0.5rem] shadow-lg bg-[#fffd] backdrop-blur-lg">
                                <Command>
                                    <CommandInput placeholder="Search for events, calendars and more..." id="search-input" className="w-full box-border text-[1.25rem] p-[0.75rem_1.25rem] outline-none m-0" />
                                    <div id="result" className="max-h-[45vh] overflow-auto p-2">
                                        <CommandList>
                                            <CommandEmpty className="flex-col p-[3rem!important] justify-center flex items-center">
                                                <div id="icon" className="w-12 h-12 bg-[rgba(19,21,23,0.04)] text-[rgba(19,21,23,0.36)] rounded-full mb-4 justify-center flex items-center">
                                                    <Search className="w-6 h-6 block align-middle" />
                                                </div>
                                                <div id="text" className="text-[rgba(19,21,23,0.36)] text-[1.125rem]">No Results Found</div>
                                            </CommandEmpty>
                                            <CommandGroup heading="Shortcuts" className="text-base text-[#b3b5b7]">
                                                <CommandItem>
                                                    <Link href={"/create"}>
                                                        <button id="spread-select" className="flex text-inherit transition-none duration-0 ease-in-out delay-0 w-full border-none rounded-[0.5rem] cursor-pointer justify-between m-0 leading-[1.5]">
                                                            <div className="min-w-0 flex items-center">
                                                                <div id="img" className="w-[24px] h-[24px] rounded-[4px] mr-3 justify-center flex items-center">
                                                                    <Plus className="block w-4 h-4 align-middle" />
                                                                </div>
                                                                <div id="label" className="min-w-0 flex items-baseline">
                                                                    <div id="text" className="text-base overflow-hidden text-ellipsis whitespace-nowrap">Create Event</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </Link>
                                                </CommandItem>
                                                <CommandItem>
                                                    <Link href={"/home"}>
                                                        <button id="spread-1" className="flex text-inherit transition-none duration-0 ease-in-out delay-0 w-full border-none rounded-[0.5rem] cursor-pointer justify-between m-0 leading-[1.5]">
                                                            <div className="min-w-0 flex items-center">
                                                                <div id="img" className="w-[24px] h-[24px] rounded-[4px] mr-3 justify-center flex items-center">
                                                                    <Home className="block w-4 h-4 align-middle" />
                                                                </div>
                                                                <div id="label" className="min-w-0 flex items-baseline">
                                                                    <div id="text" className="text-base overflow-hidden text-ellipsis whitespace-nowrap">Open Home</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </Link>
                                                </CommandItem>
                                                <CommandItem>
                                                    <button id="spread-2" className="flex text-inherit transition-none duration-0 ease-in-out delay-0 w-full border-none rounded-[0.5rem] cursor-pointer justify-between m-0 leading-[1.5]">
                                                        <div className="min-w-0 flex items-center">
                                                            <div id="img" className=" w-[24px] h-[24px] rounded-[4px] mr-3 justify-center flex items-center">
                                                                <LifeBuoy className="block w-4 h-4 align-middle" />
                                                            </div>
                                                            <div id="label" className="min-w-0 flex items-baseline">
                                                                <div id="text" className="text-base overflow-hidden text-ellipsis whitespace-nowrap">Open Help</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </CommandItem>
                                            </CommandGroup>
                                            <CommandGroup heading="Calendars" className="text-base text-[0.8125rem] text-[#b3b5b7]">
                                                <CommandItem>
                                                    <Link href={"/my-calendar"}>
                                                        <button id="spread-avatar-1" className="flex text-inherit transition-none duration-0 ease-in-out delay-0 w-full border-none rounded-[0.5rem] cursor-pointer justify-between items-center m-0 bg-transparent leading-[1.5]">
                                                            <div className="min-w-0 flex items-center">
                                                                <div id="img" className="w-[24px] h-[24px] rounded-[4px] mr-3 text-[#b3b5b7] justify-center flex items-center">
                                                                    <div id="avatar-wrapper small">
                                                                        <Avatar className="w-[24px] h-[24px] rounded-[1000px] relative bg-[#f4f5f6] align-middle">
                                                                            <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                                                        </Avatar>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-0 flex items-baseline">
                                                                    <div id="text" className="text-base overflow-hidden text-ellipsis whitespace-nowrap">Personal</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </Link>
                                                </CommandItem>
                                                <CommandItem>
                                                    <Link href={"/my-calendar"}>
                                                        <button id="spread-avatar-2" className="flex text-inherit transition-none duration-0 ease-in-out delay-0 w-full border-none rounded-[0.5rem] cursor-pointer justify-between items-center m-0 bg-transparent leading-[1.5]">
                                                            <div className="min-w-0 flex items-center">
                                                                <div id="img" className="w-[24px] h-[24px] rounded-[4px] mr-3 text-[#b3b5b7] justify-center flex items-center">
                                                                    <div id="avatar-wrapper small">
                                                                        <Avatar className="w-[24px] h-[24px] rounded-[1000px] relative bg-[#f4f5f6] align-middle">
                                                                            <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                                                        </Avatar>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-0 flex items-baseline">
                                                                    <div id="text" className="text-base overflow-hidden text-ellipsis whitespace-nowrap">Graduation Thesis</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </Link>
                                                </CommandItem>
                                            </CommandGroup>
                                            <CommandGroup heading="Hosting" className="text-base text-[0.8125rem] text-[#b3b5b7]">
                                                <CommandItem>
                                                    <button id="spread-hosting-1" className="flex text-inherit transition-none duration-0 ease-in-out delay-0 w-full border-none rounded-[0.5rem] cursor-pointer justify-between items-center m-0 bg-transparent leading-[1.5]">
                                                        <div className="min-w-0 flex items-center">
                                                            <div id="img" className="w-[24px] h-[24px] rounded-[4px] mr-3 text-[#b3b5b7] justify-center flex items-center">
                                                                <div id="event-cal" className="w-[24px] h-[24px] overflow-hidden text-center border border-solid border-[rgba(19,21,23,0.08)] rounded-[4px] bg-[#fff]">
                                                                    <div id="event-month" className="uppercase text-[6px] font-semibold bg-[#ebeced]">Sep</div>
                                                                    <div id="event-date" className="text-[9px] leading-[13px] font-medium">5</div>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-0 flex items-baseline">
                                                                <div id="text" className="text-base overflow-hidden text-ellipsis whitespace-nowrap">Khi nào mới xong</div>
                                                                <div id="text-tertiary" className="whitespace-nowrap overflow-hidden text-ellipsis text-[#b3b5b7] ml-[.5rem!important]">Dec 12, 12:12 PM</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </CommandItem>
                                            </CommandGroup>
                                            <CommandGroup heading="Attending" className="text-base text-[0.8125rem] text-[#b3b5b7]">
                                                <CommandItem>
                                                    <Link href={"/create-calendar"}>
                                                        <button id="spread-hosting-2" className="flex text-inherit transition-none duration-0 ease-in-out delay-0 w-full border-none rounded-[0.5rem] cursor-pointer justify-between items-center m-0 bg-transparent leading-[1.5]">
                                                            <div className="min-w-0 flex items-center">
                                                                <div id="img" className="w-[24px] h-[24px] rounded-[4px] mr-3 text-[#b3b5b7] justify-center flex items-center">
                                                                    <div id="event-cal" className="w-[24px] h-[24px] overflow-hidden text-center border border-solid border-[rgba(19,21,23,0.08)] rounded-[4px] bg-[#fff]">
                                                                        <div id="event-month" className="uppercase text-[6px] font-semibold bg-[#ebeced]">Dec</div>
                                                                        <div id="event-date" className="text-[9px] leading-[13px] font-medium">12</div>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-0 flex items-baseline">
                                                                    <div id="text" className="text-base overflow-hidden text-ellipsis whitespace-nowrap">Cột sống anh không ổn</div>
                                                                    <div id="text-tertiary" className="whitespace-nowrap overflow-hidden text-ellipsis text-[#b3b5b7] ml-[.5rem!important]">Dec 12, 12:12 PM</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </Link>
                                                </CommandItem>
                                            </CommandGroup>
                                        </CommandList>
                                    </div>
                                </Command>
                            </DialogContent>
                        </Dialog>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="nothing" className="p-[0.25rem_0.5rem] m-[-0.25rem_-0.5rem] relative inline-flex min-w-0">
                                    <Bell className="block w-[1rem] h-[1rem] align-middle hover:text-[rgb(19,21,23)] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mr-16 top-[42px] max-h-[796px] z-[1001] rounded-[0.5rem] shadow-lg backdrop-blur-lg">
                                <div id="notification-container" className="w-[300px] max-w-[300px] min-h-[300px] max-h-[60vh] overflow-auto">
                                    <div>
                                        <div className="text-[0.875rem]">
                                            <div id="notification-row" className="relative p-[0.875rem_1rem] duration-[0.3s] ease-in-out">
                                                <Link href={""} className="text-inherit transition-all duration-300 ease-in-out cursor-pointer no-underline">
                                                    <div id="divider animated" className="transition-all duration-300 ease-in-out"></div>
                                                    <div className="gap-3 flex items-start">
                                                        <div id="icon-wrapper" className="relative mt-[0.125rem]">
                                                            <div id="avatar">
                                                                <div id="avatar-wrapper">
                                                                    <Avatar className="rounded-[1000px] bg-[#f4f5f6] relative align-middle">
                                                                        <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                                                    </Avatar>
                                                                </div>
                                                            </div>
                                                            <div id="icon" className="bg-[#07a460] text-white rounded-[100px] w-4 h-4 absolute right-[-0.125rem] bottom-[-0.125rem] justify-center flex items-center">
                                                                <User2 className="w-[0.5625rem] h-[0.5625rem] block align-middle" />
                                                            </div>
                                                        </div>
                                                        <div id="break-word" className="break-words min-w-0 flex-1 flex flex-col">
                                                            <div>
                                                                <span>
                                                                    <strong className="font-medium">Donace </strong>
                                                                    registered for
                                                                    <strong className="font-medium"> DATN</strong>
                                                                </span>
                                                                <br />
                                                                <span className="text-[rgba(19,21,23,0.36)]">Sep 5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div id="load-more-bserver"></div>
                                        <div className="min-h-[1px]"></div>
                                    </div>
                                </div>
                            </DropdownMenuContent>
                            {/* <div className="left-[284px] top-[-4px] absolute"></div> */}
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div id="avatar-wrapper small" className="cursor-pointer">
                                    <Avatar className="w-[24px] h-[24px] rounded-[1000px] bg-center bg-cover bg-[#fff] relative">
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                    </Avatar>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mr-5 top-[42px] max-h-[796px] z-[1001] rounded-[0.5rem] shadow-lg backdrop-blur-lg">
                                <div id="switcher-menu" className="w-[260px] p-[0.25rem_0.25rem_0.375rem]">
                                    <div id="header">
                                        <Link href={"/home"} className="transition-all duration-300 ease-in-out cursor-pointer no-underline">
                                            <div id="switcher-row" className="cursor-pointer p-[0.25rem_0.75rem] gap-3 rounded-[0.5rem] relative z-[1] transition-all duration-300 ease-in-out flex items-center">
                                                <div id="avatar-wrapper">
                                                    <div id="avatar" className="w-[32px] h-[32px] rounded-full bg-center bg-cover bg-[#fff] relative">
                                                        <Avatar>
                                                            <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@donace" />
                                                        </Avatar>
                                                    </div>
                                                </div>
                                                <div id="info" className="min-w-0 flex-1 ml-2">
                                                    <div id="name" className="font-medium overflow-hidden text-ellipsis whitespace-nowrap text-[rgb(19,21,23)]">Nguyễn Gia Bảo</div>
                                                    <div id="desc" className="text-[0.8125rem] text-[rgba(19,21,23,0.36)] gap-[.25rem] flex">
                                                        <div className="gap-[.25rem] min-w-0 flex items-center">
                                                            <div className="overflow-hidden text-ellipsis whitespace-nowrap min-w-0 flex-1">Personal</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div id="divider" className="border-t border-solid border-[rgba(19,21,23,0.08)] pt-[0.375rem] m-[0.375rem_-0.25rem_0px]"></div>
                                    <div id="footer-options">
                                        <Link href={"/profile"} className="transition-all duration-300 ease-in-out cursor-pointer no-underline">
                                            <div id="animated" className="cursor-pointer text-[rgba(19,21,23,0.64)] p-[0.375rem_0.75rem] rounded-[0.5rem] transition-all duration-300 ease-in-out text-[0.875rem] gap-4 flex items-center">
                                                <span className="flex-1">View Profile</span>
                                            </div>
                                        </Link>
                                        <Link href={"/setting"} className="transition-all duration-300 ease-in-out cursor-pointer no-underline">
                                            <div id="animated" className="cursor-pointer text-[rgba(19,21,23,0.64)] p-[0.375rem_0.75rem] rounded-[0.5rem] transition-all duration-300 ease-in-out text-[0.875rem] gap-4 flex items-center">
                                                <span className="flex-1">Settings</span>
                                            </div>
                                        </Link>
                                        <Link href={"/"} className="transition-all duration-300 ease-in-out cursor-pointer no-underline">
                                            <div id="animated" className="cursor-pointer text-[rgba(19,21,23,0.64)] p-[0.375rem_0.75rem] rounded-[0.5rem] transition-all duration-300 ease-in-out text-[0.875rem] gap-4 flex items-center">
                                                <span className="flex-1">Sign Out</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </div>
        // <div className="mr-4 hidden md:flex">
        //     <Link href={"/"} className="mr-6 flex items-center space-x-2">
        //         {/* Donace */}
        //         <span className="text-cyan-500 hidden font-bold sm:inline-block">Donace</span>
        //     </Link>
        //     {/* <NavigationMenu>
        //         <NavigationMenuList>
        //             <NavigationMenuItem>
        //                 <NavigationMenuTrigger id="radix-:Ripj9:-trigger-radix-:R3ipj9" aria-controls="radix-:Ripj9:-trigger-radix-:R3ipj9:">Getting started</NavigationMenuTrigger>
        //                 <NavigationMenuContent>
        //                     <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        //                         <li className="row-span-3">
        //                             <NavigationMenuLink asChild>
        //                                 <a
        //                                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
        //                                     href="/"
        //                                 >
        //                                     <div className="mb-2 mt-4 text-lg font-medium">
        //                                         shadcn/ui
        //                                     </div>
        //                                     <p className="text-sm leading-tight text-muted-foreground">
        //                                         Beautifully designed components built with Radix UI and
        //                                         Tailwind CSS.
        //                                     </p>
        //                                 </a>
        //                             </NavigationMenuLink>
        //                         </li>
        //                         <ListItem href="/docs" title="Introduction">
        //                             Re-usable components built using Radix UI and Tailwind CSS.
        //                         </ListItem>
        //                         <ListItem href="/docs/installation" title="Installation">
        //                             How to install dependencies and structure your app.
        //                         </ListItem>
        //                         <ListItem href="/docs/primitives/typography" title="Typography">
        //                             Styles for headings, paragraphs, lists...etc
        //                         </ListItem>
        //                     </ul>
        //                 </NavigationMenuContent>
        //             </NavigationMenuItem>
        //         </NavigationMenuList>
        //     </NavigationMenu> */}
        // </div>
    )
}
