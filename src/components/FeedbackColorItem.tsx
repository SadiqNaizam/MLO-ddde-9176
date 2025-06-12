import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy, Palette } from 'lucide-react';

interface ColorVariant {
  name: string; // e.g., "Base", "Light", "Dark" or "Success-500"
  hex: string;
}

interface FeedbackColorItemProps {
  name: string; // e.g., "Success", "Error", "Warning", "Info"
  description?: string; // e.g., "Indicates a successful operation."
  main: ColorVariant;
  light: ColorVariant;
  dark: ColorVariant;
}

const FeedbackColorItem: React.FC<FeedbackColorItemProps> = ({ name, description, main, light, dark }) => {
  const { toast } = useToast();
  console.log(`FeedbackColorItem loaded: ${name}`);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not available.");
      }
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
        description: `${label} (${text}) copied.`,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Could not copy text.";
      toast({
        title: "Failed to copy",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Failed to copy text: ", err);
    }
  };

  const ColorSwatchDisplay: React.FC<{
    variant: ColorVariant;
    isLarge?: boolean;
  }> = ({ variant, isLarge = false }) => {
    const swatchSize = isLarge ? "w-full h-20 md:h-24" : "w-full h-12 md:h-16";
    const swatchContainerClasses = isLarge ? "col-span-full" : "";
    const textSize = isLarge ? "text-sm sm:text-base" : "text-xs sm:text-sm";

    return (
      <div className={`flex flex-col items-center ${swatchContainerClasses}`}>
        <div
          className={`${swatchSize} rounded-lg border border-gray-200 dark:border-gray-700 shadow-inner mb-2 transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer flex items-center justify-center text-white font-mono text-opacity-0 hover:text-opacity-100`}
          style={{ backgroundColor: variant.hex }}
          title={`Click to copy ${variant.name}: ${variant.hex}`}
          onClick={() => copyToClipboard(variant.hex, variant.name)}
        >
          {variant.hex}
        </div>
        <div className="text-center w-full">
          <p className={`font-medium ${textSize} truncate`} title={variant.name}>{variant.name}</p>
          <p className={`text-muted-foreground ${textSize} font-mono`}>{variant.hex}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => copyToClipboard(variant.hex, variant.name)}
          className="mt-2 w-full text-xs"
          aria-label={`Copy ${variant.name} hex code ${variant.hex}`}
        >
          <Copy className="w-3 h-3 mr-1.5" /> Copy HEX
        </Button>
      </div>
    );
  };

  return (
    <Card className="w-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="bg-gray-50 dark:bg-gray-800/50 p-4 border-b dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <Palette className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg md:text-xl font-semibold">{name}</CardTitle>
            {description && <CardDescription className="text-xs md:text-sm mt-0.5">{description}</CardDescription>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6 flex-grow">
        <div className="space-y-6">
          <ColorSwatchDisplay variant={main} isLarge={true} />
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <ColorSwatchDisplay variant={light} />
            <ColorSwatchDisplay variant={dark} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackColorItem;