import React from 'react';
import type { Tool } from '../types/Tool';
import {
  FileText,
  Combine,
  Scissors,
  Minimize,
  FileType,
  Presentation,
  Sheet,
  Edit3,
  Image,
  FileImage,
  FileCode,
  Lock,
  Unlock,
  RotateCw,
  Stamp,
  FileSignature,
  FilePlus,
  FileSearch,
  FileMinus,
  Download,
  Share2,
  Printer,
  BookOpen,
  Settings,
  HelpCircle,
} from 'lucide-react';

export const tools: Tool[] = [
  {
    title: 'Merge PDF',
    description:
      'Combine PDFs in the order you want with the easiest PDF merger available.',
    demoUrl: '#',
    icon: Combine,
  },
  {
    title: 'Split PDF',
    description:
      'Separate one page or a whole set for easy conversion into independent PDF files.',
    demoUrl: '#',
    icon: Scissors,
  },
  {
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.',
    demoUrl: '#',
    icon: Minimize,
  },
  {
    title: 'PDF to Word',
    description:
      'Convert your PDFs into editable Word documents with high accuracy.',
    demoUrl: '#',
    icon: FileType,
  },
  {
    title: 'PDF to PowerPoint',
    description: 'Transform your PDFs into editable PowerPoint presentations.',
    demoUrl: '#',
    icon: Presentation,
  },
  {
    title: 'PDF to Excel',
    description:
      'Extract data from PDFs into Excel spreadsheets quickly and accurately.',
    demoUrl: '#',
    icon: Sheet,
  },
  {
    title: 'Edit PDF',
    description:
      'Add text, images, shapes or freehand annotations to your PDF documents.',
    demoUrl: '#',
    icon: Edit3,
  },
  {
    title: 'PDF to JPG',
    description:
      'Convert PDF pages into JPG images or extract all images from a PDF.',
    demoUrl: '#',
    icon: Image,
  },
  {
    title: 'JPG to PDF',
    description: 'Convert JPG images to PDF format with customizable settings.',
    demoUrl: 'https://image-pdfconverter.netlify.app/',
    icon: FileImage,
  },
  {
    title: 'PDF to HTML',
    description: 'Convert PDF documents to web-friendly HTML format.',
    demoUrl: '#',
    icon: FileCode,
  },
  {
    title: 'Protect PDF',
    description: 'Secure your PDF files with passwords and encryption.',
    demoUrl: '#',
    icon: Lock,
  },
  {
    title: 'Unlock PDF',
    description: 'Remove password protection from PDF files you own.',
    demoUrl: '#',
    icon: Unlock,
  },
  {
    title: 'Rotate PDF',
    description: 'Rotate PDF pages to the correct orientation.',
    demoUrl: '#',
    icon: RotateCw,
  },
  {
    title: 'Watermark PDF',
    description: 'Add custom watermarks to your PDF documents.',
    demoUrl: '#',
    icon: Stamp,
  },
  {
    title: 'Sign PDF',
    description: 'Add digital signatures to your PDF documents.',
    demoUrl: '#',
    icon: FileSignature,
  },
  {
    title: 'Create PDF',
    description: 'Create new PDF documents from scratch.',
    demoUrl: '#',
    icon: FilePlus,
  },
  {
    title: 'OCR PDF',
    description: 'Make scanned PDFs searchable with OCR technology.',
    demoUrl: '#',
    icon: FileSearch,
  },
  {
    title: 'Reduce PDF Size',
    description: 'Optimize PDF file size without significant quality loss.',
    demoUrl: '#',
    icon: FileMinus,
  },
  {
    title: 'Download PDF',
    description: 'Download and save PDFs from web pages.',
    demoUrl: '#',
    icon: Download,
  },
  {
    title: 'Share PDF',
    description: 'Share PDF documents securely with others.',
    demoUrl: '#',
    icon: Share2,
  },
  {
    title: 'Print PDF',
    description: 'Print PDF documents with advanced settings.',
    demoUrl: '#',
    icon: Printer,
  },
  {
    title: 'PDF Reader',
    description: 'View and read PDF documents online.',
    demoUrl: '#',
    icon: BookOpen,
  },
  {
    title: 'PDF Settings',
    description: 'Configure PDF document properties and metadata.',
    demoUrl: '#',
    icon: Settings,
  },
  {
    title: 'PDF Help',
    description: 'Get help and support for all PDF-related tasks.',
    demoUrl: '#',
    icon: HelpCircle,
  },
  {
    title: 'PDF Text Extract',
    description: 'Extract text content from PDF documents.',
    demoUrl: '#',
    icon: FileText,
  },
];
