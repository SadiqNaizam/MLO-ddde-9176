import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlassmorphicInfoCard from '@/components/GlassmorphicInfoCard';
import InteractiveColorSwatch from '@/components/InteractiveColorSwatch';
import FeedbackColorItem from '@/components/FeedbackColorItem';
import ColorTokenCard from '@/components/ColorTokenCard';
// No direct use of Button, Toast, Sonner, Tooltip at page level, they are used within custom components.
// App.tsx already includes Toaster and Sonner providers.

const EldarnwandLandingPage: React.FC = () => {
  console.log('EldarnwandLandingPage loaded');

  const coreColors = [
    {
      colorName: "EldarPink",
      hexCode: "#E91E63",
      role: "Primary Brand Accent",
      lightVariantHex: "#F8BBD0", // Lighter pink
      darkVariantHex: "#C2185B",  // Darker pink
    },
    {
      colorName: "MysticPurple",
      hexCode: "#9C27B0",
      role: "Secondary Brand Complement",
      lightVariantHex: "#E1BEE7", // Lighter purple
      darkVariantHex: "#7B1FA2",  // Darker purple
    },
    {
      colorName: "VoidIndigo",
      hexCode: "#3F51B5",
      role: "Tertiary Foundation",
      lightVariantHex: "#C5CAE9", // Lighter indigo
      darkVariantHex: "#303F9F",  // Darker indigo
    },
  ];

  const feedbackColorsData = [
    {
      name: "Success",
      description: "Indicates successful operations or positive outcomes.",
      main: { name: "Success-500", hex: "#4CAF50" },
      light: { name: "Success-100", hex: "#C8E6C9" },
      dark: { name: "Success-700", hex: "#388E3C" },
    },
    {
      name: "Error",
      description: "Highlights errors, failures, or critical issues.",
      main: { name: "Error-500", hex: "#F44336" },
      light: { name: "Error-100", hex: "#FFCDD2" },
      dark: { name: "Error-700", hex: "#D32F2F" },
    },
    {
      name: "Warning",
      description: "Warns about potential issues or important notices.",
      main: { name: "Warning-500", hex: "#FF9800" },
      light: { name: "Warning-100", hex: "#FFE0B2" },
      dark: { name: "Warning-700", hex: "#F57C00" },
    },
    {
      name: "Info",
      description: "Provides neutral informational messages or cues.",
      main: { name: "Info-500", hex: "#2196F3" },
      light: { name: "Info-100", hex: "#BBDEFB" },
      dark: { name: "Info-700", hex: "#1976D2" },
    },
  ];

  const colorTokens = [
    { tokenName: "eds-color-primary-base", tokenValue: "#E91E63" },
    { tokenName: "eds-color-primary-light", tokenValue: "#F8BBD0" },
    { tokenName: "eds-color-primary-dark", tokenValue: "#C2185B" },
    { tokenName: "eds-color-secondary-base", tokenValue: "#9C27B0" },
    { tokenName: "eds-color-neutral-900", tokenValue: "#1F2937" },
    { tokenName: "eds-color-neutral-100", tokenValue: "#F3F4F6" },
    { tokenName: "eds-color-feedback-success", tokenValue: "#4CAF50" },
    { tokenName: "eds-color-feedback-error", tokenValue: "#F44336" },
    { tokenName: "eds-font-size-body", tokenValue: "1rem" },
    { tokenName: "eds-spacing-md", tokenValue: "16px" },
    { tokenName: "eds-border-radius-lg", tokenValue: "0.75rem" },
    { tokenName: "eds-shadow-md", tokenValue: "0 4px 6px -1px rgba(0,0,0,0.1)" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-pink-500/70 selection:text-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 space-y-16 sm:space-y-20 md:space-y-24">
        {/* Section: Foundational Principles */}
        <section id="principles">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Foundational Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <GlassmorphicInfoCard title="Core Philosophy">
              <p className="mb-3">Eldarnwand is built on the belief that color is more than just aesthetics; it's a language. Our system is designed to communicate with clarity, evoke emotion purposefully, and ensure a harmonious user experience across all digital touchpoints.</p>
              <p>We prioritize intuitive understanding and visual delight, empowering creators to build interfaces that are both beautiful and effective.</p>
            </GlassmorphicInfoCard>
            <GlassmorphicInfoCard title="Emotional Clarity">
              <p className="mb-3">Colors have profound psychological impact. Eldarnwand's palette is carefully curated to foster specific emotional responses, guiding users and enhancing interaction. From the vibrancy of primary hues to the subtlety of neutrals, each color serves a purpose in creating an engaging and intuitive journey.</p>
            </GlassmorphicInfoCard>
            <GlassmorphicInfoCard title="Brand Cohesion">
              <p className="mb-3">Consistency is key to a strong brand identity. Eldarnwand provides a unified color language that ensures brand cohesion across diverse applications and platforms. This system offers the flexibility to adapt while maintaining a recognizable and trustworthy presence.</p>
            </GlassmorphicInfoCard>
          </div>
        </section>

        {/* Section: Brand Color Strategy */}
        <section id="strategy">
           <GlassmorphicInfoCard title="Brand Color Strategy: The 60-30-10 Rule">
            <p className="mb-3">Eldarnwand encourages a balanced and harmonious color application using the classic 60-30-10 rule. This principle helps in creating visually appealing and well-structured designs:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>60% Dominant Hue:</strong> Typically a neutral or a subtle brand color, setting the overall tone and providing a backdrop for other elements.</li>
              <li><strong>30% Secondary Hue:</strong> Complements the dominant hue, used for highlighting key areas or interface components, adding visual interest.</li>
              <li><strong>10% Accent Hue:</strong> The most vibrant color, reserved for calls-to-action, critical information, or to draw attention to specific interactive elements. Eldarnwand's primary colors often serve this role.</li>
            </ul>
            <p className="mt-3">This approach ensures a design that is neither overwhelming nor bland, guiding the user's eye and improving usability.</p>
          </GlassmorphicInfoCard>
        </section>

        {/* Section: Color Psychology */}
         <section id="psychology">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Color Psychology of Eldarnwand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <GlassmorphicInfoCard title="Primary: EldarPink">
              <p>Symbolizes passion, creativity, and approachability. It's energetic and draws attention, perfect for key actions and brand highlights.</p>
            </GlassmorphicInfoCard>
            <GlassmorphicInfoCard title="Secondary: MysticPurple">
              <p>Evokes sophistication, wisdom, and a touch of mystique. It provides depth and encourages contemplation, ideal for secondary information or reflective states.</p>
            </GlassmorphicInfoCard>
            <GlassmorphicInfoCard title="Tertiary: VoidIndigo">
              <p>Represents trust, stability, and depth. It offers a calming and dependable foundation, suitable for backgrounds or structural elements.</p>
            </GlassmorphicInfoCard>
          </div>
        </section>

        {/* Section: Accessibility */}
        <section id="accessibility">
          <GlassmorphicInfoCard title="Commitment to Accessibility">
            <p className="mb-3">Accessibility is at the heart of Eldarnwand. We are committed to ensuring our color system meets and exceeds WCAG 2.1 Level AA contrast ratios for text and visual elements. Our palette choices and token definitions are made with inclusivity in mind.</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Contrast ratios are rigorously checked for main color pairings.</li>
              <li>Guidance is provided for using colors in an accessible manner.</li>
              <li>Considerations for various forms of color vision deficiency are integrated into our recommendations.</li>
            </ul>
            <p className="mt-3">Building an inclusive web means empowering everyone to access and interact with digital content effectively. Eldarnwand provides the tools to achieve this.</p>
          </GlassmorphicInfoCard>
        </section>

        {/* Section: Core Color System */}
        <section id="core-colors">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Core Color System
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreColors.map((color) => (
              <InteractiveColorSwatch
                key={color.colorName}
                colorName={color.colorName}
                hexCode={color.hexCode}
                role={color.role}
                lightVariantHex={color.lightVariantHex}
                darkVariantHex={color.darkVariantHex}
              />
            ))}
          </div>
        </section>

        {/* Section: Feedback Colors */}
        <section id="feedback-colors">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Feedback & Status Colors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {feedbackColorsData.map((color) => (
              <FeedbackColorItem
                key={color.name}
                name={color.name}
                description={color.description}
                main={color.main}
                light={color.light}
                dark={color.dark}
              />
            ))}
          </div>
        </section>

        {/* Section: Color Tokens */}
        <section id="tokens">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Design Tokens for Seamless Integration
          </h2>
           <p className="text-center text-slate-300/80 max-w-2xl mx-auto mb-10">
            Leverage our comprehensive set of design tokens to ensure consistency and scalability in your projects. Easily copy and integrate these into your stylesheets or design tools.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {colorTokens.map((token) => (
              <ColorTokenCard
                key={token.tokenName}
                tokenName={token.tokenName}
                tokenValue={token.tokenValue}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EldarnwandLandingPage;