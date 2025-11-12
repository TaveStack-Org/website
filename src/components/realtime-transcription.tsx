"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { createClient, LiveTranscriptionEvents } from "@deepgram/sdk";
import { Mic, MicOff, Loader2 } from "lucide-react";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import GradientText from "./ui/gradient-text";
import SectionBadge from "./ui/section-badge";
import { cn } from "@/lib";

interface TranscriptItem {
    text: string;
    timestamp: number;
    isFinal: boolean;
}

const RealtimeTranscription = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [transcript, setTranscript] = useState<TranscriptItem[]>([]);
    const [interimTranscript, setInterimTranscript] = useState("");
    const [error, setError] = useState<string>("");

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const connectionRef = useRef<any>(null);
    const transcriptEndRef = useRef<HTMLDivElement>(null);
    const transcriptContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Auto-scroll to bottom of transcript container when transcript updates
        if (transcriptContainerRef.current) {
            transcriptContainerRef.current.scrollTop = transcriptContainerRef.current.scrollHeight;
        }
    }, [transcript, interimTranscript]);

    const startRecording = async () => {
        try {
            setIsConnecting(true);
            setError("");

            // Check browser support
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                setError("Your browser doesn't support audio recording");
                setIsConnecting(false);
                return;
            }

            // Request microphone permission
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            // Initialize Deepgram connection
            const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY || "");
            const connection = deepgram.listen.live({
                model: "nova-2",
                language: "en",
                smart_format: true,
                interim_results: true,
            });

            connection.on(LiveTranscriptionEvents.Open, () => {
                console.log("Deepgram connection opened");
                setIsConnecting(false);
                setIsRecording(true);

                // Set up MediaRecorder
                const mediaRecorder = new MediaRecorder(stream, {
                    mimeType: "audio/webm",
                });

                mediaRecorder.addEventListener("dataavailable", (event) => {
                    if (event.data.size > 0 && connection.getReadyState() === 1) {
                        connection.send(event.data);
                    }
                });

                mediaRecorder.start(250); // Send audio chunks every 250ms
                mediaRecorderRef.current = mediaRecorder;
            });

            connection.on(LiveTranscriptionEvents.Transcript, (data) => {
                const transcript = data.channel.alternatives[0].transcript;

                if (transcript && transcript.length > 0) {
                    if (data.is_final) {
                        setTranscript((prev) => [
                            ...prev,
                            {
                                text: transcript,
                                timestamp: Date.now(),
                                isFinal: true,
                            },
                        ]);
                        setInterimTranscript("");
                    } else {
                        setInterimTranscript(transcript);
                    }
                }
            });

            connection.on(LiveTranscriptionEvents.Error, (error) => {
                console.error("Deepgram error:", error);
                setError("Transcription error occurred");
                stopRecording();
            });

            connection.on(LiveTranscriptionEvents.Close, () => {
                console.log("Deepgram connection closed");
            });

            connectionRef.current = connection;
        } catch (err) {
            console.error("Error starting recording:", err);
            setError(
                err instanceof Error && err.name === "NotAllowedError"
                    ? "Microphone permission denied"
                    : "Failed to start recording"
            );
            setIsConnecting(false);
            setIsRecording(false);
        }
    };

    const stopRecording = () => {
        // Stop media recorder
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
            mediaRecorderRef.current = null;
        }

        // Close Deepgram connection
        if (connectionRef.current) {
            connectionRef.current.finish();
            connectionRef.current = null;
        }

        setIsRecording(false);
        setIsConnecting(false);
    };

    const clearTranscript = () => {
        setTranscript([]);
        setInterimTranscript("");
        setError("");
    };

    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center gap-6">
                <AnimationContainer animation="fadeUp" delay={0.1}>
                    <SectionBadge title="Try It Live" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium !leading-tight text-center">
                        <GradientText
                            colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']}
                            animationSpeed={6}
                            className="mx-0"
                        >
                            Real-time Speech Transcription
                        </GradientText>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl">
                        Experience the power of AI-driven speech recognition. Click the microphone button and start speaking to see your words transcribed in real-time.
                    </p>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4} className="w-full max-w-3xl">
                    <div
                        className={cn(
                            "relative rounded-2xl border p-6 backdrop-blur-sm",
                            mounted && resolvedTheme === "dark"
                                ? "bg-neutral-900/50 border-neutral-800"
                                : "bg-white/50 border-neutral-200"
                        )}
                    >
                        {/* Controls */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                {isRecording && (
                                    <div className="flex items-center gap-2">
                                        <div className="relative">
                                            <div className="size-3 bg-red-500 rounded-full animate-pulse" />
                                            <div className="absolute inset-0 size-3 bg-red-500 rounded-full animate-ping" />
                                        </div>
                                        <span className="text-sm font-medium">Recording</span>
                                    </div>
                                )}
                                {!isRecording && transcript.length > 0 && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={clearTranscript}
                                        className="text-muted-foreground"
                                    >
                                        Clear
                                    </Button>
                                )}
                            </div>

                            <Button
                                size="lg"
                                onClick={isRecording ? stopRecording : startRecording}
                                disabled={isConnecting}
                                className={cn(
                                    "relative overflow-hidden transition-all",
                                    isRecording && "bg-red-600 hover:bg-red-700"
                                )}
                            >
                                {isConnecting ? (
                                    <>
                                        <Loader2 className="size-5 mr-2 animate-spin" />
                                        Connecting...
                                    </>
                                ) : isRecording ? (
                                    <>
                                        <MicOff className="size-5 mr-2" />
                                        Stop Recording
                                    </>
                                ) : (
                                    <>
                                        <Mic className="size-5 mr-2" />
                                        Start Recording
                                    </>
                                )}
                            </Button>
                        </div>

                        {/* Transcript Display */}
                        <div
                            ref={transcriptContainerRef}
                            className={cn(
                                "min-h-[300px] max-h-[400px] overflow-y-auto rounded-lg p-4 space-y-3 scroll-smooth",
                                mounted && resolvedTheme === "dark"
                                    ? "bg-neutral-950/50"
                                    : "bg-neutral-50"
                            )}
                        >
                            {transcript.length === 0 && !interimTranscript && !error && (
                                <div className="flex items-center justify-center h-[300px] text-muted-foreground text-center">
                                    <div className="space-y-2">
                                        <Mic className="size-12 mx-auto opacity-30" />
                                        <p>Click "Start Recording" and begin speaking</p>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="flex items-center justify-center h-[300px]">
                                    <div className="text-red-500 text-center">
                                        <p className="font-medium">{error}</p>
                                        <p className="text-sm mt-2 text-muted-foreground">
                                            Please check your microphone permissions and try again
                                        </p>
                                    </div>
                                </div>
                            )}

                            {transcript.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-foreground animate-in fade-in slide-in-from-bottom-2 duration-300"
                                >
                                    <p className="text-sm md:text-base leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}

                            {interimTranscript && (
                                <div className="text-muted-foreground italic animate-in fade-in">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        {interimTranscript}
                                    </p>
                                </div>
                            )}

                            <div ref={transcriptEndRef} />
                        </div>

                        {/* Info Text */}
                        {isRecording && (
                            <p className="text-xs text-muted-foreground mt-4 text-center">
                                Speak clearly into your microphone. The transcription appears in real-time.
                            </p>
                        )}
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default RealtimeTranscription;
