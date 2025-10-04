"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, LayoutDashboard, Map, CalendarCheck, Users, AlertTriangle } from 'lucide-react';
import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { BreatheWellLogo } from './icons';

const menuItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/activity-planner', label: 'Activity Planner', icon: CalendarCheck },
  { href: '/reports', label: 'Community Reports', icon: Users },
  { href: '/map', label: 'Live Map', icon: Map },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/emergency', label: 'Emergency', icon: AlertTriangle },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2.5">
          <BreatheWellLogo className="size-8" />
          <h1 className="font-headline text-2xl font-semibold tracking-tight">
            BreatheWell
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map(item => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label, side: 'right' }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
