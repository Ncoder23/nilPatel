// src/components/Home.tsx
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-start">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-headings)' }}>
                    Nil Patel
                </h1>

                <p className="text-base sm:text-lg italic mb-8" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                    Software Engineer
                </p>

                <div className="text-start max-w-full sm:max-w-2xl">
                    <p className="mb-6">
                        <span className="text-yellow-400">👋</span> I am a passionate Software Engineer with a <b>Master’s degree in Computer Science at Santa Clara University</b> and expertise in
                        full-stack development, distributed systems, API programming, and AI-driven applications.
                    </p>
                    <p className="mb-6">
                        I thrive on optimizing efficiency and reliability, leveraging technologies like Python, TypeScript, JavaScript, React, Next.js, SQL, and AWS while continuously exploring new tools and frameworks.
                    </p>
                    <p className="mb-6">
                        Curious, detail-oriented, and highly collaborative, I enjoy solving complex problems in dynamic environments.
                    </p>
                    <p className="mb-3">
                        Lets make something fun together! <span className="text-yellow-400">🚀</span>
                    </p>
                    <div className="flex flex-wrap space-x-4">
                        <a href="mailto:nil171823@gmail.com" target="_blank" rel="noopener noreferrer">
                            <IoIosMail className="text-[--color-border] hover:text-[--color-light-blue] transition-colors" size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/patel-nilkumar/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-[--color-border] hover:text-[--color-light-blue] transition-colors" size={18} />
                        </a>
                        <a href="https://github.com/Ncoder23" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-[--color-border] hover:text-[--color-light-blue] transition-colors" size={18} />
                        </a>
                        <a href="https://www.instagram.com/nil_patel.23/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-[--color-border] hover:text-[--color-light-blue] transition-colors" size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;