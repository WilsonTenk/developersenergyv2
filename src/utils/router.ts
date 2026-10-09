import { PageTab } from '../types';

export const getBasePath = (): string => {
  if (typeof window === 'undefined') return '';
  const pathname = window.location.pathname;
  if (pathname.startsWith('/developersenergyv2')) {
    return '/developersenergyv2';
  }
  return '';
};

export const getTabRoute = (tab: PageTab, articleSlug?: string): string => {
  if (tab === 'blog' && articleSlug) {
    return `/blog/${articleSlug}`;
  }
  switch (tab) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'services':
      return '/services';
    case 'insights':
      return '/insights';
    case 'blog':
      return '/blog';
    case 'training':
      return '/training';
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
};

export const getRouteUrl = (route: string): string => {
  const base = getBasePath();
  const cleanRoute = route.startsWith('/') ? route : `/${route}`;
  if (cleanRoute === '/') {
    return base ? `${base}/` : '/';
  }
  return `${base}${cleanRoute}`;
};

export interface ParsedRoute {
  tab: PageTab;
  articleSlug?: string;
}

export const parseRoute = (): ParsedRoute => {
  if (typeof window === 'undefined') return { tab: 'home' };
  const base = getBasePath();
  let path = window.location.pathname;

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  // Remove trailing slash for matching (unless root)
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  if (!path) path = '/';

  // Check blog article subpath: /blog/:slug
  if (path.startsWith('/blog/')) {
    const slug = path.slice('/blog/'.length).trim();
    if (slug) {
      return { tab: 'blog', articleSlug: slug };
    }
    return { tab: 'blog' };
  }

  switch (path) {
    case '/about':
    case '/about-us':
      return { tab: 'about' };
    case '/services':
      return { tab: 'services' };
    case '/insights':
    case '/market-intelligence':
      return { tab: 'insights' };
    case '/blog':
      return { tab: 'blog' };
    case '/training':
      return { tab: 'training' };
    case '/contact':
    case '/contact-us':
      return { tab: 'contact' };
    case '/':
    case '/home':
    default:
      return { tab: 'home' };
  }
};

export const pushRoute = (tab: PageTab, articleSlug?: string): void => {
  if (typeof window === 'undefined') return;
  const route = getTabRoute(tab, articleSlug);
  const fullUrl = getRouteUrl(route);
  if (window.location.pathname !== fullUrl) {
    window.history.pushState({ tab, articleSlug }, '', fullUrl);
  }
};
