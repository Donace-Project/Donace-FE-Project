"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Plus, Receipt, Wallet } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from 'react';
import { usePaymentInputs, PaymentInputsWrapper } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import css from "styled-jsx/css";
// import { css } from 'styled-components';

export default function PaymentPage() {
    const {
        meta,
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCVC] = useState('');

    const handleChangeCardNumber = (e) => {
        setCardNumber(e.target.value);
    };

    const handleChangeExpiryDate = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleChangeCVC = (e) => {
        setCVC(e.target.value);
    };

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
                            <Link href={"/setting"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Account
                            </Link>
                            <Link href={"/preferences"} id="tab" className="text-gray-300 whitespace-nowrap inline-block pb-[0.5rem] border-b-2 border-solid border-b-transparent cursor-pointer no-underline">
                                Preferences
                            </Link>
                            <Link href={"/payment"} id="tab" className="border-b-2 border-solid border-b-gray-200 whitespace-nowrap inline-block pb-[0.5rem] cursor-pointer no-underline">
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
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Payment Methods</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                        <div id="section-subtitle" className="mt-[-.875rem] mb-[1.25rem] text-gray-600 text-[1rem]">Your saved payment methods are encrypted and stored securely by Stripe.</div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button type="submit" className="mt-[1.5rem!important] cursor-pointer font-[500] relative whitespace-nowrap justify-center outline-offset-[.125rem] max-w-[100%] text-[1rem] p-[0.625rem_0.875rem] w-fit flex items-center m-0 leading-[1.5]">
                                <Plus className="mr-[0.5rem] stroke-[2.5] w-[1rem] h-[1rem] block align-middle" />
                                <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">Add Card</div>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <div id="icon-wrapper" className="mb-[0.875rem] w-[3rem] h-[3rem] bg-gray-200 rounded-[1000px]">
                                    <Wallet className="w-[2rem] h-[2rem] ml-[0.5rem] mt-[0.5rem]" />
                                </div>
                                <DialogTitle className="font-[600] text-[1.25rem] mb-[0.5]">Add Card</DialogTitle>
                                <DialogDescription>
                                    Add a card to quickly buy tickets or pay for Donace Plus. Your information is encrypted and securely processed by Stripe.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="pt-[.25rem!important] mt-[.5rem!important]">
                                <PaymentInputsWrapper
                                    {...wrapperProps}
                                    styles={{
                                        fieldWrapper: {
                                            base: css`
                                                    margin-bottom: 1rem;
                                                `
                                        },
                                        input: {
                                            cardNumber: css`
                                                width: 13.5rem;
                                            `,
                                        }
                                    }}>
                                    <svg {...getCardImageProps({ images })} />
                                    <input {...getCardNumberProps({ cardNumber })} />
                                    <input {...getExpiryDateProps({ expiryDate })} />
                                    <input {...getCVCProps({ cvc })} />
                                </PaymentInputsWrapper>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="w-full cursor-pointer font-[500] relative whitespace-nowrap justify-center outline-offset-[.125rem] max-w-[100%] text-[1rem] p-[0.625rem_0.875rem] flex items-center m-0 leading-[1.5]">
                                    <div id="label" className="leading-[1] m-[-4px_0] p-[4px_0] overflow-hidden text-ellipsis">
                                        Add Card
                                    </div>
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <div id="can-divide with-divider medium" className="mt-[2rem] pt-[2rem] border-t-[1px] border-solid border-gray-200">
                    <div id="section-title-wrapper medium">
                        <div id="section-title-row" className="mb-[1.25rem] flex justify-between items-center">
                            <h2 className="text-[1.25rem] font-[600] mb-[0] leading-[1.2] mt-[0]">Payment History</h2>
                            <div id="right-element" className="m-[-.25rem_0]"></div>
                        </div>
                    </div>
                    <div id="lux-empty-state" className="text-center mt-[4rem] flex flex-col items-center">
                        <div id="icon" className="justify-center flex items-center">
                            <div className="mb-[-64px]">
                                <Receipt className="w-[250px] h-auto block align-middle" />
                            </div>
                        </div>
                        <h3 className="text-[1.5rem] font-[500] p-[0!important] mt-[5.5rem!important] mb-[0!imporant] leading-[1.2]">No Payments</h3>
                        <div className="pl-[3rem] pr-[3rem] text-gray-500 mt-[.5rem!important]">You have not made any payments on Donace.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// }