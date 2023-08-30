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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "../ui/separator"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMobile, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from "@radix-ui/react-avatar"

export function LoginFormCard() {
  return (
    <div className="w-full lg:max-w-[360px]">
    <Card>
      <CardHeader>
        {/* <FontAwesomeIcon icon={faRightToBracket} className="w-[50px] h-[50px] bg-gray-400 bg-transparent rounded-2xl bg-opacity-50 caret-white"/> */}
        <CardTitle className="text-4xl font-bold text-green-500 my-0.5">Welcome to DONACE.</CardTitle>
        <CardDescription className="text-base">Please sign in or sign up below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div className="flex justify-between items-center my-1">
                <Label htmlFor="name">Email</Label>
                  {/* <Label htmlFor="name" className="flex justify-between space-x-5">
                    <FontAwesomeIcon className="w-[15px] h-[15px] " icon={faMobile} />
                    Use Phone Number</Label> */}
              </div>
              <Input id="name" placeholder="your@email.com"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="grid w-full grid-cols-1">
            <Button className="w-full col-span-1 bg-gray-950">Continue with Email</Button>
            <Separator className="w-full col-span-1 my-4" />
            <Button className="w-full col-span-1" variant={"secondary"}>
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
