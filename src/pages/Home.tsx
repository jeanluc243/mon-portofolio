import { Link } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-gray-200 selection:text-black">
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20 space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-4 md:mt-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Bonjour, je m'appelle Jean Luc.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis <span className="font-semibold text-foreground">Ingénieur DevOps</span> et <span className="font-semibold text-foreground">Développeur Fullstack</span>. 
              Je construis des applications modernes, robustes et évolutives.
            </p>
          </div>
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-gray-100 dark:border-gray-800">
            <AvatarImage src="/src/assets/pix.jpg" alt="Jean Luc Kabulu" className="object-cover" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
        </div>

        {/* Projects Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Je travaille actuellement sur</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
              <div>
                <span className="font-medium">GainFlow</span> — Une application de gestion financière pour optimiser vos flux de trésorerie.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <div>
                <span className="font-medium">Traser</span> — Une plateforme innovante pour le suivi et la traçabilité.
              </div>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Retrouvez-moi sur</h2>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        {/* Internal Navigation */}
        <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <p className="text-lg">
            Curieux de voir mon parcours professionnel ? <Link to="/cv" className="underline decoration-gray-400 hover:decoration-foreground underline-offset-4 transition-all">Consultez mon CV</Link>.
          </p>
          <p className="text-lg">
            Intéressé par les outils que j'utilise ? Jetez un œil à <Link to="/stack" className="underline decoration-gray-400 hover:decoration-foreground underline-offset-4 transition-all">ma stack technique</Link>.
          </p>
          <p className="text-lg">
            Envie de savoir comment je code ? Voici <Link to="/vscode" className="underline decoration-gray-400 hover:decoration-foreground underline-offset-4 transition-all">ma configuration VS Code</Link>.
          </p>
        </div>

        {/* Footer / Contact */}
        <div className="space-y-4 pt-8">
          <h2 className="text-xl font-semibold">Me contacter</h2>
          <div className="flex flex-col gap-2">
            <a href="mailto:jeanluc.kabulu@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit">
              <Mail className="w-4 h-4" />
              jeanluc.kabulu@gmail.com
            </a>
            <a href="https://wa.me/243851601354" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit">
              <MessageCircle className="w-4 h-4" />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>

      </main>
    </div>
  )
}
