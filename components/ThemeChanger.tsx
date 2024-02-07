"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeChanger() {
  const { setTheme } = useTheme()
  const [isClick,setIsClick] = React.useState(false);
  function handleIsClick() {
    if(isClick) setTheme("light")
    else setTheme("dark")
    setIsClick(!isClick);
    console.log("click",isClick);
  }
  return (
    <Button variant="outline" size="icon" onClick={handleIsClick}>
    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span className="sr-only">Toggle theme</span>
  </Button>
  )
}
