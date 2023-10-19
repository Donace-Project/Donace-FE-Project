import Header from "@/components/layout/header";
import { ProfilePage } from "@/components/profile-comp/profile-page";

export default function Page() {
    return (
        <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <ProfilePage />
            </div>
        </div>
    )
}