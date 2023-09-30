import Link from "next/link"
import { PropsWithChildren } from "react"
import { Input } from "@/components/ui/input"
import Header from "@/components/layout/header"



export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="relative flex min-h-screen flex-col">
            {/* <div className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
                <div className="container flex h-14 items-center">
                    <Header />

                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <Input className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64" type="text" placeholder="Search..." />
                        </div>
                        <nav className="flex items-center">
                            <LoginNRegister />
                            <ModeToggle />
                        </nav>
                    </div>

                </div>
            </div> */}
            {children}
        </div>
    )
}