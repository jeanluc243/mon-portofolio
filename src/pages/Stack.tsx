

import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Stack() {
  const stack = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
    { category: "Backend", items: ["Node.js", "NestJS", "Express"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL"] },
    { category: "DevOps & Cloud", items: ["Docker", "GitHub Actions", "AWS", "DigitalOcean", "Vercel", "Render"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "Linux"] },
  ]

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
          <h1 className="text-3xl font-bold">Mon Stack Technique</h1>
          <p className="text-muted-foreground">
            Les outils et technologies que j'utilise au quotidien pour construire des applications performantes et scalables.
          </p>
        </div>

        <div className="grid gap-6">
          {stack.map((group) => (
            <div key={group.category} className="space-y-3">
              <h2 className="text-xl font-semibold">{group.category}</h2>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
