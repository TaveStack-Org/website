"use client";

import Link from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';

interface ScrollLinkProps {
  href: string | UrlObject;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const ScrollLink = ({ href, className, children, onClick }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle anchor links
    const hrefString = typeof href === 'string' ? href : href.pathname?.toString() || '';
    if (hrefString.startsWith('#')) {
      e.preventDefault();
      const targetId = hrefString.substring(1);
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

  // Convert string href to object format for Next.js 15 compatibility
  const linkHref = typeof href === 'string' ? { pathname: href } : href;
  
  return (
    <Link href={linkHref} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
