import React from 'react';

interface OverlayProps {
  show: boolean;
  onClick: () => void;
}

export function Overlay({ show, onClick }: OverlayProps) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
      onClick={onClick}
    />
  );
}