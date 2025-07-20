import { ArrowUpRight } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

export function ProjectsCarousel() {
  return (
    <Carousel className="w-full max-w-xs md:max-w-md">
      <CarouselContent className="">
        {[
          {
            title: "My web portfolio",
            description:
              "A fully responsive and animated portfolio. It reflects my design vision and technical skills, following a modern and clean aesthetic.",
            icons: [
              { class: "devicon-nextjs-plain", label: "Next.js" },
              { class: "devicon-tailwindcss-original", label: "TailwindCSS" },
              { class: "devicon-framermotion-original", label: "Framer" },
              { class: "devicon-eslint-plain", label: "ESLint" },
              { class: "devicon-typescript-plain", label: "TypeScript" },
            ],
            links: [
              {
                href: "https://github.com/bemondev/portfolio",
                label: "Visit the repository",
              },
            ],
          },
          {
            title: "Cafeteria App",
            description:
              "Android app developed in Kotlin that consumes a Java REST API. Built for a fictional cafeteria, it showcases client-server interaction, authentication, and a structured UI using Android Studio.",
            icons: [
              { class: "devicon-androidstudio-plain", label: "Android Studio" },
              { class: "devicon-java-plain", label: "Java" },
              { class: "devicon-kotlin-plain", label: "Kotlin" },
            ],
            links: [
              {
                href: "https://github.com/bemondev/school-projects/tree/main/Kotlin%20-%20Android%20Studio/cafeteria-app-consuming-local-API",
                label: "Visit the frontend",
              },
              {
                href: "https://github.com/bemondev/school-projects/tree/main/Java/cafeteria-server-API-WildFly",
                label: "Visit the backend",
              },
            ],
          },
          {
            title: "Meditech",
            description:
              "Desktop app built in Java using Swing for the frontend and a local Java backend API. Designed to simulate a medical record management system with persistent data storage.",
            icons: [
              { class: "devicon-java-plain", label: "Java" },
              { class: "devicon-sqldeveloper-plain", label: "SQL Developer" },
            ],
            links: [
              {
                href: "https://github.com/bemondev/school-projects/tree/main/Java/client-swing-app",
                label: "Visit the frontend",
              },
              {
                href: "https://github.com/bemondev/school-projects/tree/main/Java/server-swing-app",
                label: "Visit the backend",
              },
            ],
          },
          {
            title: "Android Users List",
            description:
              "Kotlin Android app that fetches and displays user data via Retrofit. A clean and simple interface focused on practicing REST API consumption and UI rendering.",
            icons: [
              { class: "devicon-androidstudio-plain", label: "Android Studio" },
              { class: "devicon-kotlin-plain", label: "Kotlin" },
            ],
            links: [
              {
                href: "https://github.com/bemondev/school-projects/tree/main/Kotlin%20-%20Android%20Studio/list-users-consuming-API",
                label: "Visit the repository",
              },
            ],
          },
          {
            title: "Simple CRUD",
            description:
              "A vanilla JavaScript project featuring a CRUD interface for managing events. Built with HTML, CSS, and JS to build fundamental frontend development skills without frameworks.",
            icons: [
              { class: "devicon-javascript-plain", label: "JavaScript" },
              { class: "devicon-html5-plain", label: "HTML5" },
              { class: "devicon-css3-plain", label: "CSS3" },
            ],
            links: [
              {
                href: "https://github.com/bemondev/school-projects/tree/main/Web%20Development/simple-crud-page",
                label: "Visit the repository",
              },
            ],
          },
        ].map((project, index) => (
          <CarouselItem
            key={index}
            className=""
          >
            <div className="p-1">
            <Card className="bg-accent/1 h-full">
              <CardContent className="relative flex flex-col h-full min-h-[360px] md:min-h-[320px] lg:min-h-[280px] items-start justify-between">
                <div>
                  <h3 className="text-2xl text-foreground text-left">{project.title}</h3>
                  <p className="font-normal text-left text-foreground py-3">{project.description}</p>
                </div>
                <div className="pt-2 mx-auto mt-auto flex flex-wrap justify-center items-center gap-6">
                  {project.icons.map((icon, i) => (
                    <div key={i} className="relative group">
                      <i className={`${icon.class} text-4xl text-foreground cursor-pointer`} />
                      <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center bg-background/80 p-3 rounded-xl border-1 shadow-lg transition-all w-32">
                        <p className="text-sm font-semibold text-foreground">{icon.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto mb-0 text-chart-1 mx-auto flex flex-wrap gap-3 justify-center">
                  {project.links.map((link, i) => (
                    <Button key={i} variant={"ghost"}>
                      <a className="underline" href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                      <ArrowUpRight />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
