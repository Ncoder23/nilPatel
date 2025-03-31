// src/pages/Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
    return (
        <main >
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-headings)' }}>💼 Experience</h2>

            {/* SCU Frugal Innovation Hub */}
            <div className="border rounded-md p-6 mb-6">

                <p className="text-sm leading-relaxed">
                    <div className="flex justify-between items-center text-base font-semibold">
                        <span className="text-xl font-semibold" style={{ color: 'var(--color-highlight)' }}>Software Engineer</span>
                        <span >Apr 2024 – Present </span>
                    </div>
                    <div className="flex justify-between items-center text-base font-semibold">
                        <span>SCU Frugal Innovation Hub | Santa Clara University</span>
                        <span >Santa Clara, CA</span>
                    </div>
                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 py-2">
                        {['Flutter', 'Node.js', 'Firebase', 'JWT', 'OpenStreetMap', 'Jest', 'Supertest'].map(tool => (
                            <span
                                key={tool}
                                className="bg-black text-white px-4 py-1 rounded-full text-sm dark:bg-white dark:text-black"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    Led development of a Flutter app with a React.js admin dashboard, optimizing API performance and real-time map integration for student safety. Improved state management and testing, reducing errors and enhancing reliability.
                </p>

            </div>

            {/* Advancedware Technologies */}
            <div className="border rounded-md p-6">
                <p className="text-sm leading-relaxed">
                    <div className="flex justify-between items-center text-base font-semibold">
                        <span className="text-2xl font-semibold" style={{ color: 'var(--color-highlight)' }}>Software Engineer</span>
                        <span >Nov 2021 – Mar 2023</span>
                    </div>
                    <div className="flex justify-between items-center text-base font-semibold">
                        <span>Advacedware Technologies Pvt. Ltd.</span>
                        <span>Gujarat, India</span>
                    </div>
                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 py-2">
                        {['TypeScript', 'React', 'Django', 'PostgreSQL', 'Redux Thunk', 'D3.js', 'Auth0', 'Pytest', 'Google Cloud Tasks', 'GitHub Actions'].map(tool => (
                            <span
                                key={tool}
                                className="bg-black text-white px-4 py-1 rounded-full text-sm dark:bg-white dark:text-black"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    Developed and optimized an accounting and CRM platform using React, TypeScript, Django, and PostgreSQL, ensuring high system scalability and performance. Improved UI responsiveness and reduced database calls, enhancing efficiency. Integrated Auth0 OAuth for secure authentication, streamlining login processes. Engineered ETL pipelines with Google Cloud Tasks for scalable data processing. Automated CI/CD with GitHub Actions, reducing deployment time and enabling frequent Agile releases.
                </p>
            </div>
        </main>
    );
};

export default Experience;
