import React from "react";
import type { JSX } from "react";
import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
    return (
        <div className="grid grid-cols-4 gap-x-2">
            <div className="flex flex-col">
                <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
                {experience.location && (
                    <span className="text-xs text-zinc-500 mt-1">{experience.location}</span>
                )}
            </div>
            <div className="col-span-3 flex flex-col">
                <h3 className="text-base font-serif">
                    {experience.title} —{" "}
                    {experience.companyUrl ? (
                        <a
                            href={experience.companyUrl}
                            className="text-[#E36C2D] hover:text-[#E36C2D] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {experience.company}
                        </a>
                    ) : (
                        experience.company
                    )}
                </h3>
                {experience.advisor && (
                    <p className="text-sm  text-zinc-600 leading-relaxed italic mt-2">
                        Advisor: <span className="[&_a]:no-underline [&_a]:text-[#E36C2D] [&_a:hover]:text-[#E36C2D]" dangerouslySetInnerHTML={{ __html: experience.advisor }} />
                    </p>
                )}
                {experience.manager && (
                    <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
                        Manager: {experience.manager}
                    </p>
                )}
                {experience.description && (
                    <p className="text-sm text-zinc-600 leading-relaxed mt-2">
                        {experience.description}
                    </p>
                )}
            </div>
        </div>
    );
}