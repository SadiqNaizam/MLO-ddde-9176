import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assumed to exist from shadcn/ui setup

interface GlassmorphicInfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const GlassmorphicInfoCard: React.FC<GlassmorphicInfoCardProps> = ({ title, children, className }) => {
  console.log('GlassmorphicInfoCard loaded for title:', title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("w-full", className)}
    >
      <Card className={cn(
        "bg-slate-800/40 backdrop-filter backdrop-blur-lg", // Glassmorphic background
        "shadow-2xl rounded-xl border border-slate-700/60", // Soft shadow, rounded corners, subtle border
        "overflow-hidden h-full flex flex-col" // Ensure content fits and card can be used in flex layouts
      )}>
        <CardHeader className="p-6">
          <CardTitle className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2 text-slate-200/90 text-sm sm:text-base leading-relaxed flex-grow">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GlassmorphicInfoCard;