import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
    return (
        <div>
            <div className="grid grid-cols-4 gap-x-2 mb-2">
                <div className="flex flex-col">
                    <span className="text-xs text-zinc-500">{education.year}</span>
                    {education.location && (
                        <span className="text-xs text-zinc-500 mt-1">{education.location}</span>
                    )}
                </div>
                <div className="col-span-3">
                    <h3 className="text-base mb-1 font-serif">{education.institution}</h3>
                    <p className="text-sm text-zinc-600">{education.degree}</p>
                    {education.department && (
                        <p className="text-sm text-zinc-500 mt-2 italic">
                            Faculty: {education.department}
                        </p>
                    )}
                    {education.advisor && (
                        <p className="text-sm text-zinc-600 mt-2 italic [&_a]:no-underline [&_a]:text-[#E36C2D] [&_a:hover]:text-[#E36C2D]">
                            Supervisor:{" "}
                            <span dangerouslySetInnerHTML={{ __html: education.advisor }} />
                        </p>
                    )}
                    {education.thesis && (
                        <p className="text-sm text-zinc-600 mt-2 italic">
                            Thesis:{" "}
                            {education.thesisUrl ? (
                                <a
                                    href={education.thesisUrl}
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {education.thesis}
                                </a>
                            ) : (
                                education.thesis
                            )}
                        </p>
                    )}
                    {education.topics && (
                        <p className="text-sm text-zinc-600 mt-2 italic">
                            Topics:{" "}
                            {education.topics}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
