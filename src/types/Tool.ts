export interface Tool {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  demoUrl?: string;
  fileUrl?: string;
}