import React from 'react';
import { gradients } from '../../styles/gradients';

interface GradientContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientContainer({ children, className = '' }: GradientContainerProps) {
  return (
    <div className={`bg-gradient-to-r ${gradients.primary} ${className}`}>
      {children}
    </div>
  );
}