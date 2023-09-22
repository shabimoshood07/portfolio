"use client";
import { IconsFrontend } from "@/lib/icons";
import { projects } from "@/lib/projects";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <div
            className="border border-slate-950  rounded-lg flex flex-col items-center my-8 py-4 px-1 max-w-3xl mx-auto md:px-3 shadow-xl"
            key={index}
          >
            <h1 className="uppercase text-center font-semibold text-slate-950">
              {project.title}
            </h1>

            <div className="md:flex flex-row-reverse items-center min-h-[300px] gap-2">
              <div className="">
                <p className="text-center max-w-[90%] md:max-w-none mx-auto text-slate-950">
                  {project.description}
                </p>

                <div className="flex gap-2 justify-center md:justify-end items-center flex-wrap my-4">
                  <h1 className="text-center underline text-red-500">Stack</h1>
                  {IconsFrontend.map((icon, index) => {
                    let stack = project.stack;
                    if (stack.includes(icon.name)) {
                      return (
                        <TooltipProvider delayDuration={100} key={index}>
                          <Tooltip>
                            <TooltipTrigger>
                              <icon.icon />
                            </TooltipTrigger>
                            <TooltipContent
                              side="bottom"
                              className="bg-slate-950 text-red-500"
                            >
                              <p>{icon.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    }
                  })}
                </div>
              </div>

              <div className="relative w-fit mx-auto my-4 flex-shrink-0  items-center">
                <Image
                  src={project.image1}
                  height={400}
                  width={400}
                  alt={project.title}
                />
                <Image
                  src={project.image2}
                  height={100}
                  width={100}
                  alt={project.title}
                  className="absolute bottom-0 right-0"
                />
              </div>
            </div>

            <footer className="flex justify-center gap-4">
              <Link
                href={project.github}
                target="_blank"
                className="text-slate-950 text-[20px] hover:text-red-500 duration-300 flex items-center gap-1"
              >
                code <FaGithub />
              </Link>
              <Link
                href={project.demo}
                target="_blank"
                className="text-slate-950 text-[20px] hover:text-red-500 duration-300 flex items-center gap-1"
              >
                Demo <FiExternalLink />
              </Link>
            </footer>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
