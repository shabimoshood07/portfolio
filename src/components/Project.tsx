import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="flex justify-center items-center py-16">
      <div className="w-[98%] max-w-4xl mx-auto px-3">
        <h1 className="text-[25px] font-bold section-heading relative inline-block mb-3">Project</h1>
        <div>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Project;
