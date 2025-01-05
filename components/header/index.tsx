'use client';

import { Leaf } from 'lucide-react';
import { MobileNav } from './mobile-nav';
import { DesktopNav } from './desktop-nav';
import { UserNav } from './user-nav';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center mx-2 sm:mx-10">
        <MobileNav />
        <div className="flex items-center space-x-2 mr-4">
          <Leaf className="h-6 w-6" />
          <Link href="/" className="font-bold text-xl hidden sm:block">
            Fresh Market
          </Link>
        </div>
        <DesktopNav />
        <div className="ml-auto">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
