import { User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function IntroCard({ user }: { user: User }) {
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
                <section className="flex flex-col justify-between">
                    <section>
                        <h1 className="font-bold text-4xl">{user.name}</h1>
                        <p className="text-lg">@{user.username}</p>
                    </section>
                    <article>The user's bio will go here, blah blah blah</article>
                </section>
            </section>
        </main>
    );
}
