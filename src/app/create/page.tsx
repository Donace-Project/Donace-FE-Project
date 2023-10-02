import CreateEvents from "@/components/create/create";
import { NavbarSignIn } from "@/components/layout/navbar-signin";

export default function Page(){
    return(
        <div className="box-border w-full h-full m-0">
            <div className="min-h-[100vh] pb-16">
                <div className="z-10">
                    <NavbarSignIn/>
                </div>
                <div>
                    <CreateEvents/>
                </div>
            </div>
        </div>
    )
}