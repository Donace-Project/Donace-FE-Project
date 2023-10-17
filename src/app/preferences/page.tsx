import Header from "@/components/layout/header";
import PrefePage from "@/components/preferences-page/preferences-page";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <PrefePage />
            </div>
        </div>
    )
}