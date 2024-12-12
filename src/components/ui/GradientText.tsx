import React from 'react';
import { gradients } from '../../styles/gradients';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${gradients.text} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}