import { NavbarSignIn } from "@/components/layout/navbar-signin";
import { ProfilePage } from "@/components/profile-comp/profile-page";

export default function Page(){
    return(
        <div>
            <div>
                <NavbarSignIn/>
            </div>
            <div>
                <ProfilePage/>
            </div>
        </div>
    )
}