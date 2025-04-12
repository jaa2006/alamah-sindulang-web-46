
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blobColor?: string;
  width?: string;
  height?: string;
}

const GlassCard = ({
  children,
  className,
  blobColor = "#3B82F6",
  width = "100%",
  height = "100%"
}: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden shadow-[20px_20px_60px_#bebebe,_-20px_-20px_60px_#ffffff] z-10",
        className
      )}
      style={{ width, height }}
    >
      <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] z-20 bg-white/95 backdrop-blur-xl rounded-lg overflow-hidden outline outline-2 outline-white">
        {children}
      </div>
      <div 
        className="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full opacity-100 blur-md animate-blob-bounce"
        style={{ backgroundColor: blobColor }}
      />
    </div>
  );
};

export default GlassCard;
