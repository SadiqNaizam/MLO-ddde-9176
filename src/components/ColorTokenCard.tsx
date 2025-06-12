import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';
import { toast } from "sonner";

interface ColorTokenCardProps {
  tokenName: string;
  tokenValue: string;
}

const ColorTokenCard: React.FC<ColorTokenCardProps> = ({ tokenName, tokenValue }) => {
  console.log(`ColorTokenCard loaded for: ${tokenName}`);

  const handleCopyToken = async () => {
    try {
      await navigator.clipboard.writeText(`${tokenName}: ${tokenValue}`);
      toast.success(`Token copied!`, {
        description: `"${tokenName}: ${tokenValue}" copied to clipboard.`,
        duration: 2000,
      });
    } catch (err) {
      console.error("Failed to copy token: ", err);
      toast.error("Failed to copy token", {
        description: "Could not copy token to clipboard.",
        duration: 2000,
      });
    }
  };

  return (
    <Card className="w-full max-w-sm p-4 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-card text-card-foreground">
      <CardContent className="p-0">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-grow">
            <p className="text-sm font-mono text-muted-foreground break-all">{tokenName}</p>
            <p className="text-lg font-semibold font-mono break-all">{tokenValue}</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopyToken}
            aria-label={`Copy token ${tokenName}: ${tokenValue}`}
            className="flex-shrink-0"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorTokenCard;