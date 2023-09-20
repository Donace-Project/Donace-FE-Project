'use client';

import { Label } from "@radix-ui/react-label";
import Link from "next/link"
import * as React from "react"
import { Input } from "../ui/input";
import { AlertTriangle, ArrowUp, Lock, SatelliteDish, Save, ShieldCheck } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea"
import { faGithub, faGoogle, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Your name must be at least 2 characters.",
    }).max(20, {
        message: "Maximum characters must be 20.",
    }),
    bio: z.string().min(2).max(50),
    email: z.string().min(2, {
        message: "Your email must be at least 2 characters.",
    }).max(20),
    phoneNumber: z.number().min(2).max(12),
})

export default function SettingPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            bio: "",
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div id="page-content" className="box-border">
            <div id="sticky-page-header" className="hidden fixed w-[100%] top-[0px] pt-[0.25rem] z-10">
                <div id="zm-container" className="opacity-0 gap-[1rem] pl-[1rem_!important] pr-[1rem_!important] flex justify-between items-center max-w-[820px] m-[0_auto]">
                    <h3 className="text-[1.125rem] overflow-hidden text-ellipsis whitespace-nowrap pb-[.5rem!important] pt-[.5rem!important] mb-[0!important] leading-[1.2] font-[600] mt-[0]">
                        Settings
                    </h3>
                </div>
                <div id="tab-wrapper" className="opacity-0 pointer-events-none">
                    <div id="zm-container" className="max-w-[820px] m-[0_auto]">
                        <div id="page-header-tabs-wrapper" className="flex justify-between items-baseline">
                            <div id="tabs" className="flex max-w-[100%] overflow-auto min-w-[0px] gap-4 flex-[1_1]">
                                <div id="side-padding" className="pl-[var(1rem)-1rem]">&nbsp;</div>
                                <Link href={"/"} id="tab" className="select-all border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Account
                                </Link>
                                <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Preferences
                                </Link>
                                <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                    Payment
                                </Link>
                                <div id="side-padding" className="pl-[var(1rem)-1rem]"></div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-title-divier" className="border-b-[1px] border-solid border-gray-200"></div>
                </div>
            </div>
            <div id="page-header zm-container" className="opacity-[2] pt-[3rem] pl-[1rem!important] pr-[1rem!important] max-w-[820px] m-[0_auto]">
                <div className="gap-[.5rem] mb-[.5rem!important] flex justify-between items-center">
                    <h1 id="tab-title" className="text-[2rem] font-[600] mb-[0px] leading-[1.2] mt-[0]">Settings</h1>
                </div>
                <div></div>
            </div>
            <div id="tab-wrapper" className="m-auto pt-[0.5rem]">
                <div id="zm-container" className="pt-[.25rem!important] max-w-[820px] m-[0_auto]">
                    <div id="page-header-tabs-wrapper" className="flex justify-between items-baseline">
                        <div id="tabs" className="flex max-w-[100%] overflow-auto min-w-[0] gap-[1rem] flex-[1_1]">
                            <div id="side-padding" className="pl-[var(1rem)-1rem]">&nbsp;</div>
                            <Link href={"/"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
                                Account
                            </Link>
                            <Link href={"/"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Preferences
                            </Link>
                            <Link href={"/"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Payment
                            </Link>
                            <div id="side-padding" className="pl-[var(1rem)-1rem]"></div>
                        </div>
                    </div>
                </div>
                <div id="tab-title-divider" className="border-b-[1px] border-solid border-gray-200 mb-[1.75rem]"></div>
            </div>
            <div id="zm-container" className="pl-[1rem!important] pr-[1rem!important] max-w-[820px] m-[0_auto]">
                <div id="can-divide with-divider medium">
                    <div id="section-title-wrapper medium">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Your Profile</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-subtitle" className="mt-[-.875rem] mb-[1.25rem] text-gray-600 text-[1rem]">Choose how you are displayed as host or guest.</div>
                    </div>
                    <div id="wrapper" className="flex items-start flex-row-reverse gap-[4rem]">
                        <div id="avatar-section" className="flex-[1_1]">
                            <Label id="lux-input-label medium" className="text-[0.875rem] block mb-[.375rem] font-[500]">
                                <div>Profile Picture</div>
                            </Label>
                            <div className="relative w-[100px] h-[100px] cursor-pointer">
                                <Input type="image" className="hidden text-inherit m-[0] font"></Input>
                                <div id="upload-icon" className="rounded-[1000px] bg-center bg-cover flex justify-center items-center text-black bg-gray-300 w-[35%] h-[35%] border-[2px] border-solid border-black absolute right-[0px] bottom-[0px] origin-center">
                                    <ArrowUp className="stroke-[2.5] w-[65%] h-[65%] block align-middle" />
                                </div>
                                <div id="avatar" className="w-[100px] h-[100px] rounded-[1000px] bg-center bg-cover flex justify-center items-center cursor-pointer">
                                    <Avatar>
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/143386751?s=200&v=4" alt="@shadcn" className="rounded-full"></AvatarImage>
                                    </Avatar>
                                </div>
                            </div>
                        </div>
                        <div id="form" className="w-[300px] max-w-[320px]">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="What your name?" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="bio"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Bio</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Share a little about your background and interests." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button className="mt-[1.5rem!important] cursor-pointer font-[500] relative whitespace-nowrap justify-center outline-offset-[.125rem] max-w-[100%] text-[1rem] p-[0.625rem_0.875rem] w-fit flex items-center m-0 leading-[1.5]" type="submit">
                                        <Save className="mr-[0.5rem] stroke-[2.5] w-[1rem] h-[1rem] flex-shrink-0 block align-middle" />
                                        <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Save Changes</div>
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
                <div id="can-divide with-divider medium" className="mt-[2rem] pt-[2rem] border-t-[1px] border-solid border-gray-200">
                    <div id="section-title-wrapper">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] mt-[0]">Email and Phone</h2>
                            <div id="right-element" className="m-[-.25rem]"></div>
                        </div>
                        <div id="section-subtitle" className="mt-[-.875rem] mb-[1.25rem] text-gray-600 text-[1rem]">
                            Manage the email and phone you use to sign into Donace and receive notifications.
                        </div>
                    </div>
                    <div id="grid" className="grid grid-cols-[1fr_1fr] gap-[4rem]">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                                <div id="input-wrapper" className="flex items-baseline">
                                    <div id="lux-input-wrapper medium" className="mr-[1rem!important] flex-[1_1]">
                                        <div id="inner-wrapper" className="inline-block w-full">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="your@email.com" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <Button disabled type="submit" className="cursor-not-allowed font-[500] relative whitespace-nowrap justify-center outline-offset-[.125rem] max-w-[100%] text-[1rem] p-[0.625rem_0.875rem] w-fit flex items-center m-0 leading-[1.5]">
                                        <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Update</div>
                                    </Button>
                                </div>
                                <div id="lux-collapse" className="overflow-hidden h-[0px] hidden">
                                    <div className="text-[0.875rem] text-gray-600 pt-[.5rem!important]">
                                        &quot;To finish changing your email, please follow the instructions we sent to &quot;
                                        <b className="font-[600]"></b>
                                        &quot;.&quot;
                                    </div>
                                </div>
                            </form>
                        </Form>
                        <Form {...form}>
                            <div id="input-wrapper" className="flex items-baseline">
                                <div id="lux-input-wrapper medium" className="mr-[1rem!important] flex-[1_1]">
                                    <div id="inner-wrapper" className="inline-block w-full">
                                        <FormField
                                            control={form.control}
                                            name="phoneNumber"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel" placeholder="+84 123 456 789" {...field} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                <div id="help-text" className="text-gray-600 max-h-[0] overflow-hidden opacity-0"></div>
                                </div>
                                <Button type="submit" className="cursor-not-allowed font-[500] relative whitespace-nowrap justify-center outline-offset-[.125rem] max-w-[100%] text-[1rem] p-[0.625rem_0.875rem] w-fit flex items-center m-0 leading-[1.5]">
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Update</div>
                                </Button>
                            </div>
                            <div id="lux-collapse" className="overflow-hidden h-[0px] hidden">
                                <div className="pt-[.5rem!important]">
                                    <div className="flex">
                                        <div id="indicator warning small" className="flex-[0_0_16px] w-[16px] relative"></div>
                                        <div className="text-[0.875rem]">
                                            You&apos;ve unsubscribed from text messages from us.
                                            <br/>
                                            Text 
                                            <span id="mono">START</span>
                                             to
                                            <Link href={""} className="cursor-pointer no-underline">
                                                +84 123 456 789
                                            </Link>
                                            and then
                                            <span className="cursor-pointer">click here</span>
                                            to re-enable notifications.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="text-[0.875rem] pt-[1rem!important] text-gray-600">
                        For your security, we will send you a code to verify any change to your email or phone number.
                    </div>
                </div>
                <div id="can-divide with-divider medium" className="mt-[2rem] pt-[2rem] border-t-[1px] border-solid border-t-gray-200">
                    <div id="section-title-wrapper medium">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Password & Security</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-subtitle" className="mt-[-.875rem] mb-[1.25rem] text-gray-600 text-[1rem]">
                            Secure your account with password and two-factor authentication.
                        </div>
                    </div>
                    <div id="content-card" className="p-[0.875rem_1rem] relative rounded-[0.75rem] bg-gray-200 border-[1px] border-solid border-gray-200 overflow-hidden">
                        <div className="gap-[0.5rem] flex justify-between items-center">
                            <div id="left" className="gap-[0.75rem] flex items-baseline">
                                <div id="icon" className="translate-y-[2.5px]">
                                    <Lock className="block w-4 h-4 align-middle"/>
                                </div>
                                <div>
                                    <div className="font-[500]">
                                        Account Password
                                    </div>
                                    <div id="desc" className="mt-[1px] text-[0.875rem] text-gray-600">
                                        Please follow the instructions in the email to finish setting your password.
                                    </div>
                                </div>
                            </div>
                            <div id="right">
                                <Button className="p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[1.75rem_+_2_*_1px] cursor-pointer font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent max-w-full w-fit">
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Set Password</div>
                                </Button>
                            </div>
                        </div>
                        <hr className="m-[0.875rem_-1rem_0.875rem_1.75rem] border-solid border-gray-300 border-t-[0px] border-r-[0px] border-b-[1px] border-l-[0px]"/>
                        <div id="spread" className="gap-[0.5rem] flex justify-between items-center">
                            <div id="left" className="gap-[0.75rem] flex items-baseline">
                                <div id="icon" className="translate-y-[2.5px]">
                                    <ShieldCheck className="block w-4 h-4 align-middle"/>
                                </div>
                                <div>
                                    <div className="font-[500]">
                                        Two-Factor Authentication
                                    </div>
                                    <div id="desc" className="mt-[1px] text-[0.875rem] text-gray-600">
                                        Please set a password before enabling two-factor authentication.
                                    </div>
                                </div>
                            </div>
                            <div id="right">
                                <Button disabled className="p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[1.75rem_+_2_*_1px] cursor-pointer font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent max-w-full w-fit">
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Enable 2FA</div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="can-divide with-divider medium" className="mt-[2rem] pt-[2rem] border-t-[1px] border-solid border-t-gray-200">
                    <div id="section-title-wrapper medium">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Third Party Accounts</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-subtitle" className="mt-[-.875rem] mb-[1.25rem] text-gray-600 text-[1rem]">
                            Link your accounts to sign into Donace and automate your workflows.
                        </div>
                    </div>
                    <div id="connected-accounts" className="grid gap-[0.75rem] grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
                        <div id="content-card" className="p-[0.5rem_0.75rem] relative rounded-[0.75rem] bg-gray-200 border-[1px] border-solid border-gray-200 overflow-hidden">
                            <div id="connected-account" className="gap-[0.625rem] flex items-center">
                                <div id="icon" className="flex-shrink-0">
                                    <FontAwesomeIcon icon={faGoogle} className="w-[1.25rem] h-[1.25rem] block align-middle"/>
                                </div>
                                <div id="content" className="min-w-[0px] flex-[1_1]">
                                    <b className="font-[600]">Google</b>
                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.875rem] text-gray-600">donaceproject@gmail.com</div>
                                </div>
                                <Button variant="nothing" className="min-w-[4rem] text-gray-600 bg-gray-300 border-transparent p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[1.75rem_+_2_*_1px] cursor-pointer font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent max-w-full w-fit">
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Unlink</div>
                                </Button>
                            </div>
                        </div>
                        <div id="content-card" className="p-[0.5rem_0.75rem] relative rounded-[0.75rem] bg-gray-200 border-[1px] border-solid border-gray-200 overflow-hidden">
                            <div id="connected-account" className="gap-[0.625rem] flex items-center">
                                <div id="icon" className="flex-shrink-0">
                                    <FontAwesomeIcon icon={faInstagram} className="w-[1.25rem] h-[1.25rem] block align-middle"/>
                                </div>
                                <div id="content" className="min-w-[0px] flex-[1_1]">
                                    <b className="font-[600]">Instagram</b>
                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.875rem] text-gray-600">Not Linked</div>
                                </div>
                                <Button variant="nothing" className="min-w-[4rem] text-white bg-[#5851DB] p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[1.75rem_+_2_*_1px] cursor-pointer font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent max-w-full w-fit">
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Link</div>
                                </Button>
                            </div>
                        </div>
                        <div id="content-card" className="p-[0.5rem_0.75rem] relative rounded-[0.75rem] bg-gray-200 border-[1px] border-solid border-gray-200 overflow-hidden">
                            <div id="connected-account" className="gap-[0.625rem] flex items-center">
                                <div id="icon" className="flex-shrink-0">
                                    <FontAwesomeIcon icon={faXTwitter} className="w-[1.25rem] h-[1.25rem] block align-middle"/>
                                </div>
                                <div id="content" className="min-w-[0px] flex-[1_1]">
                                    <b className="font-[600]">Twitter/X</b>
                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.875rem] text-gray-600">Not Linked</div>
                                </div>
                                <Button variant="nothing" className="min-w-[4rem] text-white bg-[#1DA1F2] p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[1.75rem_+_2_*_1px] cursor-pointer font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent max-w-full w-fit">
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Link</div>
                                </Button>
                            </div>
                        </div>
                        <div id="content-card" className="p-[0.5rem_0.75rem] relative rounded-[0.75rem] bg-gray-200 border-[1px] border-solid border-gray-200 overflow-hidden">
                            <div id="connected-account" className="gap-[0.625rem] flex items-center">
                                <div id="icon" className="flex-shrink-0">
                                    <FontAwesomeIcon icon={faGithub} className="w-[1.25rem] h-[1.25rem] block align-middle"/>
                                </div>
                                <div id="content" className="min-w-[0px] flex-[1_1]">
                                    <b className="font-[600]">Github</b>
                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.875rem] text-gray-600">Not Linked</div>
                                </div>
                                <Button variant="nothing" className="min-w-[4rem] text-white bg-black p-[0.4375rem_0.625rem] text-[0.875rem] gap-[0.375rem] h-[1.75rem_+_2_*_1px] cursor-pointer font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent max-w-full w-fit">
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Link</div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="can-divide with-divider medium" className="mt-[2rem] pt-[2rem] border-t-[1px] border-solid border-t-gray-200">
                    <div id="section-title-wrapper medium">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Sync Calendar</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-subtitle" className="mt-[-.875rem] mb-[1.25rem] text-gray-600 text-[1rem]">You can sync all of your events with your Google, Outlook, or Apple calendar.</div>
                    </div>
                    <Button type="button" variant="nothing" className="text-gray-600 bg-gray-300 border-transparent cursor-pointer font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent text-[1rem] p-[0.625rem_0.875rem] h-[2.25rem_+_2_*_1px] max-w-full w-fit ">
                        <SatelliteDish className="mr-[0.5rem] stroke-[2.5] w-[1rem] h-[1rem] flex-shrink-0 block align-middle"/> 
                        <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                            Add Subscription
                        </div>
                    </Button>
                </div>
                <div id="can-divide with-divider medium" className="mt-[2rem] pt-[2rem] border-t-[1px] border-solid border-t-gray-200">
                    <div id="section-title-wrapper">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Delete Account</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-subtitle" className="mt-[-.875rem] mb-[1.25rem] text-gray-600 text-[1rem]">
                            If you no longer wish to use Donace, you can permanently delete your account.
                        </div>
                    </div>
                    <Button variant="destructive" className="cursor-pointer font-[500] rounded-[0.5rem] relative whitespace-nowrap justify-center outline-offset-[.125rem] outline-[2px] outline outline-transparent text-[1rem] p-[0.625rem_0.875rem] h-[2.25rem_+_2_*_1px] max-w-full w-fit">
                        <AlertTriangle className="mr-[0.5rem] stroke-[2.5] w-[1rem] h-[1rem] flex-shrink-0 block align-middle"/>
                        <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                            Delete My Account
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}