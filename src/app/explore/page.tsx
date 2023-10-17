import ExploreHome from "@/components/explore/explore-page";
import Footer from "@/components/layout/footer";
import HeaderExplore from "@/components/layout/headerExplore";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <HeaderExplore />
            </div>
            <div id="container">
                <ExploreHome />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}