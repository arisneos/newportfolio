import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const RouterContext = createContext(null);

function currentPath() {
  return window.location.pathname + window.location.hash;
}

export function matchPath(routePath, pathname) {
  if (routePath === '*') return {};
  const routeParts = routePath.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);
  if (routeParts.length !== pathParts.length) return null;
  const params = {};
  for (let i = 0; i < routeParts.length; i++) {
    const rp = routeParts[i];
    const pp = pathParts[i];
    if (rp.startsWith(':')) {
      params[rp.slice(1)] = decodeURIComponent(pp);
    } else if (rp !== pp) {
      return null;
    }
  }
  return params;
}

export function RouterProvider({ routes, initialPath, children }) {
  const [path, setPath] = useState(() =>
    initialPath !== undefined ? initialPath : (typeof window !== 'undefined' ? currentPath() : '/')
  );

  useEffect(() => {
    const onPop = () => setPath(currentPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to) => {
    window.history.pushState({}, '', to);
    setPath(currentPath());
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate, routes }}>
      {children}
    </RouterContext.Provider>
  );
}

function useRouterContext() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('Router hooks must be used inside RouterProvider');
  return ctx;
}

export function useParams() {
  const { path, routes } = useRouterContext();
  const [pathname] = path.split('#');
  for (const r of routes) {
    const params = matchPath(r.path, pathname);
    if (params) return params;
  }
  return {};
}

export function useLocation() {
  const { path } = useRouterContext();
  const [pathname, hash] = path.split('#');
  return { pathname, hash: hash ? '#' + hash : '' };
}

export function Link({ to, className, children, onClick }) {
  const { navigate } = useRouterContext();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        navigate(to);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
}

export function RouterOutlet() {
  const { path, routes } = useRouterContext();
  const [pathname] = path.split('#');
  for (const r of routes) {
    const params = matchPath(r.path, pathname);
    if (params) {
      const Component = r.component;
      return <Component />;
    }
  }
  return null;
}
