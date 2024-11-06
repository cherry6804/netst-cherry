import React from 'react';
import { Cherry } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Cherry className="w-6 h-6 text-white animate-bounce" />
      <span className="font-bold text-white">NetST</span>
    </div>
  );
}