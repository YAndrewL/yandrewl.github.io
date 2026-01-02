export interface Publication {
    year: string;
    conference: string;
    title: string;
    authors: string;
    paperUrl?: string;
    codeUrl?: string;
    bibtex?: string;
    tldr?: string;
    imageUrl?: string;
    award?: string;
    preprint?: string;
}

export const publicationData: Publication[] = [
    // If you don't want to show publications, just make the array empty.
    {
        year: "2025",
        conference: "Methods in Molecular Biology",
        title: "CLAPE: Protein-Ligand Binding Site Prediction via Protein Language Models",
        authors: "<strong>Yufan Liu</strong> and Boxue Tian<sup>*</sup>",
        paperUrl: "https://link.springer.com/protocol/10.1007/978-1-0716-4623-6_18",
        codeUrl: "https://pypi.org/project/clape/",
        award: "Invited book chapter",
        imageUrl: "/images/metmol2025.jpg"
    },
    {
        year: "2024",
        conference: "Journal of Cheminformatics",
        title: "Protein-small molecule binding site prediction based on a pre-trained protein language model with contrastive learning",
        authors: "Jue Wang<sup>#</sup>, <strong>Yufan Liu</strong><sup>#</sup> and Boxue Tian<sup>*</sup>",
        paperUrl: "https://jcheminf.biomedcentral.com/articles/10.1186/s13321-024-00920-2",
        codeUrl: "https://github.com/JueWangTHU/CLAPE-SMB",
        //bibtex: "https://arxiv.org/abs/2409.15476.bib",
        // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
        imageUrl:
            "/images/jchem2024.jpg"
        // if you have an image in public/images, you can use it like this:
        // imageUrl: "/images/publication-image.jpg"
    },
    {
        year: "2024",
        conference: "Briefings in Bioinformatics",
        title: "Protein-DNA binding sites prediction based on pre-trained protein language model and contrastive learning",
        authors: "<strong>Yufan Liu</strong> and Boxue Tian<sup>*</sup>",
        paperUrl: "https://academic.oup.com/bib/article-abstract/25/1/bbad488/7505238",
        codeUrl: "https://github.com/YAndrewL/CLAPE",
        imageUrl: "/images/bib2024.jpg"
    },
    {
        year: "2021",
        conference: "Science",
        title: "RNA editing restricts hyperactive ciliary kinases",
        authors: "Dongdong Li, <strong>Yufan Liu</strong>, Peishan Yi, Zhiwen Zhu, Wei Li, Qiangfeng Cliff Zhang, Jin Billy Li and Guangshuo Ou<sup>*</sup>",
        paperUrl: "https://www.science.org/doi/full/10.1126/science.abd8971",
        codeUrl: "https://github.com/YAndrewL/Quiclick",
        imageUrl: "/images/science2021.jpg",
    },
    {
        year: "2019",
        conference: "PLoS Biology",
        title: "Spectrin-based membrane skeleton supports ciliogenesis",
        authors: "Ru Jia<sup>#</sup>, Dongdong Li<sup>#</sup>, Ming Li<sup>#</sup>, Yongping Chai, <strong>Yufan Liu</strong>, Zhongyun Xie, Wenxin Shao, Chao Xie, Liuju Li, Xiaoshuai Huang, Liangyi Chen, Wei Li and Guangshuo Ou<sup>*</sup>",
        paperUrl: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000369",
        imageUrl: "/images/plosbio2019.png"
    },
    {
        year: "2025",
        conference: "bioRxiv",
        title: "Modeling patient tissues at molecular resolution with Eva",
        authors: "<strong>Yufan Liu</strong>, Rishabh Sharma, Matthew Bieniosek, Amy Kang, Eric Wu, Peter Chou, Irene Li, Maha Rahim, Erica Bauer, Ran Ji, Wei Duan, Li Qian, Ruibang Luo, Padmanee Sharma, Renu Dhanasekaran, Christian M. Schürch, Gregory Charville, Aaron Mayer, James Zou, Alexandro E. Trevino<sup>*</sup>, Zhenqin Wu<sup>*</sup>",
        paperUrl: "https://www.biorxiv.org/content/10.64898/2025.12.10.693553v1",
        codeUrl: "https://github.com/YAndrewL/Eva",
        imageUrl: "/images/Eva_model_structure.png",
        preprint: "Preprint"
    },
    {
        year: "2025",
        conference: "medRxiv",
        title: "Residual Cardiovascular Risk Prediction in Statin-Treated Patients Using Machine Learning and Biomarker Analysis",
        authors: "<strong>Yufan Liu</strong><sup>#</sup>, Yuhan Yang<sup>#</sup>, Tong Tong, Xiaoxiao Zhang, Zhang Jin, Mengwen Huang, Wenjie Liu, Zhenqin Wu, Ziyi Sun, Kuiwu Yao<sup>*</sup>",
        // paperUrl: "",
        preprint: "Preprint"
    },
    {
        year: "2024",
        conference: "bioRxiv",
        title: "Exploring Protein-DNA Binding Residue Prediction and Consistent Interpretability Analysis Using Deep Learning",
        authors: "<strong>Yufan Liu</strong><sup>*</sup>",
        paperUrl: "https://www.biorxiv.org/content/10.1101/2024.10.12.613667v1.abstract",
        preprint: "Preprint"
    },

];
