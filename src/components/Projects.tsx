// src/pages/Projects.tsx
import React from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    tech: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'nDrive',
        description: 'A cloud-native file management system with secure AES encryption and CI/CD workflows.',
        image: '/images/ndrive.png', // Replace with your actual image paths
        tech: 'Full Stack',
        link: 'https://ndriveapp.netlify.app/',
    },
    {
        title: 'Sustainability Credit Exchange',
        description: 'Full-stack sustainability credit platform with Django, React, and AWS.',
        image: '/images/sce.png',
        tech: 'Full Stack',
        link: 'https://sceapp.netlify.app/',
    },
    {
        title: 'AI Job Recommendation System',
        description: 'Microservices-based job board using Spring Boot, FastAPI, and GPT embeddings.',
        image: '/images/jobboard.png',
        tech: 'AI/ML',
        link: 'https://github.com/Ncoder23/Job-Board-AI',
    },
    {
        title: 'HackVok',
        description: 'Multilingual TikTok clone built during TikTok TechJam 2024.',
        image: '/images/hackvok.png',
        tech: 'Mobile/Web',
        link: 'https://devpost.com/software/hackvok-multilingual-tiktok-clone',
    },
];

const Projects: React.FC = () => {
    return (
        <main>
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-headings)' }}>🚀 Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl overflow-hidden shadow-md transition hover:scale-[1.02] hover:shadow-xl duration-300"
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-2 right-2 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                {project.tech}
                            </span>
                        </div>
                        <div className="p-4 ">
                            <h3 className="text-sm font-bold uppercase">{project.title}</h3>
                            <p className="text-xs mt-1">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    );
};

export default Projects;
