import Header from "@/components/layout/header";
import MyCalendarPeople from "@/components/my-calendar-people/my-calendar-people";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <MyCalendarPeople />
            </div>
        </div>
    )
}