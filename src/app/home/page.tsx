import Home from "@/components/home/home-donace";
import Footer from "@/components/layout/footer";
import HeaderHome from "@/components/layout/headerHome";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <HeaderHome/>
            </div>
            <div id="container">
                <Home />
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </div>
    )
}