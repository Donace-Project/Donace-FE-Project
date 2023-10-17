import Header from "@/components/layout/header";
import MyCalendarPage from "@/components/my-calendar/my-calendar.page";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <MyCalendarPage />
            </div>
        </div>
    )
}