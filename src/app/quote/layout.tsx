import type { ChildrenProps } from 'react';
import Link from 'next/link';

export default function QuoteLayout({ children }: ChildrenProps) {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex justify-center px-4 py-16">
          {children}
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        Back to
        <Link className="btn ml-2" href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
