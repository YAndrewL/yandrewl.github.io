import Image from "next/image";
import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    ArrowUpRight,
    GraduationCap,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";
import { useState } from "react";

// Add ORCID icon component
const OrcidIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0ZM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947-.947-.431-.947-.947.422-.947.947-.947Zm-.722 3.038h1.444v10.041H6.647V7.416Zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416Zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222Z" />
    </svg>
);

interface ProfileSectionProps {
    aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
    const [isHovering, setIsHovering] = useState(false);

    if (!aboutMe) {
        return null;
    }

    const profileImageClassName =
        "object-cover object-[center_20%] rounded-xl transition-opacity duration-300";

    const profileImage = aboutMe.imageUrl ? (
        <div
            className="relative aspect-square w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Image
                src={
                    isHovering && aboutMe.hoverImageUrl
                        ? aboutMe.hoverImageUrl
                        : aboutMe.imageUrl
                }
                alt={aboutMe.name}
                fill
                priority
                className={profileImageClassName}
            />
        </div>
    ) : null;

    return (
        <div className="md:sticky top-12 flex flex-col gap-4 md:space-y-8">
            <div className="flex flex-row-reverse md:inline-grid md:w-max md:max-w-full gap-4 md:gap-0 md:mb-8">
                {profileImage && (
                    <div className="w-1/3 shrink-0 md:col-start-1 md:row-start-1 md:justify-self-center md:mb-6 md:w-[85%] md:max-w-[220px]">
                        {profileImage}
                    </div>
                )}
                <h1 className="w-2/3 md:w-auto font-serif text-3xl font-light tracking-wide mb-0 md:col-start-1 md:row-start-2 md:justify-self-start">
                    {aboutMe.name}
                </h1>
            </div>
            <div className="w-full">
                {aboutMe.altName && (
                    <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
                        {aboutMe.altName}
                    </p>
                )}
                <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase mb-6">
                    {aboutMe.title}
                    <br />
                    {aboutMe.institutionUrl ? (
                        <a
                            href={aboutMe.institutionUrl}
                            className="hover:text-zinc-900 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {aboutMe.institution}
                        </a>
                    ) : (
                        aboutMe.institution
                    )}
                </p>
                <div className="flex gap-6 mb-6">
                    {aboutMe.blogUrl && (
                        <a
                            href={aboutMe.blogUrl}
                            className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArrowUpRight
                                size={12}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                            <span className="tracking-wider uppercase">Blog</span>
                        </a>
                    )}
                    {aboutMe.cvUrl && (
                        <a
                            href={aboutMe.cvUrl}
                            className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArrowUpRight
                                size={12}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                            <span className="tracking-wider uppercase">CV</span>
                        </a>
                    )}
                </div>
                <div className="flex gap-4 mb-6">
                    <a
                        href={`mailto:${aboutMe.email}`}
                        className="text-zinc-600 hover:text-zinc-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Mail size={20} />
                    </a>
                    {aboutMe.googleScholarUrl && (
                        <a
                            href={aboutMe.googleScholarUrl}
                            className="text-zinc-600 hover:text-zinc-900 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GraduationCap size={20} />
                        </a>
                    )}
                    {aboutMe.twitterUsername && (
                        <a
                            href={`https://twitter.com/${aboutMe.twitterUsername}`}
                            className="text-zinc-600 hover:text-zinc-900 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter size={20} />
                        </a>
                    )}
                    {aboutMe.githubUsername && (
                        <a
                            href={`https://github.com/${aboutMe.githubUsername}`}
                            className="text-zinc-600 hover:text-zinc-900 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {aboutMe.linkedinUsername && (
                        <a
                            href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                            className="text-zinc-600 hover:text-zinc-900 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={20} />
                        </a>
                    )}
                    {aboutMe.orcidId && (
                        <a
                            href={`https://orcid.org/${aboutMe.orcidId}`}
                            className="text-zinc-600 hover:text-zinc-900 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <OrcidIcon size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
