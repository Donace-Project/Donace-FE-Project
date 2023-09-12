import { NavbarLogin } from "@/components/layout/navbar-login";
import { LoginPhoneNumber } from "@/components/login-phone-number/login-phone-number";

export default function Page() {
  return (
    <div className="box-border w-[100%] h-[100%] m-0">
      <div className="min-h-[100vh] pb-[4rem]">
        <div className="z-10">
          <NavbarLogin />
        </div>
        <div>
          <div className="h-screen flex justify-center items-center">
            <LoginPhoneNumber />
          </div>
        </div>
      </div>
    </div>
  )
}