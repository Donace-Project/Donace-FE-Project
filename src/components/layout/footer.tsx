import { Separator } from "@/components/ui/separator"
import { FileCode2, Github, GraduationCap, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer id="footer-global">
            <div id="zm-container" className="pb-16 pt-16 text-[0.875rem] text-[rgba(19,21,23,0.36)] max-w-[820px] m-[0_auto]">
                <div id="global-footer-content" className="border-t border-solid border-[rgba(19,21,23,0.08)] m-[1rem_1rem_0px] pt-4 justify-between flex items-start">
                    <div id="left-wrapper" className="flex-wrap flex-1 flex items-center">
                        <Link href={"/home"} id="logo" className="hover:text-[rgb(19,21,23)] ml-[-0.5rem] pr-[0.75rem] mt-[-0.5rem] pt-4 text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out p-2 flex items-center cursor-pointer no-underline">
                            <GraduationCap className="w-4 h-4 block align-middle" />
                        </Link>
                        <div id="links">
                            <Link href={""} className="hover:text-[rgb(19,21,23)] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out p-2 inline-block cursor-pointer no-underline">What&apos;s new</Link>
                            <Link href={""} className="hover:text-[rgb(19,21,23)] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out p-2 inline-block cursor-pointer no-underline">Pricing</Link>
                            <Link target="_blank" href={""} className="hover:text-[rgb(19,21,23)] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out p-2 inline-block cursor-pointer no-underline">Help</Link>
                        </div>
                    </div>
                    <div id="icons" className="whitespace-nowrap m-[0px_-0.625rem] flex items-center">
                        <Link href={"mailto:dattranphu1114@gmail.com"} target="_blank" rel="nofollow noopener" className="hover:text-[rgb(19,21,23)] p-[0.625rem] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out flex items-center cursor-pointer no-underline">
                            <Mail className="w-4 h-4 block align-middle"/>
                        </Link>
                        <Link href={"https://github.com/Donace-Project"} target="_blank" className="hover:text-[rgb(19,21,23)] p-[0.625rem] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out flex items-center cursor-pointer no-underline">
                            <Github className="w-4 h-4 block align-middle"/>
                        </Link>
                        <Link href={"https://www.notion.so/Donace-T-ng-quan-29499fa07cac4c098c0bf42cff887173"} target="_blank" className="hover:text-[rgb(19,21,23)] p-[0.625rem] text-[rgba(19,21,23,0.36)] transition-all duration-300 ease-in-out flex items-center cursor-pointer no-underline">
                            <FileCode2 className="w-4 h-4 block align-middle"/>
                        </Link>
                    </div>
                </div>
                <div id="mobile-logo" className="hidden"></div>
            </div>
        </footer>
        // <div className="container max-h-max">
        //     <Separator className="my-5" />
        //     <div className="grid grid-rows-2 md:flex justify-between items-center my-5">
        //         <div className="grid grid-cols-4 items-center gap-10">
        //             <p className="text-lg font-bold text-muted-foreground">Donace</p>
        //             <p className="text-base text-muted-foreground whitespace-nowrap">What&apos;s new</p>
        //             <p className="text-base text-muted-foreground">Pricing</p>
        //             <p className="text-base text-muted-foreground">Help</p>
        //         </div>
        //         <div className="grid grid-cols-3 items-center gap-5">
        //             <p>instagram</p>
        //             <p>facebook</p>
        //             <p>github</p>
        //         </div>
        //     </div>
        // </div>
    )
}