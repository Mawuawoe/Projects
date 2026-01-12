import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const ColorCard = ({ hexColor }) => {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(hexColor);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-[5px]">
      <div
        onClick={copyToClipboard}
        role="button"
        aria-label={`Copy color ${hexColor}`}
        className="h-[120px] cursor-pointer"
        style={{ backgroundColor: hexColor }}
      ></div>
      <div className="bg-white flex justify-between items-center p-3 text-md">
        <span className="font-semibold tracking-[0.5px]">{hexColor}</span>
        <span title="copy to clipborad">
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard();
              }}
              className="w-4 h-4 text-[#64748b] hover:text-[#667eea] cursor-pointer"
              strokeWidth={2}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default ColorCard;
