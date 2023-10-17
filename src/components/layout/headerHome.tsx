"use client";
import Link from "next/link";
// import { PropsWithChildren } from "react";
import React from "react";
import { Bell, CalendarRange, Compass, GraduationCap, Search, Ticket } from "lucide-react";
import ThoiGian from "../clock/clock"
import { Button } from "../ui/button";
import { useEffect, useState } from 'react';


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

  //className="fixed border-b border-solid border-transparent z-[10] w-full backdrop-blur-lg transition-all duration-300 ease-in-out"
  //className="opacity-[1] pointer-events-none fixed w-full h-[100px] z-[1] transition-all duration-300 ease-in-out"
    return (
            <div id="nav-wrapper" className={scrolled ? 'header-scrolled' : 'bg-[#F4F5F6]'}>
                {/* <div id="background" className={scrolled ? 'header-scrolled' : 'bg-gradient-to-r from-rgba(126,60,142,0.2) via-rgba(223,140,97,0.1) to-rgba(249,230,203,0)"'}></div> */}
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
                            <Link href={"/create"} className="text-[rgba(19,21,23,0.64)] relative transition-all duration-300 ease-in-out outline-0 font-medium rounded-[0.5rem] justify-center flex items-center cursor-pointer no-underline">
                                <div id="label" className="text-[0.875rem] whitespace-nowrap">
                                    Create
                                    <span id="desktop"> Event</span>
                                </div>
                            </Link>
                            <Button variant="nothing" className="cursor-pointer p-[0.25rem_0.5rem] m-[-0.25rem_-0.5rem] relative inline-flex min-w-0 font-[500] rounded-[0.5rem] bg-transparent">
                                <Search className="block w-[1rem] h-[1rem] align-middle" />
                            </Button>
                            <Button variant="nothing" className="p-[0.25rem_0.5rem] m-[-0.25rem_-0.5rem] relative inline-flex min-w-0">
                                <Bell className="block w-[1rem] h-[1rem] align-middle" />
                            </Button>
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
