import Header from "@/components/layout/header";
import { NavbarLogin } from "@/components/layout/navbar-login";
import { LoginFormCard } from "@/components/login-page/login-card";

export default function Page() {
  return (
    // <div className="box-border w-[100%] h-[100%] m-0">
    //   <div className="min-h-[100vh] pb-[4rem]">
    //     <div className="z-10">
    //       <NavbarLogin />
    //     </div>
    //     <div className="bg-white">
    //       <div className="h-screen flex justify-center items-center p-0">
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div id="page-wrapper" className="min-h-[100dvh] bg-[#F4F5F6]">
      <div id="header">
        <Header />
      </div>
      <div id="container">
        <LoginFormCard />
      </div>

    </div>
  )
}