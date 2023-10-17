import HomePastEvent from "@/components/home/home-past-event";
import Header from "@/components/layout/header";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <HomePastEvent />
            </div>
        </div>
    )
}