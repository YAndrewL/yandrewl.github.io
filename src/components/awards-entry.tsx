import { ArrowUpRight } from "lucide-react";
import { Awards } from "@/data/awards";

export function AwardsEntry({ awards }: { awards: Awards }) {
    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-col flex-1 p-0.5">
                <div className="flex gap-2 text-sm text-zinc-600 [&_a]:no-underline [&_a]:text-[#E36C2D] [&_a:hover]">
                    <span className="font-mono shrink-0">[{awards.date}]</span>
                    <span>{awards.description}</span>
                </div>
            </div>
        </div>
    );
}
