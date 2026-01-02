export interface AboutMe {
    name: string;
    title: string;
    institution: string;
    description: string;
    email: string;
    imageUrl?: string;
    hoverImageUrl?: string;
    blogUrl?: string;
    cvUrl?: string;
    googleScholarUrl?: string;
    twitterUsername?: string;
    githubUsername?: string;
    linkedinUsername?: string;
    orcidId?: string;
    funDescription?: string; // Gets placed in the left sidebar
    secretDescription?: string; // Gets placed in the bottom
    altName?: string;
    institutionUrl?: string;
}
export const aboutMe: AboutMe = {
    name: "Yufan (Andrew) Liu",
    title: "Ph.D. Candidate in Computer Science",
    institution: "The University of Hong Kong",
    // Note that links work in the description
    description:
        "I am a Ph.D. candidate in Computer Science at the School of Computing and Data Science, The University of Hong Kong (HKU), where I am fortunate to be advised by Prof. <a href='https://www.zhenqin-wu.com/'>Zhenqin (Michael) Wu</a>.<br><br> I completed my M.S. in Biology at the School of Pharmaceutical Sciences and the School of Life Sciences from Tsinghua University, and I hold a B.S. in Biotechnology from Huazhong Agricultural University.<br><br> My research interests span AI4Science, bioinformatics, and computational biology, with particular focus on spatial biology, computational genomics, and the design of biological molecules including proteins and small molecules. I am passionate about deep learning algorithms, especially generative modeling approaches. Additionally, I bring hands-on experience in experimental biology from wet lab settings. I actively collaborate with clinical and industrial partners to develop innovative AI solutions for biological and medical applications.",
    email: "yufan.liu@connect.hku.hk",
    imageUrl: "/images/lyf.jpg",
    hoverImageUrl: "/images/lyf_hover.png",
    googleScholarUrl: "https://scholar.google.com/citations?user=j9s5IIoAAAAJ&hl=en",
    githubUsername: "YAndrewL",
    linkedinUsername: "yufan-andrew-liu-506823173",
    orcidId: "0009-0007-8781-0282",
    twitterUsername: "yufan_andrew",
    // blogUrl: "https://",
    cvUrl: "/files/cv.pdf",
    institutionUrl: "https://www.hku.hk",
    // altName: "",
    secretDescription: "The University of Hong Kong",
};
