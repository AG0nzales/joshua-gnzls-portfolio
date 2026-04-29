import React from "react";
import ProjectCard from "./project-card";

const projects = [
  {
    id: 1,
    image: "/assets/mockup-cnltk.png",
    title: "Cebuano Natural Language Toolkit",
    description:
      "NLP toolkit for Cebuano language processing, enabling text analysis and language understanding for local dialect.",
    subtitle: "NLP for Cebuano",
    date: "2022",
    pageLink: "/cnltk",
    technologies: ["Python", "NLTK", "TensorFlow", "React", "Flask"],
  },
  {
    id: 2,
    image: "/assets/aweqfy.png",
    title: "Awesome Queuing System (AweQfy)",
    description:
      "Digital queuing system to automate manual queue management for businesses and organizations.",
    subtitle: "Automating the manual",
    date: "2023",
    pageLink: "/aweqfy",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Chakra",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    image: "/assets/chatpdf-mockup1.png",
    title: "ChatPDF",
    description:
      "Interactive chat interface for PDF documents using AI to answer questions about document content.",
    subtitle: "OpenAI",
    date: "2023",
    pageLink: "/chatpdf",
    technologies: [
      "OpenAI API",
      "React",
      "TypeScript",
      "Material Tailwind",
      "PyDF",
      "Pinecone",
    ],
  },
  {
    id: 4,
    image: "/assets/contextquiz-mockup2.png",
    title: "Context Quiz Generator",
    description:
      "AI-powered quiz generator using OpenAI API to create contextual quizzes from any text input.",
    subtitle: "OpenAI API",
    date: "2023",
    pageLink: "/contextquiz",
    technologies: ["OpenAI API", "React", "Fast API", "Render"],
  },
  {
    id: 5,
    image: "/assets/interfaces-mockup.png",
    title: "Interfaces for Businesses",
    description:
      "Created Web interfaces and brand designs tailored for business needs with modern UI/UX principles. Samples are confidential",
    subtitle: "Web & Brand",
    date: "2023",
    pageLink: "/interfaces",
    technologies: ["Figma", "Webflow", "React", "Tailwind", "GSAP"],
  },

  // {
  //   id: 6,
  //   image: "/assets/aweqfy.png",
  //   title: "Creative Design Projects",
  //   description:
  //     "Collection of creative design ideas and projects showcasing artistic and functional design concepts.",
  //   subtitle: "Ideas",
  //   date: "2023",
  //   pageLink: "/ideas",
  //   technologies: [
  //     "Figma",
  //     "Adobe XD",
  //     "Photoshop",
  //     "Illustrator",
  //     "After Effects",
  //   ],
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#f5f0e6] to-[#e8dfd0] border-2 border-[#e8dfd0] flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 raleway text-center">
            Projects
          </h2>
          <p className="text-gray-600 text-center max-w-2xl raleway leading-relaxed">
            A collection of my work showcasing my skills in web development, AI,
            and design
          </p>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-transparent via-[#e8dfd0] to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              subtitle={project.subtitle}
              date={project.date}
              pageLink={project.pageLink}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
