import { NavbarLogin } from "@/components/layout/navbar-login";
import { LoginFormCard } from "@/components/login-page/login-card";

export default function Page() {
  return (
    <div className="box-border w-[100%] h-[100%] m-0">
      <div className="min-h-[100vh] pb-[4rem]">
        <div className="z-10">
          <NavbarLogin />
        </div>
        <div className="bg-white">
          <div className="h-screen flex justify-center items-center p-0">
            <LoginFormCard />
          </div>
        </div>
      </div>
    </div>)
}