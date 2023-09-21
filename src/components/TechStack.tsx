"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconsFrontend } from "@/lib/icons";

const TechStack = () => {
  return (
    <section>
      <h1 className="text-center font-bold text-[18px] md:text-[22px] mt-8 mb-2 md:mt-20 md:mb-5">
        Familiar Technologies
      </h1>
      <div className="md:flex justify-center gap-4 pb-8">
        <div className="flex gap-4 justify-center items-center flex-wrap">
          {IconsFrontend.map((icon) => {
            return (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <div dangerouslySetInnerHTML={{ __html: icon.icon }} />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-400 text-slate-950">
                    <p>{icon.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
