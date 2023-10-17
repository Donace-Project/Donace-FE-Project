import CreateEvents from "@/components/create/create";
import Header from "@/components/layout/header";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="headr">
                <Header />
            </div>
            <div id="container">
                <CreateEvents />
            </div>
        </div>
    )
}