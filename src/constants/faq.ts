export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQS: FAQItem[] = [
    {
        question: "How accurate is TaveStack's transcription for African accents?",
        answer: "TaveStack has been specifically trained on diverse African accents and dialects, achieving 95% accuracy for Nigerian, Kenyan, Ghanaian, and South African English variants. Our AI models continuously improve through machine learning to better recognize regional speech patterns."
    },
    {
        question: "What languages does TaveStack support?",
        answer: "TaveStack currently supports English (including various African English dialects), Swahili, Yoruba, Igbo, Hausa, French, and Arabic. We're actively expanding our language capabilities based on user demand across the African continent."
    },
    {
        question: "How does TaveStack's contextual intelligence feature work?",
        answer: "Our contextual intelligence analyzes the content and context of conversations to identify related information, recurring themes, and important connections between topics. This helps users discover valuable insights they might otherwise miss and creates a knowledge graph of their organizational information over time."
    },
    {
        question: "Which workflow tools can TaveStack integrate with?",
        answer: "TaveStack integrates seamlessly with popular productivity tools including Slack, Trello, Asana, Microsoft Teams, Google Workspace, and Notion. We also offer custom API integrations for enterprise customers with specific workflow requirements."
    },
    {
        question: "How does TaveStack handle data privacy and security?",
        answer: "We implement enterprise-grade encryption for all data at rest and in transit. Your recordings and transcripts are stored securely, and we offer data residency options for organizations with specific compliance requirements. We never share or sell your data to third parties."
    },
    {
        question: "Is there a mobile app available?",
        answer: "Yes, we have both iOS and Android apps available, optimized for lower bandwidth environments common across Africa. Our mobile apps include offline recording capabilities and can process transcriptions locally when needed, synchronizing with the cloud when connectivity is available."
    }
];
