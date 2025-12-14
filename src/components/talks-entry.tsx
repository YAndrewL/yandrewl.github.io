import { ArrowUpRight } from "lucide-react";
import { Talks } from "@/data/talks";

export function TalksEntry({ talks }: { talks: Talks }) {
    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-col flex-1 p-0.5">
                <p className="text-sm text-zinc-600 mb-1 [&_a]:no-underline [&_a]:text-[#E36C2D] [&_a:hover]:opacity-80 flex items-center gap-2">
                    <span>{talks.year}</span>
                    <span>-</span>
                    <span>{talks.location}</span>
                    <span>-</span>
                    <span>{talks.poster}</span>

                    <span>·</span>

                    <span>{talks.description}</span>

                </p>
            </div>
        </div>
    );
}
