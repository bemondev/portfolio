import { ArrowUpRight } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

export function ProjectsCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
            <div className="p-1">
              <Card className="bg-accent/1">
                <CardContent className="relative flex flex-col aspect-square items-start justify-start">
                  {/* INFO */}
                  <div>
                    <h3 className="text-2xl text-foreground text-left">
                      My web portfolio
                    </h3>
                    <p className="font-normal text-left text-foreground py-3">
                      This portfolio it&rsquo;s my most recent project, I enjoyed making this  much! Used: Next.JS, TailwindCSS, shadcnui and ESLint
                    </p>
                  </div>
                  {/* ICONOS */}
                  <div className="pt-2 mx-auto mt-auto mb-auto flex flex-wrap justify-center items-center gap-6">
                    <i className="devicon-nextjs-plain text-4xl text-foreground"></i>
                    <i className="devicon-tailwindcss-original text-4xl text-foreground"></i>
                    <i className="devicon-framermotion-original text-4xl text-foreground"></i>
                    <i className="devicon-eslint-plain text-4xl text-foreground"></i>
                    <i className="devicon-vercel-original text-4xl text-foreground"></i>
                    <i className="devicon-typescript-plain text-4xl text-foreground"></i>
                  </div>
                  {/* BOTONES */}
                  <div className="mt-auto mb-0 text-chart-1 mx-auto">
                    <Button variant={"ghost"}><a className="underline" href="https://github.com/bemondev/portfolio">Visit the repository</a><ArrowUpRight/></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card className="bg-accent/1">
                <CardContent className="relative flex flex-col aspect-square items-start justify-start">
                  {/* INFO */}
                  <div>
                    <h3 className="text-2xl text-foreground text-left">Cafeteria App</h3>
                    <p className="font-normal text-left text-foreground py-3">
                      Android app made in Kotlin for a mock cafeteria that consumes a Java backend API.
                    </p>
                  </div>
                  {/* ICONOS */}
                  <div className="pt-2 mx-auto mt-auto mb-auto flex flex-wrap justify-center items-center gap-6">
                    <i className="devicon-androidstudio-plain text-4xl text-foreground"></i>
                    <i className="devicon-java-plain text-4xl text-foreground"></i>
                    <i className="devicon-kotlin-plain text-4xl text-foreground"></i>
                  </div>
                  {/* BOTONES */}
                  <div className="mt-auto  mb-0 text-chart-1 mx-auto">
                    <Button variant={"ghost"}><a className="underline" href="https://github.com/bemondev/school-projects/tree/main/Kotlin%20-%20Android%20Studio/cafeteria-app-consuming-local-API">Visit the frontend</a><ArrowUpRight/></Button>
                    <Button variant={"ghost"}><a className="underline" href="https://github.com/bemondev/school-projects/tree/main/Java/cafeteria-server-API-WildFly">Visit the backend</a><ArrowUpRight/></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card className="bg-accent/1">
                <CardContent className="relative flex flex-col aspect-square items-start justify-start">
                  {/* INFO */}
                  <div>
                    <h3 className="text-2xl text-foreground text-left">
                      Meditech
                    </h3>
                    <p className="font-normal text-left text-foreground py-3">
                      Java app with an UI made in Java Swing that consumes a local Java backend API
                    </p>
                  </div>
                  {/* ICONOS */}
                  <div className="pt-2 mx-auto mt-auto mb-auto flex flex-wrap justify-center items-center gap-6">
                    <i className="devicon-java-plain text-4xl text-foreground"></i>
                    <i className="devicon-sqldeveloper-plain text-4xl text-foreground"></i>
                  </div>
                  {/* BOTONES */}
                  <div className="mt-auto  mb-0 text-chart-1 mx-auto">                    <Button variant={"ghost"}><a className="underline" href="https://github.com/bemondev/school-projects/tree/main/Java/client-swing-app">Visit the frontend</a><ArrowUpRight/></Button>
                    <Button variant={"ghost"}><a className="underline" href="https://github.com/bemondev/school-projects/tree/main/Java/server-swing-app">Visit the backend</a><ArrowUpRight/></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card className="bg-accent/1">
                <CardContent className="relative flex flex-col aspect-square items-start justify-start">
                  {/* INFO */}
                  <div>
                    <h3 className="text-2xl text-foreground text-left">
                      Android Users List
                    </h3>
                    <p className="font-normal text-left text-foreground py-3">
                      Simple user listing made with Kotlin utilizing Retrofit for HTTP requests.
                    </p>
                  </div>
                  {/* ICONOS */}
                  <div className="pt-2 mx-auto mt-auto mb-auto flex flex-wrap justify-center items-center gap-6">
                    
                  </div>
                  {/* BOTONES */}
                  <div className="mt-auto  mb-0 text-chart-1 mx-auto">
                    <Button variant={"ghost"}><a className="underline" href="https://github.com/bemondev/school-projects/tree/main/Kotlin%20-%20Android%20Studio/list-users-consuming-API">Visit the repository</a><ArrowUpRight/></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card className="bg-accent/1">
                <CardContent className="relative flex flex-col aspect-square items-start justify-start">
                  {/* INFO */}
                  <div>
                    <h3 className="text-2xl text-foreground text-left">
                      Simple CRUD
                    </h3>
                    <p className="font-normal text-left text-foreground py-3">
                      Made this simple web app using vanilla HTML, JS, CSS. It&rsquo;s a simple events listing with CRUD operations.
                    </p>
                  </div>
                  {/* ICONOS */}
                  <div className="pt-2 mx-auto mt-auto mb-auto flex flex-wrap justify-center items-center gap-6">
                    
                  </div>
                  {/* BOTONES */}
                  <div className="mt-auto  mb-0 text-chart-1 mx-auto">
                    <Button variant={"ghost"}><a className="underline" href="https://github.com/bemondev/school-projects/tree/main/Web%20Development/simple-crud-page">Visit the repository</a><ArrowUpRight/></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
