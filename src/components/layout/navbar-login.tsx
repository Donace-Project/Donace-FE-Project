"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Clock from 'react-live-clock';

import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"

export function NavbarLogin() {
  return (
    <div className="relative w-[100%] p-[0.75rem_1rem] z-[200] flex justify-between items-center">
      <div className="items-center flex m-[0px]-[-4px] p-[4px]-[10px]-[4px]-[4px]">
        <Link href={"/home"} className="ml-8 inline">
          <p className="text-opacity-50 text-green-500 font-bold">DONACE</p>
        </Link>
      </div>
      <div className="flex items-center gap-[1rem]">
        <div className="text-[0.875rem] relative" id="time">
          <Clock format={"hh:mm"} ticking={true} />
        </div>
        <Button variant="ghostSignin">
          <Link href={"/login"} legacyBehavior passHref>
            <p className="text-green-500 font-bold">Sign In</p>
          </Link>
        </Button>
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
