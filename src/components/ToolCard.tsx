import React from 'react';
import type { Tool } from '../types/Tool';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const hasLinks = tool.demoUrl || tool.fileUrl;

  return (
    <a
      href={tool.demoUrl || '#'}
      className="group relative bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl block"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-600/0 rounded-lg transition-all duration-300 group-hover:from-orange-500/5 group-hover:to-orange-600/5" />
      <div className="relative">
        <div className="flex items-center space-x-3 mb-4">
          <tool.icon className="h-8 w-8 text-indigo-600 group-hover:text-orange-500 transition-colors" />
          <h2 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
            {tool.title}
          </h2>
        </div>
        <p className="text-gray-600 mb-4">{tool.description}</p>
        {tool.fileUrl && (
          <div className="text-sm text-indigo-600 hover:text-orange-500 transition-colors">
            Sample File Available
          </div>
        )}
      </div>
    </a>
  );
}