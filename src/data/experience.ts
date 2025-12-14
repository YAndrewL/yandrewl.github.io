export interface Experience {
    date: string;
    title: string;
    company: string;
    description?: string;
    advisor?: string;
    advisorUrl?: string;
    manager?: string;
    companyUrl?: string;
    location?: string;
}

export const experienceData: Experience[] = [
    {
        date: "Oct 2024 - Present",
        title: "Machine Learning Researcher",
        company: "Guang'anmen Hospital, China Academy of Chinese Medical Sciences",
        description: "Machine learning methods for cardiovascular diseases",
        advisor: "Prof. <a href='https://orcid.org/0000-0003-4087-7651'>Kuiwu Yao</a>",
        location: "Beijing (Remote)"
    },
    {
        date: "May 2021 - Sep 2021",
        title: "Machine Learning Intern",
        company: "Tong Ren Hospital, Capital Medical University",
        description: "Machine learning methods for newborn deafness diagnosis",
        advisor: "Prof. Lihui Huang",
        location: "Beijing"
    },
    {
        date: "Jul 2018 - Sep 2018",
        title: "Undergraduate Research Intern",
        company: "School of Life Sciences, Tsinghua University",
        description: "Bioinformatics analysis for Next-generation Sequencing (NGS) data",
        advisor: "Prof. <a href='https://orcid.org/0009-0007-4780-8399'>Xiao Liu</a>",
        location: "Beijing"
    },
    {
        date: "Mar 2018 - Nov 2018",
        title: "Undergraduate Research Intern",
        company: "College of Informatics, Huazhong Agricultural University",
        description: "Bioinformatics for bioarray data and biomedical NLP",
        advisor: "Prof. <a href='https://encoi.hzau.edu.cn/info/1015/1112.htm'>Jingbo Xia</a>",
        location: "Wuhan, Hubei"
    },
];
