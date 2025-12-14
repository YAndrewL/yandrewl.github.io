export interface MentoringEntry {
    name: string;
    institution: string;
    currentPosition?: string;
}

export const mentoringData: MentoringEntry[] = [
    {
        name: "Zidong Su",
        institution: "Tsinghua University",
        currentPosition: "Ph.D. student"
    },
    {
        name: "Jue Wang",
        institution: "Tsinghua University",
        currentPosition: "Ph.D. student"
    },
    {
        name: "Yuhan Yang",
        institution: "Beijing University of Chinese Medicine",
        currentPosition: "Ph.D. student"
    },
    {
        name: "Kunhan Guo",
        institution: "The University of Hong Kong",
        currentPosition: "Undergraduate student"
    },

    // Add more monitoring entries here
];