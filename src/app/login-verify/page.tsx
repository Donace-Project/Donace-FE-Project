import { NavbarLogin } from "@/components/layout/navbar-login";
import { LoginVerify } from "@/components/login-verify/login-verify-code";


export default function Page(){
    return (
        <div>
      <div>
        <NavbarLogin/>
      </div>
      <div className="px-4 w-full bg-white">
        <div className="h-screen flex justify-center items-center p-0">
          <LoginVerify/>
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
