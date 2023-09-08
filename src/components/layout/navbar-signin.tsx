"use client"

import {
    Bell,
    CalendarDays,
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
// import { Icons } from "@/components/icons"
import {
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Button } from "../ui/button";

// test commit

export function NavbarSignIn() {
    return (
        <div className="relative w-[100%] p-[0.75rem_1rem] z-[200] flex justify-between items-center">
            <div className="items-center flex m-[0px]-[-4px] p-[4px]-[10px]-[4px]-[4px]">
                <Link href={"/"} className="ml-8 inline">
                    <p className="text-opacity-50 text-green-500 font-bold">DONACE</p>
                </Link>
            </div>
            <div id="center-and-right" className="flex justify-between items-center flex-[1_1_0%] max-w-[calc(var(820px))] min-w-[0px]">
                <div id="center-wrapper">
                    <div id="center-links-wrapper" className="gap-[1.25rem] p-[0px_1rem] text-[0.875rem] flex items-baseline max-w-[var(820px)] m-[0_auto]">
                        <Link href={"/"} className="font-[500] no-underline">
                            <div className="gap-[.5rem] flex items-center">
                                <div id="icon">
                                    <Ticket className="block w-[1rem] h-[1rem] align-middle" />
                                </div>
                                <div id="label" className="font-[500]">Events</div>
                            </div>
                        </Link>
                        <Link href={"/"} className="font-[500] no-underline">
                            <div className="gap-[.5rem] flex items-center">
                                <div id="icon">
                                    <CalendarDays className="block w-[1rem] h-[1rem] align-middle" />
                                </div>
                                <div id="label" className="font-[500]">Calendars</div>
                            </div>
                        </Link>
                        <Link href={"/"}>
                            <div className="gap-[.5rem] flex items-center">
                                <div id="icon">
                                    <Compass className="block w-[1rem] h-[1rem] align-middle" />
                                </div>
                                <div id="label" className="font-[500]">Explore</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="right-wrapper" className="flex items-center gap-[1rem]">
                <div className="text-[0.875rem] relative" id="time">
                    <Clock format={'HH:mm'} ticking={true} timezone={'VN/ICT'}/> 
                </div>
                <Link href={"/"} className="relative">
                    <div className="text-[0.875rem] whitespace-nowrap" id="label-nowrap">
                        Create&nbsp;
                        <span>event</span>
                    </div>
                </Link>
                <Link href={"/"} >
                    <Button variant="nothing" className="p-[0.25rem_0.5rem] m-[-0.25rem_-0.5rem] relative inline-flex min-w-0">
                        <Search className="block w-[1rem] h-[1rem] align-middle"/>
                    </Button>
                </Link>
                <Link href={"/"} >
                    <Button variant="nothing" className="p-[0.25rem_0.5rem] m-[-0.25rem_-0.5rem] relative inline-flex min-w-0">
                        <div className="inline-flex min-w-0">
                            <div id="bell-icon" className="inline-flex relative">
                                <div id="icon">
                                    <Bell className="block w-[1rem] h-[1rem] align-middle"/>
                                </div>
                            </div>
                        </div>
                    </Button>
                    {/* <div className="inline-flex min-w-0">
                        <div className="inline-flex relative">
                            <div>
                                <Button variant="nothing">
                                    <Search className="inline-flex w-[1rem] h-[1rem] align-middle"/>
                                </Button>
                            </div>
                        </div>
                    </div> */}
                </Link>
            </div>
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
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log Out</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>
            </Link>
            {/* <NavigationMenu className="pt-4">
                <NavigationMenuList>
                    <div className="items-baseline">
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <p className="text-opacity-50 text-green-500 font-bold">DONACE</p>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </div>
                    <NavigationMenuItem>
                        <Link href={"/profile"}>
                            <div className="gap-5">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-full inline-flex h-[45px] w-[45px] justify-center overflow-hidden"></AvatarImage>
                                    <AvatarFallback>DN</AvatarFallback>
                                </Avatar>
                            </div>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu> */}
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
