// components/ProjectsSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Photo Retouching",
    category: "Branded Ecommerce",
    image: "/images/H2.jpg",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: 2,
    title: "Photo Retouching",
    category: "Branded Ecommerce",
    image: "/images/H2.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    title: "Photo Retouching",
    category: "Branded Ecommerce",
    image: "/images/H2.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    id: 4,
    title: "Photo Retouching",
    category: "Branded Ecommerce",
    image: "/images/H2.jpg",
    colSpan: "col-span-3",
    rowSpan: "row-span-1",
  },
];

const categories = [
  "All",
  "Branding Strategy",
  "Digital Experiences",
  "Ecommerce",
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="overflow-hidden pb-10 pt-20 lg:pb-15 lg:pt-25 xl:pb-20 xl:pt-30">
      <div className="animate_top relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8 xl:px-0">
        <h2 className="mx-auto mb-4 text-3xl font-semibold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-4xl">
          Our Latest Projects
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 md:px-8 2xl:px-0">
        <div className="projects-tab mb-16 flex flex-wrap justify-center gap-5 rounded-full bg-blue-500 px-3 py-2 shadow-md dark:bg-blacksection">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-tab-btn rounded-full px-6 py-1.5 font-medium transition-all duration-300 ease-in-out ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-transparent"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative z-10 overflow-hidden rounded-lg ${project.colSpan} ${project.rowSpan}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={439}
                height={690}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-full flex-col items-center justify-center rounded-lg bg-white/30 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:translate-y-0">
                <h4 className="mb-1 text-2xl font-medium text-black">
                  {project.title}
                </h4>
                <p>{project.category}</p>
                <a
                  aria-label="Portfolio Details"
                  href="#"
                  className="group mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-blue-500 transition-all duration-300 group-hover:border-primary group-hover:bg-primary"
                >
                  <svg
                    className="fill-gray-500 transition-all duration-300 group-hover:fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
