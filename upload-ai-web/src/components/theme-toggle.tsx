'use client'

import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ThemeToggle(
  props: {
    isDarkMode: boolean,
    onThemeToggle: () => void
  }
) {

  function handleThemeToggle() {
    props.onThemeToggle()
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="flex justify-center items-center"
    >
      {props.isDarkMode ? (
        <Moon className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          onClick={handleThemeToggle}
        />
      ) : (
        <Sun className="absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          onClick={handleThemeToggle}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}