import type { MetadataRoute } from "next";
import { APP_MODULES, SOLUTIONS } from "@/constants/site";
import { SITE_URL } from "@/utils/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
        { path: "/", priority: 1.0, changeFrequency: "weekly" },
        { path: "/platform", priority: 0.9, changeFrequency: "monthly" },
        { path: "/ai-agent", priority: 0.9, changeFrequency: "monthly" },
        { path: "/apps", priority: 0.85, changeFrequency: "monthly" },
        { path: "/solutions", priority: 0.85, changeFrequency: "monthly" },
        { path: "/integrations", priority: 0.8, changeFrequency: "monthly" },
        { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
        { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
        { path: "/resources/blog", priority: 0.7, changeFrequency: "weekly" },
        { path: "/resources/docs", priority: 0.7, changeFrequency: "weekly" },
        { path: "/resources/case-studies", priority: 0.7, changeFrequency: "weekly" },
        { path: "/resources/webinars", priority: 0.6, changeFrequency: "weekly" },
        { path: "/resources/api", priority: 0.6, changeFrequency: "monthly" },
        { path: "/resources/community", priority: 0.5, changeFrequency: "monthly" },
        { path: "/partners", priority: 0.7, changeFrequency: "monthly" },
        { path: "/about", priority: 0.6, changeFrequency: "monthly" },
        { path: "/about/story", priority: 0.5, changeFrequency: "monthly" },
        { path: "/about/team", priority: 0.5, changeFrequency: "monthly" },
        { path: "/about/careers", priority: 0.7, changeFrequency: "weekly" },
        { path: "/about/press", priority: 0.4, changeFrequency: "monthly" },
        { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
        { path: "/demo", priority: 0.85, changeFrequency: "monthly" },
        { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
        { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
        { path: "/legal/security", priority: 0.4, changeFrequency: "yearly" },
        { path: "/legal/compliance", priority: 0.4, changeFrequency: "yearly" },
    ];

    const appEntries = APP_MODULES.map((m) => ({
        path: `/apps/${m.slug}`,
        priority: 0.75,
        changeFrequency: "monthly" as const,
    }));

    const solutionEntries = SOLUTIONS.map((s) => ({
        path: `/solutions/${s.slug}`,
        priority: 0.75,
        changeFrequency: "monthly" as const,
    }));

    return [...staticPaths, ...appEntries, ...solutionEntries].map(({ path, priority, changeFrequency }) => ({
        url: new URL(path, SITE_URL).toString(),
        lastModified: now,
        changeFrequency,
        priority,
    }));
}
