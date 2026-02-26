import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layers } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-foreground transition-colors hover:text-primary">
            <Layers className="h-5 w-5 text-primary" />
            <span className="font-semibold tracking-tight font-serif">VibeStack</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>
      
      <div className="flex-1 relative flex flex-col w-full pb-12">
        <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8 font-mono">
          &copy; {new Date().getFullYear()} VibeStack. Built for developers who ship.
        </div>
      </footer>
    </div>
  );
}
