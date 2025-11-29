import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function VSCode() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <main className="max-w-xl w-full space-y-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="-ml-2">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Mon Setup VS Code</h1>
          <p className="text-muted-foreground">
            Voici les extensions et la configuration que j'utilise pour être productif.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Thème</h3>
            <p className="text-sm text-muted-foreground">One Dark Pro / Dracula</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Extensions Indispensables</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
              <li>ESLint & Prettier</li>
              <li>GitLens</li>
              <li>Docker</li>
              <li>Tailwind CSS IntelliSense</li>
              <li>GitHub Copilot</li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Police</h3>
            <p className="text-sm text-muted-foreground">Fira Code / JetBrains Mono</p>
          </div>
        </div>
      </main>
    </div>
  )
}
