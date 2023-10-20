import Header from "@/components/layout/header";
import SettingPage from "@/components/setting-page/setting-page";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] pb-16 bg-[#F4F5F6]">
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <SettingPage />
            </div>
        </div>
    )
}