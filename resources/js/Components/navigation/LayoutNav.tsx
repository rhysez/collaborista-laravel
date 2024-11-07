import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    UserCircleIcon,
    EnvelopeIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline";

export default function LayoutNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <Bars3Icon className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>Side menu</SheetTitle>
                    <SheetDescription>Something will go here!</SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
