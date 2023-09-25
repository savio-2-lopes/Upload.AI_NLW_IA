import { Github } from 'lucide-react'
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ThemeToggle } from './theme-toggle';

export function Header(props: {
  isDarkMode: boolean,
  onThemeToggle: () => void
}) {
  return (
    <div className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload.ai</h1>

      <div className="flex items-center gap-3">

        <Separator orientation="vertical" />
        <span className="text-sm text-muted-foreground">
          Desenvolvido com 💜 durante o NLW da Rocketseat
        </span>

        <Separator orientation="vertical" className="h-6" />

        <ThemeToggle
          isDarkMode={props.isDarkMode}
          onThemeToggle={props.onThemeToggle}
        />

        <Separator orientation="vertical" className="h-6" />

        <Button variant="outline">
          <Github className="w-4 h-4 mr-2" />
          Github
        </Button>
      </div>
    </div>
  )
}