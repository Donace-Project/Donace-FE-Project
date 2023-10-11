import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "../ui/separator"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"
import type { Metadata } from 'next'
import { Smartphone } from "lucide-react"
import { LoginAPI } from "@/shared/allApiHere"

export const metadata: Metadata = {
  title: 'Donace Sign In'
}

export function LoginFormCard() {
  async function DemoLogin() {
    const uploadResponse = await LoginAPI({
      email: "",
      password: ""
    })
    console.log(uploadResponse)
  }
  return (
    <div className="lg:max-w-[360px] rounded-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-green-500 my-0.5">Welcome to DONACE.</CardTitle>
          <CardDescription className="text-base text-[14px] leading-[21px] p-[2px]-[0px]-[4px]">Please sign in or sign up below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <div className="flex justify-between items-center my-1">
                  <Label htmlFor="name" className="text-[14px] font-medium leading-[14px]">Email</Label>
                  <Label htmlFor="name" className="flex justify-between space-x-1 text-[14px] font-medium leading-[14px] m-[-4px]-[0px] p-[4px]-[0px]">
                    <Smartphone className="w-[15px] h-[15px]" />
                    <Link href={"/login-phone-number"}>
                      Use Phone Number
                    </Link>
                  </Label>
                </div>
                <Input className="font-medium rounded-[8px] inline-block leading-[16px]" id="name" placeholder="your@email.com" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="grid w-full grid-cols-1">
            <Link href={"/home"}>
              <Button className="w-full col-span-1 bg-gray-950 font-medium leading-[24px]">Continue with Email</Button>
            </Link>
            <Separator className="w-full col-span-1 my-4" />
            <Button onClick={DemoLogin} className="w-full col-span-1" variant={"secondary"}>
              <div className="flex justify-between space-x-1.5 items-center">
                <span className="w-[16px] h-[16px]"><FontAwesomeIcon icon={faGoogle} /></span>
                <p>
                  Sign in with Google
                </p>
              </div>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
