"use client"
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { AwardsEntry } from "@/components/awards-entry";
import { awardsData } from "@/data/awards";
import { TalksEntry } from "@/components/talks-entry";
import { talksData } from "@/data/talks";
import { sectionOrder, Section } from "@/data/section-order";
import { TeachingEntry } from "@/components/teaching-entry";
import { teachingData } from "@/data/teaching";
import { ServiceEntry } from "@/components/service-entry";
import { serviceData } from "@/data/service";
import { MentoringEntry } from "@/components/mentoring-entry";
import { mentoringData } from "@/data/mentoring";
import { useState } from "react";

export default function Home() {
    const [showAllNews, setShowAllNews] = useState(false);
    const initialNewsCount = 3;

    return (
        <div className="min-h-screen bg-[#FFFCF8]">
            {/* Don't have a great call on whether max-w-screen-xl is better */}
            <div className="max-w-screen-lg mx-auto px-8 py-24">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                    {/* Left Column - Fixed Info */}
                    <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
                        {/* Profile */}
                        <div className="md:sticky top-12 space-y-8">
                            <ProfileSection aboutMe={aboutMe} />
                        </div>
                    </div>

                    {/* Right Column - Scrolling Content */}
                    <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
                        {/* About section is typically first */}
                        {aboutMe.description && (
                            <section>
                                <p
                                    className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:no-underline [&_a]:text-[#E36C2D] [&_a:hover]:text-[#E36C2D] text-justify"
                                    dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                                />
                            </section>
                        )}

                        {/* Map through sectionOrder to render sections in correct order */}
                        {sectionOrder.map((sectionName) => {
                            // Most of this is redundant... but in case it needs to be unique.
                            switch (sectionName) {
                                case Section.News:
                                    return (
                                        newsData.length > 0 && (
                                            <section key={sectionName} id={sectionName.toLowerCase()}>
                                                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                                                    News
                                                </h2>
                                                <div className="space-y-0">
                                                    {newsData
                                                        .slice(0, showAllNews ? undefined : initialNewsCount)
                                                        .map((news, index) => (
                                                            <div key={index}>
                                                                <NewsEntry news={news} />
                                                            </div>
                                                        ))}
                                                </div>
                                                {newsData.length > initialNewsCount && (
                                                    <button
                                                        onClick={() => setShowAllNews(!showAllNews)}
                                                        className="mt-4 text-[#E36C2D] hover:text-[#E36C2D]/80 text-sm"
                                                    >
                                                        {showAllNews ? "Show less" : "Show more"}
                                                    </button>
                                                )}
                                            </section>
                                        )
                                    );
                                case Section.Education:
                                    return (
                                        educationData.length > 0 && (
                                            <section key={sectionName}>
                                                <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                                                    Education
                                                </h2>
                                                <div className="space-y-12">
                                                    {educationData.map((education, index) => (
                                                        <EducationEntry key={index} education={education} />
                                                    ))}
                                                </div>
                                            </section>
                                        )
                                    );
                                case Section.Publication:
                                    return (
                                        publicationData.length > 0 && (
                                            <section key={sectionName}>
                                                <h2 className="font-serif text-l mb-2 tracking-wide uppercase">
                                                    Publications
                                                </h2>
                                                <p className="text-sm text-zinc-700 mb-8"><sup>#</sup> denotes equally contributed, <sup>*</sup> denotes corresponding author.

                                                </p>
                                                <div className="space-y-12">
                                                    {publicationData.map((publication, index) => (
                                                        <div key={index}>
                                                            <PublicationEntry publication={publication} />
                                                            {index < publicationData.length - 1 && (
                                                                <div className="h-px bg-zinc-200 my-8" />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )
                                    );
                                case Section.Experience:
                                    return (
                                        experienceData.length > 0 && (
                                            <section key={sectionName}>
                                                <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                                                    Experience
                                                </h2>
                                                <div className="space-y-12">
                                                    {experienceData.map((experience, index) => (
                                                        <ExperienceEntry
                                                            key={index}
                                                            experience={experience}
                                                        />
                                                    ))}
                                                </div>
                                            </section>
                                        )
                                    );
                                case Section.Awards:
                                    return (
                                        awardsData.length > 0 && (
                                            <section key={sectionName}>
                                                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                                                    Awards and Cerficates
                                                </h2>
                                                <div className="space-y-0">
                                                    {awardsData.map((awards, index) => (
                                                        <div key={index}>
                                                            <AwardsEntry awards={awards} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )
                                    );
                                case Section.Talks:
                                    return (
                                        talksData.length > 0 && (
                                            <section key={sectionName}>
                                                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                                                    Talks and Posters
                                                </h2>
                                                <div className="space-y-0">
                                                    {talksData.map((talks, index) => (
                                                        <div key={index}>
                                                            <TalksEntry talks={talks} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )
                                    );
                                case Section.Teaching:
                                    return (
                                        teachingData.length > 0 && (
                                            <section key={sectionName}>
                                                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                                                    Teaching
                                                </h2>
                                                <div className="space-y-0">
                                                    {teachingData.map((teaching, index) => (
                                                        <div key={index}>
                                                            <TeachingEntry teaching={teaching} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )
                                    );
                                case Section.Service:
                                    return (
                                        serviceData.length > 0 && (
                                            <section key={sectionName}>
                                                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                                                    Service
                                                </h2>
                                                <div className="space-y-0">
                                                    {serviceData.map((service, index) => (
                                                        <div key={index}>
                                                            <ServiceEntry service={service} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )
                                    );
                                case Section.Mentoring:
                                    return (
                                        mentoringData.length > 0 && (
                                            <section key={sectionName}>
                                                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                                                    Mentoring
                                                </h2>
                                                <div className="space-y-4">
                                                    {mentoringData.map((mentoring, index) => (
                                                        <div key={index}>
                                                            <MentoringEntry mentoring={mentoring} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )
                                    );

                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
