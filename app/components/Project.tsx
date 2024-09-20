"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

interface Project {
  id: string;
  title: string;
  image: string;
  type?: string;
  description?: string;
  tags?: string[];
  linkUrl: string;
}

const projects: Project[] = [
  {
    id: "bordignon-co",
    title: "Bordignon&Co",
    image: "/projects/img-bordignon.png",
    type: "React + Next JS",
    description:
      "A portfolio built from scratch, featuring a modern interface optimized to showcase Lucas Bordignon's work.",
    tags: ["React", "Next JS", "Tailwind", "TypeScript"],
    linkUrl: "https://github.com/anamolinari/lucas-bdn",
  },
  {
    id: "fire-alert",
    title: "Fire Alert",
    image: "/projects/img-fire-alert.png",
    type: "React JS",
    description:
      "A web application for monitoring and alerting about fires, featuring an intuitive interface, CSS animations, and smooth navigation.",
    tags: ["React JS", "Styled Components", "React Router DOM", "Keyframes"],
    linkUrl: "https://github.com/anamolinari/fire-alert",
  },
  {
    id: "to-do-list",
    title: "ToDo List",
    image: "/projects/img-to-do-list.png",
    type: "HTML + CSS + JS",
    description:
      "A task management application that allows users to add, update, complete, and remove tasks, with additional features like hiding completed tasks.",
    tags: ["HTML", "CSS", "JavaScript"],
    linkUrl: "https://github.com/anamolinari/to-do-list",
  },
  {
    id: "guess-the-number",
    title: "Guess the Number",
    image: "/projects/img-guess-the-number.png",
    type: "HTML + CSS + JS",
    description:
      "A simple number guessing game from 1 to 100, providing real-time feedback and a limit of 5 attempts per round.",
    tags: ["HTML", "CSS", "JavaScript"],
    linkUrl: "https://github.com/anamolinari/guess-the-number",
  },
  {
    id: "link-page",
    title: "Link Page",
    image: "/projects/img-page-link.png",
    type: "HTML + CSS + JS",
    description:
      "A responsive link page with light/dark theme options, dynamic avatar and background changes, and links that open in a new tab.",
    tags: ["HTML", "CSS", "JavaScript"],
    linkUrl: "https://github.com/anamolinari/link-page",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    image: "/projects/img-tic-tac-toe.png",
    type: "React JS",
    description:
      "An interactive Tic-Tac-Toe game with clickable squares and visual indicators for progress, developed to practice React. It includes a victory scoreboard and a reset option.",
    tags: ["React JS", "CSS"],
    linkUrl: "https://github.com/anamolinari/tic-tac-toe",
  },
];

export function Project() {
  const numSlides = projects.length;

  return (
    <>
      <main className="flex flex-col gap-4 py-10 sm:hidden">
        <h2 className="text-lg text-secondary pl-6">
          Work samples ({numSlides})
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          className="flex items-center w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="bg-card p-6 rounded-lg">
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View details for ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="shadow-project rounded-[4px]"
                />
                <div className="flex items-center justify-between pt-6 text-base tracking-tight">
                  <p className="text-secondary">{project.title}</p>
                  <p className="text-tertiary">{project.type}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

      <main className="hidden sm:flex flex-col items-start justify-center py-10">
        <h1 className="text-xl text-secondary mb-8">
          Work samples ({numSlides})
        </h1>

        {projects.map((project) => (
          <a
            href={project.linkUrl}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View details for ${project.title}`}
          >
            <div className="group flex items-center p-4 mb-4 gap-4 bg-card rounded-lg cursor-pointer">
              <Image
                src={project.image}
                width={138}
                height={104}
                className=" rounded-[4px] shadow-project sm:group-hover:transform sm:group-hover:-translate-y-1 sm:transition-transform sm:duration-500 sm:ease-in-out"
                alt={`Image of ${project.title}`}
              />

              <div className="text-sm leading-4 tracking-tight">
                <p className="text-secondary mb-2">{project.title}</p>
                <p className="text-tertiary mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-secondary">
                  {project.tags?.map((tag, tagIndex) => (
                    <p key={tagIndex} className="text-xs inline-block">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </main>
    </>
  );
}
