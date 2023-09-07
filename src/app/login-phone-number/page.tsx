import { NavbarLogin } from "@/components/layout/navbar-login";
import { LoginPhoneNumber } from "@/components/login-phone-number/login-phone-number";

export default function Page(){
    return(
        <div>
      <div>
        <NavbarLogin/>
      </div>
      <div className="px-4 w-full bg-white">
        <div className="h-screen flex justify-center items-center p-0">
          <LoginPhoneNumber />
        </div>
      </div>
      {/* <div className="px-4 w-full bg-white">
        <div className="h-screen flex justify-center items-center p-0">
            <LoginVerify/>
          </div>
      </div> */}
      </div>
    )
}