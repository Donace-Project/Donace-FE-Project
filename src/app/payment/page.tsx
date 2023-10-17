import Header from "@/components/layout/header";
import PaymentPage from "@/components/payment-page/payment-page";
import React from 'react';

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <PaymentPage />
            </div>
        </div>
    )
}