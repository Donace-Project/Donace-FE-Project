import Header from "@/components/layout/header";
import MyCalendarInsights from "@/components/my-calendar-insights/my-calendar-insights";

export default function Page(){
    return(
        <div id="page-wrapper" className="min-h-[100dvh] pb-16 bg-[#F4F5F6]">
        <div id="header">
            <Header />
        </div>
        <div id="container">
            <MyCalendarInsights/>
        </div>
    </div>
    )
}