// src/components/Header.tsx
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const links = [
        { name: 'home', path: '/' },
        { name: 'education', path: '/blog' },
        { name: 'experience', path: '/experience' },
        { name: 'projects', path: '/projects' },

    ];

    return (
        <header className="border-b border-dashed border-[--color-secondary] ">
            <div className="container mx-auto flex items-start mt-10 mb-5">

                <nav className="flex items-start space-x-3 ">
                    {links.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-xs font-medium tracking-wide relative transition-colors duration-200"
                            style={{ color: 'var(--color-links)' }}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[--color-links]"></span>
                            )}
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    );
}

export default Header;
