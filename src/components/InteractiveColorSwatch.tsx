import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Copy, Sun, Moon } from 'lucide-react';

interface InteractiveColorSwatchProps {
  colorName: string;
  hexCode: string;
  role: string;
  lightVariantHex: string;
  darkVariantHex: string;
}

const InteractiveColorSwatch: React.FC<InteractiveColorSwatchProps> = ({
  colorName,
  hexCode,
  role,
  lightVariantHex,
  darkVariantHex,
}) => {
  console.log(`InteractiveColorSwatch loaded for: ${colorName} (${hexCode})`);

  const handleCopyToClipboard = (textToCopy: string, label: string) => {
    if (!navigator.clipboard) {
      toast.error('Clipboard API not available.');
      console.error('Clipboard API not available.');
      return;
    }
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast.success(`${label} copied!`, {
          description: `Copied: ${textToCopy}`,
          duration: 2000,
        });
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        toast.error('Failed to copy.', {
          description: 'Could not copy to clipboard.',
        });
      });
  };

  return (
    <div className="bg-card text-card-foreground border border-border rounded-lg shadow-sm p-4 flex flex-col space-y-3 transition-all duration-300 ease-in-out hover:shadow-lg">
      {/* Main color display */}
      <div
        className="w-full h-28 rounded-md flex items-center justify-center text-background font-bold text-xl shadow-inner relative group"
        style={{ backgroundColor: hexCode }}
        title={`${colorName} - ${hexCode}`}
      >
        <span className="z-10 p-2 bg-black/20 rounded backdrop-blur-sm">{colorName}</span>
      </div>

      {/* Details section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">HEX:</span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-mono text-foreground">{hexCode}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopyToClipboard(hexCode, 'HEX code')}
              aria-label={`Copy HEX code ${hexCode}`}
              className="h-7 w-7 text-muted-foreground hover:text-foreground"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">Role:</span>
          <span className="text-sm text-right text-foreground truncate" title={role}>{role}</span>
        </div>
      </div>

      {/* Light and Dark Variants */}
      <div className="space-y-2 pt-3 mt-1 border-t border-border">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Variants</h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-muted-foreground" />
            <div 
              className="w-5 h-5 rounded-sm border border-border/50" 
              style={{ backgroundColor: lightVariantHex }} 
              title={`Light Variant: ${lightVariantHex}`}
            ></div>
            <span className="text-xs font-mono text-foreground">{lightVariantHex}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleCopyToClipboard(lightVariantHex, 'Light variant HEX')}
            aria-label={`Copy light variant HEX code ${lightVariantHex}`}
            className="h-6 w-6 text-muted-foreground hover:text-foreground"
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4 text-muted-foreground" />
            <div 
              className="w-5 h-5 rounded-sm border border-border/50" 
              style={{ backgroundColor: darkVariantHex }} 
              title={`Dark Variant: ${darkVariantHex}`}
            ></div>
            <span className="text-xs font-mono text-foreground">{darkVariantHex}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleCopyToClipboard(darkVariantHex, 'Dark variant HEX')}
            aria-label={`Copy dark variant HEX code ${darkVariantHex}`}
            className="h-6 w-6 text-muted-foreground hover:text-foreground"
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveColorSwatch;