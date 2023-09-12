'use client';

import * as React from "react"

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import { Metadata } from "next";
import { off } from "process";
import { Mail } from "lucide-react";

const preventMinus = (e) => {
  if (e.code === 'Minus') {
    e.preventDefault();
  }
};

const preventPasteNegative = (e) => {
  const clipboardData = e.clipboardData || window.Clipboard;
  const pastedData = parseFloat(clipboardData.getData('text'));

  if (pastedData < 0) {
    e.preventDefault();
  }
};


// document.getElementById('phonenumber').addEventListener('keypress', test_fn);

export const metadata: Metadata = {
  title: 'Donace Sign In'
}

export function LoginPhoneNumber() {
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
                  <Label htmlFor="name" className="text-[14px] font-medium leading-[14px]">Phone Number</Label>
                  <Label htmlFor="name" className="flex justify-between space-x-1 text-[14px] font-medium leading-[14px] m-[-4px]-[0px] p-[4px]-[0px]">
                    <Mail className="w-[15px] h-[15px]"/>
                    {/* <FontAwesomeIcon className="w-[15] h-[15px]" icon={faEnvelope} /> */}
                    <Link href={"/login"}>
                      Use Email
                    </Link>
                  </Label>
                </div>
                <PhoneInput
                  country={'vn'}
                  disableDropdown
                  autocompleteSearch={false}
                  containerStyle={{
                    fontSize: '500',
                    borderRadius: '8px',
                    display: 'inline-block',
                    lineHeight: '16px'
                  }}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                />
                {/* <Input id="phonenumber" className="font-medium rounded-[8px] inline-block leading-[16px]" type="number" placeholder="+84 123 456 789" onKeyPress={preventMinus} onPaste={preventPasteNegative}/> */}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="justify-center w-full">
            <Button className="w-full col-span-1 bg-gray-950 font-medium leading-[24px]">
              <Link href={"/login-verify"}>
                Continue with Phone
              </Link>
            </Button>
            <Separator className="w-full my-4" />
            <Button className="w-full" variant={"secondary"}>
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
// function test_fn(e){
//   if (e.charCode == 46) e.preventDefault(); // not allowed to type .
// }
function usestate(arg0: string): [any, any] {
  throw new Error("Function not implemented.")
}

