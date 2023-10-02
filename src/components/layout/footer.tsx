import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <div className="container max-h-max">
            <Separator className="my-5" />
            <div className="flex justify-between items-center my-5">
                <div className="grid grid-cols-4 items-center gap-5">
                    <p className="text-lg font-bold text-muted-foreground">Donace</p>
                    <p className="text-base text-muted-foreground">What&apos;s new</p>
                    <p className="text-base text-muted-foreground">Pricing</p>
                    <p className="text-base text-muted-foreground">Help</p>
                </div>
                <div className="grid grid-cols-3 items-center gap-5">
                    <p>instagram</p>
                    <p>facebook</p>
                    <p>github</p>
                </div>
            </div>
        </div>
    )
}