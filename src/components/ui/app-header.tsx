// src/components/app-header.tsx
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export function AppHeader() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-6" />
      <div className="flex flex-1 items-center">
        <h1 className="text-lg font-semibold flex-grow">Ejada Management System</h1>
  
        <ThemeToggle/>
      </div>
    </header>
  );
}