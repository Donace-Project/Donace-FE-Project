import CalendarHomePage from "@/components/calendar/calendar-page";
import Footer from "@/components/layout/footer";
import HeaderCalendar from "@/components/layout/headerCalendar";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="headr">
                <HeaderCalendar />
            </div>
            <div id="container">
                <CalendarHomePage />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}