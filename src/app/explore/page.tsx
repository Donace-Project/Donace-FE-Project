import ExploreHome from "@/components/explore/explore-page";
import { NavbarSignIn } from "@/components/layout/navbar-signin";

export default function Page() {
    return (
        <div className="box-border w-[100%] h-[100%] m-0">
            <div className="min-h-[100vh] pb-[4rem]">
                <div className="z-10">
                    {/* <NavbarSignIn /> */}
                </div>
                <div>
                    <ExploreHome />
                </div>
            </div>
        </div>
    )
}