import { NavbarSignIn } from "@/components/layout/navbar-signin";
import SettingPage from "@/components/setting-page/setting-page";

export default function Page(){
    return(
        <div className="box-border w-[100%] h-[100%] m-0">
            <div className="min-h-[100vh] pb-[4rem]">
                <div className="z-10">
                    <NavbarSignIn/>
                </div>
                <div>
                    <SettingPage/>
                </div>
            </div>
        </div>
    )
}