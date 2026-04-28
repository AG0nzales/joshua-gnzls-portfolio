import React from "react";
import ProjectCard from "./project-card";

const projects = [
  {
    id: 1,
    title: "Cebuano Natural Language Toolkit",
    description: "NLP toolkit for Cebuano language processing, enabling text analysis and language understanding for local dialect.",
    subtitle: "NLP for Cebuano",
    date: "2022",
    pageLink: "/cnltk",
  },
  {
    id: 2,
    title: "Context Quiz Generator",
    description: "AI-powered quiz generator using OpenAI API to create contextual quizzes from any text input.",
    subtitle: "OpenAI API",
    date: "2023",
    pageLink: "/contextquiz",
  },
  {
    id: 3,
    title: "ChatPDF",
    description: "Interactive chat interface for PDF documents using AI to answer questions about document content.",
    subtitle: "OpenAI",
    date: "2023",
    pageLink: "/chatpdf",
  },
  {
    id: 4,
    title: "Interfaces for Businesses",
    description: "Web interfaces and brand designs tailored for business needs with modern UI/UX principles.",
    subtitle: "Web & Brand",
    date: "2023",
    pageLink: "/interfaces",
  },
  {
    id: 5,
    title: "Awesome Queuing System (AweQfy)",
    description: "Digital queuing system to automate manual queue management for businesses and organizations.",
    subtitle: "Automating the manual",
    date: "2023",
    pageLink: "/aweqfy",
  },
  {
    id: 6,
    title: "Creative Design Projects",
    description: "Collection of creative design ideas and projects showcasing artistic and functional design concepts.",
    subtitle: "Ideas",
    date: "2023",
    pageLink: "/ideas",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 raleway text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              subtitle={project.subtitle}
              date={project.date}
              pageLink={project.pageLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
