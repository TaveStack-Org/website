import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import AnimationContainer from "@/components/global/animation-container";

export default function DocsPage() {
    return (
        <div className="w-full relative pt-32 pb-20">
            <Wrapper>
                <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
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

                    {/* Getting Started Section */}
                    <AnimationContainer animation="fadeUp" delay={0.5} className="w-full mt-12">
                        <div className="text-left space-y-6">
                            <h2 className="text-2xl md:text-3xl font-medium">Getting Started</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    TaveStack is designed to make transcription and AI-powered analysis simple and accessible for African markets. Follow these steps to get started:
                                </p>
                                <ol className="list-decimal list-inside space-y-3 ml-4">
                                    <li>Create an account on the TaveStack platform</li>
                                    <li>Choose your subscription plan (Free, Professional, or Enterprise)</li>
                                    <li>Start recording or upload your audio/video files</li>
                                    <li>Let our AI process and transcribe your content</li>
                                    <li>Access your transcriptions, summaries, and action items</li>
                                </ol>
                            </div>
                        </div>
                    </AnimationContainer>

                    {/* Features Section */}
                    <AnimationContainer animation="fadeUp" delay={0.6} className="w-full mt-12">
                        <div className="text-left space-y-6">
                            <h2 className="text-2xl md:text-3xl font-medium">Key Features</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-medium">Transcription</h3>
                                    <p className="text-muted-foreground">
                                        High-accuracy transcription optimized for African accents and languages, with support for multiple formats.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-medium">AI Processing</h3>
                                    <p className="text-muted-foreground">
                                        Automatic summarization, action item extraction, and contextual intelligence powered by advanced AI.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-medium">Workflow Integration</h3>
                                    <p className="text-muted-foreground">
                                        Seamlessly integrate with your existing tools and project management systems.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-medium">Offline Support</h3>
                                    <p className="text-muted-foreground">
                                        Works with limited connectivity, designed for the challenges of African infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>

                    {/* API Reference */}
                    <AnimationContainer animation="fadeUp" delay={0.7} className="w-full mt-12">
                        <div className="text-left space-y-6">
                            <h2 className="text-2xl md:text-3xl font-medium">API Reference</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    For Enterprise customers, TaveStack offers a comprehensive API for custom integrations:
                                </p>
                                <div className="bg-neutral-900/50 rounded-lg p-6 space-y-3 border border-neutral-800">
                                    <code className="text-sm text-purple-400">POST /api/transcribe</code>
                                    <p className="text-sm">Submit audio/video files for transcription</p>
                                </div>
                                <div className="bg-neutral-900/50 rounded-lg p-6 space-y-3 border border-neutral-800">
                                    <code className="text-sm text-purple-400">GET /api/transcriptions/:id</code>
                                    <p className="text-sm">Retrieve transcription results and metadata</p>
                                </div>
                                <div className="bg-neutral-900/50 rounded-lg p-6 space-y-3 border border-neutral-800">
                                    <code className="text-sm text-purple-400">POST /api/analyze</code>
                                    <p className="text-sm">Generate summaries and extract action items</p>
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>

                    {/* Support Section */}
                    <AnimationContainer animation="fadeUp" delay={0.8} className="w-full mt-12">
                        <div className="text-left space-y-6">
                            <h2 className="text-2xl md:text-3xl font-medium">Support</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Need help? We're here for you:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Email support: support@tavestack.com</li>
                                    <li>Priority support for Professional and Enterprise plans</li>
                                    <li>24/7 dedicated support for Enterprise customers</li>
                                    <li>Community forum: community.tavestack.com</li>
                                </ul>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>
            </Wrapper>
        </div>
    );
}
