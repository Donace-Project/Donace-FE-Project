import { Building } from "lucide-react";
import Link from "next/link";


export default function ExploreHome(){
    return(
        <div id="page-content" className="pt-[calc(3.25rem+1px)] box-border">
            <div id="page-header" className="opacity-1 pt-[3rem] pl-[1rem_!important] pr-[1rem_!important] max-w-[820px] m-[0_auto] box-border">
                <div className="gap-[.5rem] mb-[.5rem_!important] flex justify-between items-center">
                    <h1 id="tab-title" className="text-[2rem] font-[600] mb-[0px] leading-[1.2] mt-[0]">Explore</h1>
                </div>
                <div></div>
            </div>
            <div className="pl-[1rem_!important] pr-[1rem_!important] max-w-[820px] m-[0_auto]">
                <h1 className="text-[1.75rem] font-[400] leading-[1.2] text-gray-700">Tech Events in Your City</h1>
                {/* <div id="cities" className="mt-[2.5rem] grid gap-[1.5rem]">
                    <Link href={"/"} className="h-[300px] p-[1.375rem_1.5rem_1.5rem] rounded-[0.75rem] relative overflow-hidden flex justify-between flex-col no-underline from-orange-300">
                        <div id="underlay-animated" className="absolute h-[100%] w-[100%] top-0 left-0"></div>
                        <div id="building-wrapper" className="absolute h-[100%] w-[300px] right-[-50px] bottom-0">
                            <img src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=300,height=300/discovery/london-card-dark.png" alt=""></img>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}