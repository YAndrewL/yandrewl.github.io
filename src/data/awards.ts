export interface Awards {
    date?: string;
    title?: string;
    description: string;
    link?: string;
}

export const awardsData: Awards[] = [
    // If you don't want to show awards, just make the array empty.
    {
        date: "Mar 2025",
        description: "Postgraduate Scholarships, The University of Hong Kong",
    },
    {
        date: "Oct 2022",
        description: "Certificate, Tsinghua University Big Data Capability Improvement Project",
    },
    {
        date: "Aug 2022",
        description: "Excellence award (Top 6 groups), Outstanding individuals and Certificate, DeeCamp Artificial Intelligence Camp for Life Science",
    },
    {
        date: "Dec 2021",
        description: "Fourth place, Global Antibody Affinity Prediction Competition",
    },
    {
        date: "Oct 2021",
        description: "Excellent Team Award, Practical Course of Tsinghua University Big Data Capability Improvement Project",
    },
    {
        date: "Oct 2019",
        description: "Best Poster Award, The Cold Spring Harbor Asia Conferences",
    },
    {
        date: "Oct 2019",
        description: "Outstanding Undergraduate Graduate, Huazhong Agricultural University",
    },
    {
        date: "Sep 2019",
        description: "Innovation Award for Bachelor's Degree Theses, Huazhong Agricultural University",
    },
    {
        date: "2016-2018",
        description: "National Encouragement Scholarship, Huazhong Agricultural University",
    },
    {
        date: "2016-2019",
        description: "Merit Student, Huazhong Agricultural University",
    }
];
