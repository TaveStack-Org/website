export interface HowItWorksItem {
    title: string;
    description: string;
    image: string;
}

export const HOW_IT_WORKS: HowItWorksItem[] = [
    {
        title: "Record & Transcribe",
        description: "Record your meetings, lectures, or interviews, and TaveStack automatically transcribes them with high accuracy, even for African accents.",
        image: "/record and transcribe.svg"
    },
    {
        title: "AI Processing",
        description: "Our AI analyzes your transcriptions to create summaries, extract action items, and identify key insights from your conversations.",
        image: "/AI processing.svg"
    },
    {
        title: "Workflow Integration",
        description: "Seamlessly integrate with your existing tools, automatically creating tasks in your project management systems and sharing insights with your team.",
        image: "/Workflow integration.svg"
    }
];