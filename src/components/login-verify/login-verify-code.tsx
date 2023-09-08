'use client';

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faPaste } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Donace Sign In'
}

export function LoginVerify() {
  const [inputs, setInputs] = React.useState(["", "", "", "", "", ""]);
  const inputRefs = React.useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    // Nếu giá trị của ô input hiện tại không rỗng và không phải là ô input cuối cùng
    if (value !== "" && index < inputs.length - 1) {
      inputRefs.current[index + 1].focus(); // Tập trung vào ô input tiếp theo
    }
  };

  const handlePaste = (e) => {
    // Xử lý sự kiện dán code nếu cần
  };



  return (
    <Card className="w-full lg:max-w-[360px] rounded-2xl">
      <Link href={"/login"}>
          {/* <span className="w-[16px] h-[16px]"><FontAwesomeIcon icon={faArrowLeft} /></span> */}
          {/* <Badge variant="secondary" className="m-4 stroke-slate-100">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Badge> */}
          <Button variant="link" className="m-1">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Link>
      <CardHeader>
        <CardTitle className="text-2xl text-green-500 my-0.5">Enter Code</CardTitle>
        <CardDescription className="text-base text-[14px] leading-[21px] p-[2px]-[0px]-[4px]">We sent a code to your number. Please enter it below.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        {inputs.map((value, index) => (
        <Input key={index} type="number" min={0} max={9} className="rounded-[0.5rem] text-[1.375rem] font-medium text-center h-[2.75rem] w-[2.75rem] min-w-[2rem] p-[1px]-[2px]" value={value} onChange={(e) => handleChange(e, index)} ref={(input) => (inputRefs.current[index] = input)}></Input>
      ))}
        {/* <Input type="number" min={0} className="rounded-[0.5rem] text-[1.375rem] font-medium text-center h-[2.75rem] w-[2.75rem] min-w-[2rem] p-[1px]-[2px]"></Input>
        <Input type="number" min={0} className="rounded-[0.5rem] text-[1.375rem] font-medium text-center h-[2.75rem] w-[2.75rem] min-w-[2rem] p-[1px]-[2px]"></Input>
        <Input type="number" min={0} className="rounded-[0.5rem] text-[1.375rem] font-medium text-center h-[2.75rem] w-[2.75rem] min-w-[2rem] p-[1px]-[2px]"></Input>
        <Input type="number" min={0} className="rounded-[0.5rem] text-[1.375rem] font-medium text-center h-[2.75rem] w-[2.75rem] min-w-[2rem] p-[1px]-[2px]"></Input>
        <Input type="number" min={0} className="rounded-[0.5rem] text-[1.375rem] font-medium text-center h-[2.75rem] w-[2.75rem] min-w-[2rem] p-[1px]-[2px]"></Input> */}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button variant="secondary" className="space-x-[1vh]">
          <FontAwesomeIcon icon={faPaste} className="w-[16px] h-[16px]"/>
          <span>Paste Code</span>
        </Button>
        <Button variant={"ghostSignin"}>Resend Code</Button>
      </CardFooter>
    </Card>
  )
}
