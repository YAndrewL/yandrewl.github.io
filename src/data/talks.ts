export interface Talks {
    conference?: string;
    year?: string;
    poster?: string;
    description: string;
    location?: string;
}

export const talksData: Talks[] = [
    // If you don't want to show news, just make the array empty.
    {
        year: "2019",
        conference: "The Cold Spring Harbor Asia Conferences - Cilia and Centrosomes",
        poster: "poster",
        description: "RNA editing restricts hyperactive ciliary kinases",
        location: "Suzhou"
    },
    {
        year: "2019",
        conference: "Academic retreat of Chinese Academy of Sciences",
        poster: "poster",
        description: "Bioinformatics pipeline for RNA editing analysis",
        location: "Beijing"
    },
    {
        year: "2015",
        conference: "ISCB-Asia 2025",
        poster: "poster",
        description: "SpaFormer: A multi-modal foundation model for spatial proteomics",
        location: "HK"
    },

]