"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface ScrollLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const ScrollLink = ({ href, className, children, onClick }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle anchor links
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Call the additional onClick handler if provided
        if (onClick) onClick();
      }
    } else if (onClick) {
      // Call the onClick handler for non-anchor links
      onClick();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
