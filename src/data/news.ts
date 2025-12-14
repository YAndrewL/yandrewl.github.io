export interface News {
    date?: string;
    title?: string;
    description: string;
    link?: string;
}

export const newsData: News[] = [
    // If you don't want to show news, just make the array empty.
    {
        date: "Jul 2025",
        description: "<a href='https://link.springer.com/protocol/10.1007/978-1-0716-4623-6_18'>CLAPE protocol</a> is published in Methods in Molecular Biology.",
    },
    {
        date: "Mar 2025",
        description: "Start as a Ph.D. student at HKU.",
    },
    {
        date: "Nov 2024",
        description: "<a href='https://jcheminf.biomedcentral.com/articles/10.1186/s13321-024-00920-2'>CLAPE-SMB</a> is published in Journal of Cheminformatics.",
    },
    {
        date: "Jan 2024",
        description: "<a href='https://academic.oup.com/bib/article/25/1/bbad488/7505238'>CLAPE-DB</a> is published in Briefings in Bioinformatics.",
    },
    {
        date: "Jun 2023",
        description: "Officially graduate from Tsinghua University with M.S.",
    },
    {
        date: "Jul 2021",
        description: "<a href='https://www.science.org/doi/full/10.1126/science.abd8971'>RNA editing Work</a> is published online in Science.",
    }
];

