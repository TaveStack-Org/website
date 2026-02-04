"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

// Static blog posts data
const BLOG_POSTS = [
    {
        id: "workflow-automation-roi",
        title: "The True ROI of Workflow Automation for African Enterprises",
        excerpt: "Discover how companies across Africa are achieving 5x returns on their automation investments.",
        category: "Industry Insights",
        author: "Tavestack Team",
        date: "2025-01-15",
        readTime: "8 min read",
        featured: true,
    },
    {
        id: "erp-integration-guide",
        title: "A Complete Guide to ERP Integration in 2025",
        excerpt: "Everything you need to know about connecting your enterprise systems effectively.",
        category: "Guides",
        author: "Tavestack Team",
        date: "2025-01-10",
        readTime: "12 min read",
    },
    {
        id: "manufacturing-case-study",
        title: "How TechFlow Manufacturing Cut Production Delays by 35%",
        excerpt: "A deep dive into the transformation of a Nigerian manufacturing company.",
        category: "Case Studies",
        author: "Tavestack Team",
        date: "2025-01-05",
        readTime: "6 min read",
    },
    {
        id: "multi-currency-operations",
        title: "Managing Multi-Currency Operations Across Africa",
        excerpt: "Best practices for handling finances across multiple African currencies.",
        category: "Best Practices",
        author: "Tavestack Team",
        date: "2024-12-20",
        readTime: "10 min read",
    },
    {
        id: "ai-workflow-optimization",
        title: "How AI is Revolutionizing Workflow Optimization",
        excerpt: "Explore the latest AI capabilities transforming business process automation.",
        category: "Product",
        author: "Tavestack Team",
        date: "2024-12-15",
        readTime: "7 min read",
    },
    {
        id: "compliance-automation",
        title: "Automating Compliance: A Guide for African Businesses",
        excerpt: "Navigate regulatory requirements with automated compliance workflows.",
        category: "Guides",
        author: "Tavestack Team",
        date: "2024-12-10",
        readTime: "9 min read",
    },
];

const CATEGORIES = [
    "All Posts",
    "Industry Insights",
    "Guides",
    "Case Studies",
    "Best Practices",
    "Product",
];

const BlogPage = () => {
    const featuredPost = BLOG_POSTS.find(post => post.featured);
    const regularPosts = BLOG_POSTS.filter(post => !post.featured);

    return (
        <div className="w-full relative flex flex-col pt-20">
            <Wrapper className="py-20 lg:py-32">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Blog" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Insights & Updates
                            </GradientText>
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto">
                            Expert insights, guides, and updates from the Tavestack team.
                        </p>
                    </AnimationContainer>
                </div>

                {/* Category Filter */}
                <AnimationContainer animation="fadeUp" delay={0.5}>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {CATEGORIES.map((category, index) => (
                            <Button
                                key={category}
                                variant={index === 0 ? "default" : "outline"}
                                size="sm"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </AnimationContainer>

                {/* Featured Post */}
                {featuredPost && (
                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <div className="mb-12">
                            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-primary/5 border border-primary/20">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <span className="text-xs font-medium text-primary uppercase tracking-wider mb-4 block">
                                            Featured Post
                                        </span>
                                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-4">
                                            {featuredPost.category}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                                        <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                            <span className="flex items-center gap-1">
                                                <User className="w-4 h-4" /> {featuredPost.author}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" /> {new Date(featuredPost.date).toLocaleDateString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" /> {featuredPost.readTime}
                                            </span>
                                        </div>
                                        <Button size="lg" className="gap-2">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="aspect-video rounded-xl bg-card/50 border border-border/50" />
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>
                )}

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post, index) => (
                        <AnimationContainer key={post.id} animation="fadeUp" delay={0.2 + index * 0.05}>
                            <article className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all h-full flex flex-col">
                                {/* Thumbnail placeholder */}
                                <div className="aspect-video rounded-xl bg-primary/5 mb-4" />
                                
                                {/* Category */}
                                <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-3 self-start">
                                    {post.category}
                                </span>
                                
                                {/* Title */}
                                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                
                                {/* Excerpt */}
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                                    {post.excerpt}
                                </p>
                                
                                {/* Meta */}
                                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                                    <span>{new Date(post.date).toLocaleDateString()}</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </article>
                        </AnimationContainer>
                    ))}
                </div>

                {/* Load More */}
                <AnimationContainer animation="fadeUp" delay={0.9}>
                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg">
                            Load More Posts
                        </Button>
                    </div>
                </AnimationContainer>

                {/* Newsletter */}
                <AnimationContainer animation="fadeUp" delay={1.0}>
                    <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
                        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Get the latest insights delivered straight to your inbox.
                        </p>
                        <div className="flex gap-4 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-2 rounded-lg bg-background border border-border"
                            />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </AnimationContainer>
            </Wrapper>
        </div>
    );
};

export default BlogPage;
