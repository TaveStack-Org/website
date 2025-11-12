import { createClient } from "@deepgram/sdk";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const apiKey = process.env.DEEPGRAM_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Deepgram API key not configured" },
                { status: 500 }
            );
        }

        const deepgram = createClient(apiKey);

        // Create a temporary key that expires in 10 minutes
        const { result, error } = await deepgram.manage.createProjectKey(
            process.env.DEEPGRAM_PROJECT_ID || "default",
            {
                comment: "Temporary key for realtime transcription",
                scopes: ["usage:write"],
                time_to_live_in_seconds: 600,
            }
        );

        if (error) {
            console.error("Error creating temporary key:", error);
            return NextResponse.json(
                { error: "Failed to create temporary key" },
                { status: 500 }
            );
        }

        return NextResponse.json({ key: result.key });
    } catch (error) {
        console.error("Error in Deepgram token endpoint:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
