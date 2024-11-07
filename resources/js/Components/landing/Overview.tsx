import Discover from "@/Components/landing/Discover";
import Connect from "@/Components/landing/Connect";
import Collaborate from "@/Components/landing/Collaborate";

export default function Overview() {
    return (
       <main className={"mt-36 space-y-40 bg-foreground py-24 md:rounded-t-[100px] lg:rounded-t-[200px] border-t-[15px] border-manuka"}>
           <Discover />
           <Connect />
           <Collaborate />
       </main>
    )
}
