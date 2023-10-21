"use client";
import * as React from "react"
import Axios from "axios";
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
import { ArrowLeft, DoorOpen, LogIn, Smartphone } from "lucide-react"
import { LoginAPI } from "@/shared/allApiHere"
import { set } from "date-fns";

export const metadata: Metadata = {
  title: 'Donace Sign In'
}

export function LoginFormCard() {

  // Set email
  const [inputEmail, setInputEmailValue] = React.useState('');
  const handleInputEmailChange = (event) => {
    setInputEmailValue(event.target.value);
  };

  //set password
  const [inputPassword, setInputPasswordValue] = React.useState('');
  const handleInputPasswordChange = (event) => {
    setInputPasswordValue(event.target.value);
  };


  async function DemoLogin() {
    const ModelLogin = {
      email: inputEmail,
      password: inputPassword
    }
    if (inputEmail.length === 0 || inputPassword.length === 0) {
      console.log('Please input enough information')
    }
    else {
      await Axios.post(`http://34.126.111.117/api/Authentication/login`, ModelLogin,)
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        })
    }
  }
  return (
    <div id="page-contnet" className="box-border">
      <div id="onboarding-card" className="pt-[15vh] pl-4 pr-4 flex justify-center">
        <Card id="onboarding-card content" className="opacity-[1] flex-1 p-6 bg-[rgba(255,255,255,0.8)] backdrop-blur-lg max-w-[360px] rounded-[1.25rem] h-fit overflow-visible">
          <div className="h-52 relative">
            <CardHeader id="animated-content" className="absolute top-0 w-full">
              <div className="opacity-[1] transform-none mb-[1rem!important]">
                <div id="icon" className="relative w-16 h-16 flex items-center justify-center bg-[rgba(19,21,23,0.04)] rounded-full">
                  <DoorOpen className="w-8 h-8 text-[#939597] block align-middle" />
                  <ArrowLeft className="top-6 left-10 absolute overflow-visible text-[#939597] stroke-gray-500 block w-4 h-4 align-middle" />
                </div>
              </div>
              <div className="opacity-[1] transform-none">
                <div className="gap-[.5rem] pt-[.25rem!important] mb-[1rem!important] flex flex-col">
                  <CardTitle className="font-semibold text-[1.375rem] mb-[0!important] mt-[0!important]">Welcome to DONACE.</CardTitle>
                  <CardDescription className="pt-[0.125rem] pb-1 text-[0.875rem] text-[rgba(19,21,23,0.64)]">Please sign in or sign up below.</CardDescription>
                </div>
              </div>
            </CardHeader>
          </div>
          <CardContent className="">
            <form action={"#"}>
              <div id="spread" className="flex justify-between items-center">
                <Label id="lux-input-label" className="text-[0.875rem] cursor-pointer block font-medium text-[rgba(19,21,23,0.64)] transition-all duration-300 ease-in-out pb-[.5rem!important] pt-[.25rem!important] mb-[0!important]">
                  <div>Email</div>
                </Label>
                <button type="button" className="text-[0.875rem] text-[rgba(19,21,23,0.36)] border-[#939597] bg-transparent p-0 h-auto border-none rounded-none outline-offset-[.375rem] gap-[0.375rem] cursor-pointer transition-all duration-300 ease-in-out font-medium relative whitespace-nowrap justify-center outline-none max-w-full w-fit pb-[.5rem!important] pt-[.25rem!important] flex items-center m-0 leading-[1.5]">
                  <Smartphone className="overflow-visible w-[15px] h-[15px] mr-[0.0225rem] stroke-[2.5] flex-shrink-0 block align-middle" />
                  <Link href={"/login-phone-number"}>
                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                      Use Phone Number
                    </div>
                  </Link>
                </button>
                {/* <div className="flex flex-col space-y-1.5">
                  <div className="flex justify-between items-center my-1">
                    <Label htmlFor="name" className="text-[14px] font-medium leading-[14px]">Email</Label>
                    <Label htmlFor="name" className="flex justify-between space-x-1 text-[14px] font-medium leading-[14px] m-[-4px]-[0px] p-[4px]-[0px]">
                      <Smartphone className="w-[15px] h-[15px]" />
                      <Link href={"/login-phone-number"}>
                        Use Phone Number
                      </Link>
                    </Label>
                  </div>
                  <Input value={inputEmail} onChange={handleInputEmailChange} className="font-medium rounded-[8px] inline-block leading-[16px]" id="email" placeholder="your@email.com" />
                </div> */}
              </div>
              <div id="lux-input-wrapper"></div>
            </form>
            <form className="mt-4">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex justify-between items-center my-1">
                    <Label htmlFor="name" className="text-[14px] font-medium leading-[14px]">Password</Label>
                  </div>
                  <Input value={inputPassword} onChange={handleInputPasswordChange} type="password" className="font-medium rounded-[8px] inline-block leading-[16px]" id="password" placeholder="what is your password?" />
                </div>
              </div>
            </form>
          </CardContent>
          {/* <CardFooter className="flex justify-between">
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
          </CardFooter> */}
        </Card>
      </div>
    </div>
  )
}
