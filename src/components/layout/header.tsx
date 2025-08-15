"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Mountain,
  PlusCircle,
  User,
  LogOut,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock authentication check
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // In a real app, you'd check for a token in localStorage or a cookie
    // For this mock, we'll just simulate a logged-in state.
    // To test the logged-out state, change this to false.
    const loggedIn = true; 
    setIsAuthenticated(loggedIn);
  }, []);

  return { isAuthenticated };
};

export function Header() {
  const { isAuthenticated } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold md:text-base">
        <Mountain className="h-6 w-6 text-primary" />
        <span className="sr-only">Trivandrum Vibes</span>
      </Link>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="text-foreground transition-colors hover:text-foreground/80">
          Dashboard
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground/80">
          Deals
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground/80">
          Events
        </Link>
      </nav>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button variant="default" size="sm" className="hidden sm:flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Submit Alert
        </Button>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>

        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Submissions</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
           <div className="hidden sm:flex items-center gap-2">
             <Button variant="outline" asChild>
                <Link href="#">Log In</Link>
            </Button>
             <Button asChild>
                <Link href="#">Sign Up</Link>
            </Button>
           </div>
        )}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="font-headline">Trivandrum Vibes</span>
            </Link>
            <Link href="/" className="hover:text-foreground/80">Dashboard</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground/80">Deals</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground/80">Events</Link>
            <Button variant="default" className="flex items-center gap-2 w-full">
                <PlusCircle className="h-4 w-4" />
                Submit Alert
            </Button>
             {!isAuthenticated && (
                <div className="flex flex-col gap-4">
                    <Button variant="outline" asChild><Link href="#">Log In</Link></Button>
                    <Button asChild><Link href="#">Sign Up</Link></Button>
                </div>
             )}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
