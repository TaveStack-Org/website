import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import AnimationContainer from "@/components/global/animation-container";
import DocsLayout from "@/components/docs/docs-layout";
import DocSection, { DocSubsection } from "@/components/docs/doc-section";
import CodeBlock from "@/components/docs/code-block";
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";

const docSections = [
    {
        id: "introduction",
        title: "Introduction",
        subsections: [
            { id: "overview", title: "Overview" },
            { id: "key-benefits", title: "Key Benefits" },
        ],
    },
    {
        id: "getting-started",
        title: "Getting Started",
        subsections: [
            { id: "account-setup", title: "Account Setup" },
            { id: "first-transcription", title: "First Transcription" },
        ],
    },
    {
        id: "features",
        title: "Features",
        subsections: [
            { id: "transcription", title: "Transcription" },
            { id: "ai-processing", title: "AI Processing" },
            { id: "workflow-integration", title: "Workflow Integration" },
            { id: "offline-support", title: "Offline Support" },
        ],
    },
    {
        id: "api-reference",
        title: "API Reference",
        subsections: [
            { id: "authentication", title: "Authentication" },
            { id: "endpoints", title: "Endpoints" },
            { id: "rate-limits", title: "Rate Limits" },
        ],
    },
    {
        id: "best-practices",
        title: "Best Practices",
        subsections: [
            { id: "audio-quality", title: "Audio Quality" },
            { id: "file-formats", title: "File Formats" },
        ],
    },
    {
        id: "support",
        title: "Support & Resources",
    },
];

export default function DocsPage() {
    return (
        <div className="w-full relative pt-32 pb-20">
            <Wrapper>
                <div className="flex flex-col items-center text-center gap-8 max-w-6xl mx-auto mb-12">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Documentation" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                            TaveStack Documentation
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                            Everything you need to know about using TaveStack for transcription, AI processing, and workflow integration.
                        </p>
                    </AnimationContainer>
                </div>

                <DocsLayout sections={docSections}>
                    {/* Introduction Section */}
                    <DocSection id="introduction" title="Introduction">
                        <DocSubsection id="overview" title="Overview">
                            <p>
                                TaveStack is an AI-powered transcription and analysis platform designed specifically for African markets.
                                We combine cutting-edge speech recognition technology with contextual AI to help businesses and individuals
                                transform their audio and video content into actionable insights.
                            </p>
                            <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg mt-4">
                                <Lightbulb className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-purple-500 mb-1">Why TaveStack?</p>
                                    <p className="text-sm">
                                        Built from the ground up to handle African accents, languages, and connectivity challenges,
                                        making professional transcription accessible to everyone.
                                    </p>
                                </div>
                            </div>
                        </DocSubsection>

                        <DocSubsection id="key-benefits" title="Key Benefits">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>High-accuracy transcription optimized for African accents and languages</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>AI-powered summarization and action item extraction</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Offline-first architecture for reliable service in low-connectivity areas</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Seamless integration with popular project management tools</span>
                                </li>
                            </ul>
                        </DocSubsection>
                    </DocSection>

                    {/* Getting Started Section */}
                    <DocSection id="getting-started" title="Getting Started">
                        <DocSubsection id="account-setup" title="Account Setup">
                            <p>
                                Getting started with TaveStack is simple and straightforward:
                            </p>
                            <ol className="list-decimal list-inside space-y-3 ml-4 mt-4">
                                <li>Visit the TaveStack platform and click "Sign Up"</li>
                                <li>Verify your email address</li>
                                <li>Choose your subscription plan (Free, Professional, or Enterprise)</li>
                                <li>Complete your profile setup</li>
                                <li>You're ready to start transcribing!</li>
                            </ol>
                        </DocSubsection>

                        <DocSubsection id="first-transcription" title="First Transcription">
                            <p>
                                Follow these steps to create your first transcription:
                            </p>
                            <div className="space-y-4 mt-4">
                                <div className="p-4 bg-neutral-900/30 border border-border rounded-lg">
                                    <p className="font-medium mb-2">Step 1: Upload Your File</p>
                                    <p className="text-sm">
                                        Click the "New Transcription" button and either upload an audio/video file or start a live recording.
                                        Supported formats include MP3, WAV, MP4, and MOV.
                                    </p>
                                </div>
                                <div className="p-4 bg-neutral-900/30 border border-border rounded-lg">
                                    <p className="font-medium mb-2">Step 2: Configure Settings</p>
                                    <p className="text-sm">
                                        Select your language, speaker identification preferences, and any custom vocabulary for better accuracy.
                                    </p>
                                </div>
                                <div className="p-4 bg-neutral-900/30 border border-border rounded-lg">
                                    <p className="font-medium mb-2">Step 3: Process & Review</p>
                                    <p className="text-sm">
                                        Click "Start Processing" and wait for the AI to transcribe your content.
                                        You'll receive a notification when it's ready for review.
                                    </p>
                                </div>
                            </div>
                        </DocSubsection>
                    </DocSection>

                    {/* Features Section */}
                    <DocSection id="features" title="Features">
                        <DocSubsection id="transcription" title="Transcription">
                            <p>
                                Our transcription engine is specifically trained on African accents and languages,
                                providing industry-leading accuracy for content from across the continent.
                            </p>
                            <div className="grid gap-4 md:grid-cols-2 mt-4">
                                <div className="p-4 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg">
                                    <h4 className="font-medium text-foreground mb-2">Multi-Language Support</h4>
                                    <p className="text-sm">
                                        Support for English, Swahili, Yoruba, Zulu, Amharic, and more African languages.
                                    </p>
                                </div>
                                <div className="p-4 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg">
                                    <h4 className="font-medium text-foreground mb-2">Speaker Diarization</h4>
                                    <p className="text-sm">
                                        Automatically identify and separate different speakers in your recordings.
                                    </p>
                                </div>
                            </div>
                        </DocSubsection>

                        <DocSubsection id="ai-processing" title="AI Processing">
                            <p>
                                Beyond transcription, our AI analyzes your content to extract meaningful insights:
                            </p>
                            <ul className="space-y-2 mt-4 ml-4">
                                <li>• <strong>Automatic Summarization:</strong> Get concise summaries of long recordings</li>
                                <li>• <strong>Action Items:</strong> Extract tasks and to-dos mentioned in conversations</li>
                                <li>• <strong>Key Topics:</strong> Identify main themes and topics discussed</li>
                                <li>• <strong>Sentiment Analysis:</strong> Understand the tone and emotion in your content</li>
                            </ul>
                        </DocSubsection>

                        <DocSubsection id="workflow-integration" title="Workflow Integration">
                            <p>
                                Connect TaveStack with your existing tools for seamless workflow automation:
                            </p>
                            <div className="space-y-3 mt-4">
                                <p>✓ Slack, Microsoft Teams, Discord</p>
                                <p>✓ Trello, Asana, Monday.com</p>
                                <p>✓ Google Drive, Dropbox, OneDrive</p>
                                <p>✓ Zapier for custom integrations</p>
                            </div>
                        </DocSubsection>

                        <DocSubsection id="offline-support" title="Offline Support">
                            <p>
                                TaveStack works even when your internet connection is unreliable:
                            </p>
                            <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mt-4">
                                <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-blue-500 mb-1">Offline Mode</p>
                                    <p className="text-sm">
                                        Record and queue transcriptions offline. They'll automatically sync when you're back online.
                                    </p>
                                </div>
                            </div>
                        </DocSubsection>
                    </DocSection>

                    {/* API Reference Section */}
                    <DocSection id="api-reference" title="API Reference">
                        <p className="text-muted-foreground mb-6">
                            For Enterprise customers, TaveStack offers a comprehensive REST API for custom integrations.
                        </p>

                        <DocSubsection id="authentication" title="Authentication">
                            <p>
                                All API requests require authentication using an API key. Include your key in the Authorization header:
                            </p>
                            <div className="mt-4">
                                <CodeBlock
                                    code="Authorization: Bearer YOUR_API_KEY"
                                    language="http"
                                    title="Example Request Header"
                                />
                            </div>
                        </DocSubsection>

                        <DocSubsection id="endpoints" title="Endpoints">
                            <div className="space-y-6">
                                <div>
                                    <CodeBlock
                                        code={`POST /api/v1/transcribe

{
  "file_url": "https://example.com/audio.mp3",
  "language": "en",
  "enable_diarization": true,
  "callback_url": "https://yourapp.com/webhook"
}`}
                                        language="json"
                                        title="Submit Transcription"
                                    />
                                    <p className="mt-2 text-sm">
                                        Submit an audio/video file for transcription. Returns a job ID for tracking.
                                    </p>
                                </div>

                                <div>
                                    <CodeBlock
                                        code={`GET /api/v1/transcriptions/:id

Response:
{
  "id": "trans_123456",
  "status": "completed",
  "text": "Full transcription text...",
  "speakers": [...],
  "metadata": {...}
}`}
                                        language="json"
                                        title="Get Transcription"
                                    />
                                    <p className="mt-2 text-sm">
                                        Retrieve transcription results and metadata using the job ID.
                                    </p>
                                </div>

                                <div>
                                    <CodeBlock
                                        code={`POST /api/v1/analyze

{
  "transcription_id": "trans_123456",
  "features": ["summary", "action_items", "topics"]
}`}
                                        language="json"
                                        title="Analyze Content"
                                    />
                                    <p className="mt-2 text-sm">
                                        Generate AI-powered insights from your transcription.
                                    </p>
                                </div>
                            </div>
                        </DocSubsection>

                        <DocSubsection id="rate-limits" title="Rate Limits">
                            <p>
                                API rate limits vary by plan:
                            </p>
                            <div className="mt-4 overflow-x-auto">
                                <table className="min-w-full text-sm border border-border rounded-lg overflow-hidden">
                                    <thead className="bg-neutral-900/50">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-medium">Plan</th>
                                            <th className="px-4 py-3 text-left font-medium">Requests/Hour</th>
                                            <th className="px-4 py-3 text-left font-medium">Concurrent Jobs</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        <tr>
                                            <td className="px-4 py-3">Free</td>
                                            <td className="px-4 py-3">10</td>
                                            <td className="px-4 py-3">1</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3">Professional</td>
                                            <td className="px-4 py-3">100</td>
                                            <td className="px-4 py-3">5</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3">Enterprise</td>
                                            <td className="px-4 py-3">Custom</td>
                                            <td className="px-4 py-3">Custom</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </DocSubsection>
                    </DocSection>

                    {/* Best Practices Section */}
                    <DocSection id="best-practices" title="Best Practices">
                        <DocSubsection id="audio-quality" title="Audio Quality">
                            <p>
                                For the best transcription accuracy, follow these guidelines:
                            </p>
                            <div className="space-y-3 mt-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-foreground">Use Quality Microphones</p>
                                        <p className="text-sm">Invest in a good microphone to capture clear audio</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-foreground">Minimize Background Noise</p>
                                        <p className="text-sm">Record in quiet environments when possible</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-foreground">Speak Clearly</p>
                                        <p className="text-sm">Encourage participants to speak at a moderate pace</p>
                                    </div>
                                </div>
                            </div>
                        </DocSubsection>

                        <DocSubsection id="file-formats" title="File Formats">
                            <p>
                                TaveStack supports a wide range of audio and video formats:
                            </p>
                            <div className="grid gap-4 md:grid-cols-2 mt-4">
                                <div>
                                    <p className="font-medium text-foreground mb-2">Audio Formats</p>
                                    <p className="text-sm">MP3, WAV, M4A, FLAC, OGG, AAC</p>
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-2">Video Formats</p>
                                    <p className="text-sm">MP4, MOV, AVI, WebM, MKV</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg mt-4">
                                <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-amber-500 mb-1">File Size Limits</p>
                                    <p className="text-sm">
                                        Free: 100MB | Professional: 2GB | Enterprise: Custom
                                    </p>
                                </div>
                            </div>
                        </DocSubsection>
                    </DocSection>

                    {/* Support Section */}
                    <DocSection id="support" title="Support & Resources">
                        <p className="text-muted-foreground mb-6">
                            Need help? We're here for you with multiple support channels and resources.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg">
                                <h3 className="text-xl font-medium mb-3 text-foreground">Contact Support</h3>
                                <div className="space-y-3 text-sm">
                                    <p>📧 Email: support@tavestack.com</p>
                                    <p>💬 Live Chat: Available Mon-Fri, 9AM-6PM EAT</p>
                                    <p>📞 Phone: +254-XXX-XXXX (Enterprise only)</p>
                                </div>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-lg">
                                <h3 className="text-xl font-medium mb-3 text-foreground">Community</h3>
                                <div className="space-y-3 text-sm">
                                    <p>🌐 Community Forum: community.tavestack.com</p>
                                    <p>💡 Feature Requests: feedback.tavestack.com</p>
                                    <p>📚 Blog: blog.tavestack.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-neutral-900/30 border border-border rounded-lg">
                            <h3 className="text-xl font-medium mb-3 text-foreground">Service Level Agreements</h3>
                            <div className="space-y-2 text-sm">
                                <p><strong>Free:</strong> Community support, best effort response time</p>
                                <p><strong>Professional:</strong> Priority email support, 24-hour response time</p>
                                <p><strong>Enterprise:</strong> 24/7 dedicated support, 2-hour response time, dedicated account manager</p>
                            </div>
                        </div>
                    </DocSection>
                </DocsLayout>
            </Wrapper>
        </div>
    );
}
