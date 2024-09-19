"use client";
import React, { useState } from "react";

type CertificateType = {
  id: number;
  title: string;
  text: string;
  year: string;
  place: string;
};

export function Certificate() {
  const certificates: CertificateType[] = [
    {
      id: 10,
      title: "React.js",
      text: "Experience in React and Next.js, covering everything from SPA development and API integration to Design System creation and application deployment.",
      year: "2024",
      place: "Rocketseat",
    },
    {
      id: 9,
      title: "Deployment & Web Optimization Mastery",
      text: "Expert Techniques for Deploying, Optimizing, and Ensuring Accessibility in Web Projects.",
      year: "2024",
      place: "Rocketseat",
    },
    {
      id: 8,
      title: "Backend Development Mastery",
      text: "Advanced API Creation with Node.js and Express, SQL Databases, and Backend Techniques.",
      year: "2024",
      place: "Rocketseat",
    },
    {
      id: 7,
      title: "Full-Stack React.js Development",
      text: "Integrating React.js with Backend APIs: Full-Stack Mastery with Node.js and TypeScript.",
      year: "2024",
      place: "Rocketseat",
    },
    {
      id: 6,
      title: "Advanced CSS & Web Design Mastery",
      text: "Expert Techniques for Complex Layouts, Animations, and Responsive Design.",
      year: "2024",
      place: "Rocketseat",
    },
    {
      id: 5,
      title: "Expert React.js Development",
      text: "Mastering React: Advanced Components, Props, State Management, Hooks, and TypeScript Integration.",
      year: "2024",
      place: "Rocketseat",
    },
    {
      id: 4,
      title: "Comprehensive Web Development",
      text: "An In-Depth Look at Web Development: HTML, CSS, JavaScript, Git & GitHub.",
      year: "2024",
      place: "Rocketseat",
    },
    {
      id: 3,
      title: "JavaScript Mastery",
      text: "Advanced JavaScript Skills: From Core Syntax to Complex Topics Like OOP, Asynchrony, and SPA Development.",
      year: "2023",
      place: "Alura",
    },
    {
      id: 2,
      title: "Advanced HTML & CSS Techniques",
      text: "From Scratch to Mastery: Building Accessible, Responsive Web Pages with Advanced CSS.",
      year: "2023",
      place: "Alura",
    },
    {
      id: 1,
      title: "Marketing & Advertising Bacharel Degree",
      text: "Comprehensive Studies in Marketing Strategies, Advertising Techniques, and Consumer Behavior Analysis.",
      year: "2015",
      place: "FURB",
    },
  ];

  const [showAll, setShowAll] = useState<boolean>(false);
  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const certificatesToShow = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section className="py-10 px-6 sm:px-0 text-secondary">
      <div className="sm:flex sm:flex-col sm:gap-4">
        <h3 className="text-xl leading-4 mb-8">Certificates</h3>

        {certificatesToShow.map((certificate) => (
          <div
            key={certificate.id}
            className="flex flex-col pb-4 mb-4 sm:mb-0 gap-2 text-sm leading-4 text-tertiary tracking-tight border-b border-dashed border-border-opaque"
          >
            <p className="text-secondary">{certificate.title}</p>
            <p>{certificate.text}</p>
            <div className="flex items-center gap-6">
              <p>{certificate.year}</p>
              <p>{certificate.place}</p>
            </div>
          </div>
        ))}

        {certificates.length > 3 && (
          <button
            onClick={handleToggleShowAll}
            aria-label={
              showAll ? "See less certificates" : "See more certificates"
            }
            className="flex text-sm text-secondary sm:hover:text-primary sm:transition-colors sm:duration-300 sm:ease"
          >
            {showAll ? "See less" : "See more"}
          </button>
        )}
      </div>
    </section>
  );
}
