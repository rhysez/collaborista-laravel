import { User, Platform } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {clsx} from "clsx";

type IntroCardPlatform = {handle: Platform, platform: string}

export default function IntroCard({ user }: { user: User }) {
    const platformHandles: IntroCardPlatform[] = [
        {handle: user.youtube, platform: "YouTube"},
        {handle: user.instagram, platform: "Instagram"},
        {handle: user.twitch, platform: "Twitch"},
        {handle: user.tiktok, platform: "TikTok"}
    ].filter((platform: IntroCardPlatform) => platform.handle);

    return (
        <main>
            <section className="flex space-x-4">
                <Avatar className="w-32 h-32">
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <section className="flex flex-col justify-between space-y-4">
                    <section>
                        <h1 className="font-bold text-4xl">{user.name}</h1>
                        <p className="text-lg text-manuka font-semibold">@{user.username}</p>
                    </section>
                    <article>
                        The user's bio will go here, blah blah blah
                    </article>
                    <section>
                        <h1 className="font-bold text-2xl">Platforms</h1>
                        <section className={"space-y-1 mt-2"}>
                            {platformHandles.map((platform: IntroCardPlatform, index: number) => {
                                return (
                                    <div className={"flex items-center gap-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm p-1"}>
                                        <p className={
                                            clsx("font-semibold p-1 rounded-sm text-white text-sm",
                                                {"bg-youtube": platform.platform == "YouTube"},
                                                {"bg-instagram": platform.platform == "Instagram"},
                                                {"bg-twitch": platform.platform == "Twitch"},
                                                {"bg-foreground": platform.platform == "TikTok"}
                                            )}>{platform.platform}</p>
                                        <p className={"text-sm"}> {platform.handle}</p>
                                    </div>
                                )
                            })}
                        </section>
                    </section>
                </section>
            </section>
        </main>
    );
}
