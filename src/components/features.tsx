"use client";

import { FEATURES } from '@/constants';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import GradientText from './ui/gradient-text';
import MagicBento, { BentoCardProps } from './ui/magic-bento';

const Features = () => {
    // Transform FEATURES data to BentoCardProps format
    const bentoCards: BentoCardProps[] = FEATURES.map((feature, index) => ({
        title: feature.title,
        description: feature.description,
        label: `Feature ${index + 1}`,
        color: '#060010',
    }));
    
    return (
        <Wrapper className="py-20 lg:py-32" id="features">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="TaveStack Features" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight">
                        <GradientText colors={['#9c40ff', '#ffaa40', '#9c40ff']} animationSpeed={6}>
                            AI-Powered Productivity
                        </GradientText>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tailored for African markets with accent recognition and offline capabilities
                    </p>
                </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="w-full pt-6">
                    <MagicBento
                        cards={bentoCards}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={350}
                        particleCount={10}
                        glowColor="156, 64, 255"
                    />
                </div>
            </AnimationContainer>
        </Wrapper>
    );
};

export default Features;
