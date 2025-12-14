import { ArrowUpRight } from "lucide-react";
import { Teaching } from "@/data/teaching";

export function TeachingEntry({ teaching }: { teaching: Teaching }) {
    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-col flex-1 p-0.5">
                <p className="text-sm text-zinc-600 mb-1 [&_a]:no-underline [&_a]:text-[#E36C2D] [&_a:hover]:opacity-80 flex items-center gap-2">
                    {teaching.year && (
                        <>
                            <span>{teaching.year}</span>
                            <span>-</span>
                        </>
                    )}

                    {teaching.course && (
                        <>
                            <span>{teaching.course}</span>
                            <span>-</span>
                        </>
                    )}

                    {teaching.location && <span>{teaching.location}</span>}

                    {teaching.codeUrl && (
                        <a
                            href={teaching.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                        >
                            <ArrowUpRight size={16} />
                            CODE
                        </a>
                    )}

                    {teaching.fileUrl && (
                        <a
                            href={teaching.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                        >
                            <ArrowUpRight size={16} />
                            FILE
                        </a>
                    )}
                </p>
            </div>
        </div>
    );
}
