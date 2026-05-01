import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TaveStack — The Business Operating System Powered by AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "#0d0d12",
                    color: "#ffffff",
                    padding: "72px",
                    position: "relative",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Gradient orb */}
                <div
                    style={{
                        position: "absolute",
                        top: "-220px",
                        right: "-220px",
                        width: "720px",
                        height: "720px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle at center, rgba(124, 58, 237, 0.85) 0%, rgba(124, 58, 237, 0) 70%)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-260px",
                        left: "-200px",
                        width: "720px",
                        height: "720px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle at center, rgba(249, 115, 22, 0.65) 0%, rgba(249, 115, 22, 0) 70%)",
                        display: "flex",
                    }}
                />

                {/* Top row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background:
                                "linear-gradient(135deg, #7C3AED 0%, #F97316 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "24px",
                            fontWeight: 800,
                            color: "white",
                        }}
                    >
                        T
                    </div>
                    <div
                        style={{
                            fontSize: "28px",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            display: "flex",
                        }}
                    >
                        TaveStack
                    </div>
                </div>

                {/* Headline */}
                <div
                    style={{
                        marginTop: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            fontSize: "76px",
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: "-0.03em",
                            display: "flex",
                            flexWrap: "wrap",
                            maxWidth: "1000px",
                        }}
                    >
                        The Business Operating System Powered by AI
                    </div>
                    <div
                        style={{
                            fontSize: "30px",
                            fontWeight: 400,
                            lineHeight: 1.35,
                            color: "rgba(255,255,255,0.78)",
                            display: "flex",
                            maxWidth: "950px",
                        }}
                    >
                        Deploy ERP, finance, HR, CRM and more — and let TAVE, your AI Agent, run them.
                    </div>
                </div>

                {/* Footer */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "48px",
                        fontSize: "22px",
                        color: "rgba(255,255,255,0.6)",
                        zIndex: 1,
                    }}
                >
                    <div style={{ display: "flex" }}>tavestack.com</div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <div
                            style={{
                                padding: "8px 16px",
                                borderRadius: "999px",
                                background:
                                    "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(249,115,22,0.25) 100%)",
                                border: "1px solid rgba(255,255,255,0.18)",
                                display: "flex",
                                color: "white",
                                fontWeight: 600,
                            }}
                        >
                            ✦ Free OS · pay per app
                        </div>
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
