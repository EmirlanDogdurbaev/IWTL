import { cn } from '@/lib/utils';
import * as React from 'react';
import {
      Sidebar,
      SidebarContent,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      SidebarProvider,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

export interface ISideBarProps {
      className?: string
}

export default function SideBar({ className, ...props }: ISideBarProps) {

      const items = [
            {
                  title: "Home",
                  url: "#",
                  icon: Home,
            },
            {
                  title: "Inbox",
                  url: "#",
                  icon: Inbox,
            },
            {
                  title: "Calendar",
                  url: "#",
                  icon: Calendar,
            },
            {
                  title: "Search",
                  url: "#",
                  icon: Search,
            },
            {
                  title: "Settings",
                  url: "#",
                  icon: Settings,
            },
      ]
      return (
            <div className={cn("max-w-[1280px] mx-auto bg-red", className)} {...props}>
                  <SidebarProvider>
                        <Sidebar>
                              <SidebarContent>
                                    <SidebarGroup>
                                          <SidebarGroupLabel>Application</SidebarGroupLabel>
                                          <SidebarGroupContent>
                                                <SidebarMenu>
                                                      {items.map((item) => (
                                                            <SidebarMenuItem key={item.title}>
                                                                  <SidebarMenuButton asChild>
                                                                        <a href={item.url}>
                                                                              <item.icon />
                                                                              <span>{item.title}</span>
                                                                        </a>
                                                                  </SidebarMenuButton>
                                                            </SidebarMenuItem>
                                                      ))}
                                                </SidebarMenu>
                                          </SidebarGroupContent>
                                    </SidebarGroup>
                              </SidebarContent>
                        </Sidebar>
                  </SidebarProvider>
            </div>
      );
}
