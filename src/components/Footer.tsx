import React from 'react';
import { GradientContainer } from './ui/GradientContainer';

export function Footer() {
  return (
    <GradientContainer className="w-full py-4 shadow-md mt-auto">
      <div className="container mx-auto text-center text-white/90 hover:text-orange-200 transition-colors">
        <p>© 2024 DailyQuill. All rights reserved.</p>
      </div>
    </GradientContainer>
  );
}