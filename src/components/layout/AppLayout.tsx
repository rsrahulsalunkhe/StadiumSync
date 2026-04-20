import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SkipNav } from './SkipNav';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import type { UserRole } from '@/types/auth';

interface AppLayoutProps {
  role: UserRole;
}

export default function AppLayout({ role }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-navy-950 text-slate-100">
      <SkipNav />

      <Navbar role={role} onMenuToggle={() => setSidebarOpen((o) => !o)} sidebarOpen={sidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          role={role}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 overflow-y-auto p-4 lg:p-6 focus-visible:outline-none"
          aria-label={`${role} main content`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
