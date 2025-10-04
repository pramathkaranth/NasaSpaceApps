"use client"

import { Bell, Search, User } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { BreatheWellLogo } from '@/components/icons';
import { healthAlerts } from '@/lib/data';
import { Separator } from './ui/separator';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-semibold">
          <BreatheWellLogo className="h-7 w-7" />
          <span className="hidden sm:inline">BreatheWell</span>
        </Link>
      </div>

      <div className="flex w-full items-center justify-end gap-4">
        <div className="relative ml-auto hidden flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search location..."
            className="w-full rounded-lg bg-card pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>

        <NotificationBell />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704a" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function NotificationBell() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-3 w-3">
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            </span>
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Health Alerts</h4>
          <p className="text-sm text-muted-foreground">
            Proactive alerts based on your profile.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          {healthAlerts.map(alert => (
            <div key={alert.id}>
              <p className="font-semibold">{alert.title}</p>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
