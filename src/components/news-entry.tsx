import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";
import { useState } from "react";

export function NewsEntry({ news }: { news: News }) {
    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-col flex-1 p-0.5">
                <div className="flex gap-2 text-sm text-zinc-600 [&_a]:no-underline [&_a]:text-[#E36C2D] [&_a:hover]">
                    <span className="font-mono shrink-0">[{news.date}]</span>
                    <span className="text-justify" dangerouslySetInnerHTML={{ __html: news.description }} />
                </div>
            </div>
        </div>
    );
}
