// src/pages/Education.tsx
import React from 'react';

const Education: React.FC = () => {
    return (
        <main>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-headings)' }}>🎓 Education</h2>

            {/* SCU */}
            <div className="border rounded-md p-6 mb-6">
                <p className="text-sm leading-relaxed">
                    <strong className="text-base" style={{ color: 'var(--color-highlight)' }}>Santa Clara University</strong><br />
                    <span>Apr 2023 – Mar 2025 | Santa Clara, CA</span><br /><br />
                    Master of Science in Computer Science & Engineering<br />
                    Coursework: Data Structures & Algorithms, OOP, AI, ML, Deep Learning<br /><br />
                    • Student Assistant: Configured and maintained lab servers.<br />
                    • Finalist at TikTok TechJam 2024 (HackVok: Multilingual TikTok Clone)
                </p>
            </div>

            {/* Gujarat Tech University */}
            <div className="border rounded-md p-6">
                <p className="text-sm leading-relaxed">
                    <strong className="text-base" style={{ color: 'var(--color-highlight)' }}>Gujarat Technological University</strong><br />
                    <span className="text-gray-500 dark:text-gray-400">Jun 2018 – May 2022 | Gujarat, India</span><br /><br />
                    Bachelor of Engineering in Information Technology<br /><br />
                    • ISA Core Committee Member & Web Master (2021–2022)
                </p>
            </div>
        </main>
    );
};

export default Education;
