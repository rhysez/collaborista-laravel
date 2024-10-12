import Discover from "@/Components/landing/Discover";
import Connect from "@/Components/landing/Connect";
import Collaborate from "@/Components/landing/Collaborate";

export default function Overview() {
    return (
       <main className={"mt-36 space-y-24"}>
           <Discover />
           <Connect />
           <Collaborate />
       </main>
    )
}
