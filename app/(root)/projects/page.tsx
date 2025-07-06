import React from "react";
import { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
};

function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  );
}

export default ProjectsPage;
