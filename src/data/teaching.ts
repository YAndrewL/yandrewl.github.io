export interface Teaching {
    course?: string;
    year?: string;
    location?: string;
    codeUrl?: string;
    fileUrl?: string;
}

export const teachingData: Teaching[] = [
    // If you don't want to show news, just make the array empty.
    {
        year: "Fall 2025",
        course: "Introduction to data science (CS2501A)",
        location: "HKU, Hong Kong",

    },
]
