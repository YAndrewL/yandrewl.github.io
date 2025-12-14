export interface Education {
    year: string;
    institution: string;
    degree: string;
    advisor?: string;
    thesis?: string;
    thesisUrl?: string;
    topics?: string;
    location?: string;
    department?: string;
}

export const educationData: Education[] = [
    // If you don't want to show education, just make the array empty.
    {
        year: "Mar 2025 - Present",
        institution: "The University of Hong Kong",
        degree: "Ph.D. candidate in Computer Science",
        advisor: "Prof. <a href='https://www.cs.hku.hk/index.php/people/academic-staff/zqwu'>Zhenqin (Michael) Wu</a>",
        location: "Hong Kong",
        department: "School of Computing and Data Science",
    },

    {
        year: "Sep 2019 - Jun 2023",
        institution: "Tsinghua University",
        degree: "M.S. in Biology",
        thesis: "Prediction of Protein-DNA Binding Sites Based on Deep Learning",
        advisor: "Prof. <a href='https://www.sps.tsinghua.edu.cn/spsen/info/1011/1143.htm'>Boxue Tian</a> and Prof. <a href='https://life.tsinghua.edu.cn/lifeen/info/1035/1110.htm'>Guangshuo Ou</a>",
        location: "Beijing",
        department: "School of Pharmaceutical Sciences, School of Life Sciences"
    },
    {
        year: "Sep 2015 - Jun 2019",
        institution: "Huazhong Agricultural University",
        degree: "B.S. in Biotechnology",
        thesis: "Functional Analysis of RNA Editing in C. elegans (completed at Tsinghua, Nov 2018 - May 2019)",
        advisor: "Prof. <a href='https://life.tsinghua.edu.cn/lifeen/info/1035/1110.htm'>Guangshuo Ou</a>",
        location: "Wuhan, Hubei",
        department: " College of Life Science and Technology"
    },
];
