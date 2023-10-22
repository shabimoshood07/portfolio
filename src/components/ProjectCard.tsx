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
            <div className="md:flex flex-row-reverse items-start justify-end min-h-[300px] gap-4 w-full flex-1">
              <div className="md:flex-1 md:my-4 md:flex justify-around items-start flex-col">
                <h1 className="uppercase md:text-center font-semibold text-slate-950 text-[20px] w-full">
                  {project.title}
                </h1>

                <p className="md:text-left w-full text-slate-950">
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

              <div className="relative my-4  flex-shrink-0  items-center h-[300px] w-full md:w-[400px] rounded-[15px] overflow-hidden">
                <Image
                  src={project.image}
                  height={500}
                  width={500}
                  alt={project.title}
                  className="absolute left-0 right-0 w-full h-full object-cover"
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
