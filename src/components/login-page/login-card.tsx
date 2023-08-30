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

export function LoginFormCard() {
  return (
    <div className="w-full lg:max-w-[360px]">
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Welcome to Donace</CardTitle>
        <CardDescription>Please sign in or sign up below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div className="flex justify-between items-center my-2">
                <Label htmlFor="name">Email</Label>
                <Label htmlFor="name"> Use Phone Number</Label>
              </div>
              <Input id="name" placeholder="Email address.."/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="grid w-full grid-cols-1">
            <Button className="w-full col-span-1">Continue with Email</Button>
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
