import MaxWidthWrapper from "./MaxWidthWrapper";
import { PROJECTS } from "@/config";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import GithubLink from "./GithubLink";
import { Badge } from "./ui/badge";

function Projects() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="text-muted-foreground mt-1 mb-4">
        Here are some of my projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <Card className="h-full group" key={project.title}>
            <CardHeader className="pt-0 pb-3">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <Link href={project.href}>{project.title}</Link>
                  {project.github && <GithubLink link={project.github} />}
                </div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              {project.tags.map((tag) => (
                <Badge variant="secondary" key={tag}>
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

export default Projects;
