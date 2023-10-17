import Header from "@/components/layout/header";
import MyCalendarNewletters from "@/components/my-calendar-newletters/my-calendar-newletters";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <Header/>
            </div>
            <div id="container">
                <MyCalendarNewletters />
            </div>
        </div>
    )
}