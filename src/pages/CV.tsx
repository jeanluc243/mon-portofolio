import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function CV() {
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

        {/* Avatar + intro */}
        <div className="flex items-start gap-4">
          <Avatar className="w-20 h-20 mt-1">
            <AvatarImage src="/src/assets/pix.jpg" alt="Jean Luc Kabulu" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div>
              <h1 className="text-2xl font-bold leading-tight">
                Jean Luc Kabulu
              </h1>
              <p className="text-muted-foreground font-medium">
                Ingénieur DevOps (Medium)
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Ubongo Dar Es Salaam, TZ | Makutano Lubumbashi, RDC
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                Ingénieur DevOps passionné par l’automatisation, la fiabilité des systèmes et la performance applicative.
              </p>
              <p>
                Spécialisé dans l’orchestration des environnements Docker, les pipelines CI/CD, la gestion du code source avec GitHub Actions et le déploiement sur le cloud (Vercel, Render, DigitalOcean, AWS).
              </p>
            </div>
          </div>
        </div>

        {/* Expériences Récentes */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Expériences Récentes</h2>
          
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-semibold text-base">Consultant – Data Entry & Validation (Remote)</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Déc. 2024 – Juin 2025</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">OddsMatrix • Oslo, Norvège</p>
            <ul className="list-disc list-outside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Saisie, contrôle et validation des données sportives issues de flux statistiques.</li>
              <li>Collaboration avec les équipes techniques pour améliorer la qualité et la cohérence des Datas.</li>
              <li>Télétravail international sur plateformes analytiques et outils internes d’OddsMatrix (groupe EveryMatrix).</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-semibold text-base">Ingénieur Logiciel / Data Engineer</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Déc. 2024 – Présent</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">GainFlow Matrix • Dar es Salaam, Tanzanie</p>
            <ul className="list-disc list-outside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Conception et maintien d’applications d’analyse de données sportives en temps réel.</li>
              <li>Conception de composants UI réutilisables (tableaux, dashboards).</li>
              <li>Optimisation des performances et intégration d’API REST (Node.js / NestJS / MongoDB).</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-semibold text-base">Consultant Ingénieur Logiciel</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Mar. 2024 – Nov. 2024</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">East African Community • Arusha & Dar es Salaam</p>
            <ul className="list-disc list-outside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Développement et intégration de modules logiciels internes pour la gestion documentaire régionale.</li>
              <li>Participation à la modernisation des systèmes numériques de la EAC (React, Next et Github).</li>
              <li>Collaboration multinationale entre les bureaux d’Arusha et de Dar es Salaam.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-semibold text-base">Chargé de Contrôle Logistique et Implémentation de Projets Informatiques</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">2021 – Présent</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Établissement Liwaka • Lubumbashi</p>
            <ul className="list-disc list-outside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Implémentation de solutions informatiques pour la gestion des stocks et des flux logistiques.</li>
              <li>Supervision de la maintenance et de la configuration du matériel informatique.</li>
              <li>Coordination entre les équipes techniques et administratives.</li>
            </ul>
          </div>
        </section>

        {/* Éducation */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Éducation</h2>
          
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium">Master en DevOps</h3>
              <span className="text-sm text-muted-foreground">2025 – En cours</span>
            </div>
            <p className="text-sm text-muted-foreground">Université Don Bosco de Lubumbashi</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium">Licence en Informatique • Génie Logiciel</h3>
              <span className="text-sm text-muted-foreground">2022</span>
            </div>
            <p className="text-sm text-muted-foreground">École supérieure d’informatique Salama</p>
          </div>
          
          <div className="space-y-2 pt-2">
            <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Formations complémentaires</h3>
            <ul className="list-disc list-outside text-sm text-muted-foreground ml-4">
              <li>DevOps Fundamentals & Docker for Developers (Coursera, 2024)</li>
              <li>Automating Deployment with GitHub Actions (Udemy, 2024)</li>
              <li>TypeScript Deep Dive (Frontend Masters, 2024)</li>
            </ul>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold border-b pb-2">Soft Skills</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Autonomie et fiabilité • Esprit d’équipe et communication claire • Sens du détail et rigueur • Résolution des problèmes
          </p>
        </section>

        {/* Références */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Références</h2>
          <div className="grid gap-4 sm:grid-cols-2 text-sm text-muted-foreground">
            <div className="space-y-1">
              <p className="font-medium text-foreground">Révérend Père Isaac KAMIBA</p>
              <p className="text-xs">Secrétaire Général Académique – ESIS</p>
              <p>Tél. : +243 995 285 024</p>
              <a href="mailto:isaac.kamiba@esisalama.org" className="hover:underline">isaac.kamiba@esisalama.org</a>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">M. Jeff Emmanuel NTUMBA</p>
              <p className="text-xs">Coordinateur du Département de Génie Logiciel – ESIS</p>
              <p>Tél. : +243 814 662 718</p>
              <a href="mailto:jeffntumba@esisalama.org" className="hover:underline">jeffntumba@esisalama.org</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
