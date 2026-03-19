import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    if (pathname.includes('/docs/github') || pathname.includes('/category/github')) {
      html.setAttribute('data-section', 'github');
    } else if (pathname.includes('/docs/git') || pathname.includes('/category/git')) {
      html.setAttribute('data-section', 'git');
    } else {
      html.removeAttribute('data-section');
    }
  }, [pathname]);

  return <>{children}</>;
}