'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NAV_LINKS } from '@/shared/config/content';

export const Header = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const navRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for Active Section
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        NAV_LINKS.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        const nextTheme = isDark ? 'light' : 'dark';

        // Explosion Effect
        const circle = document.createElement('div');
        circle.className = 'theme-explosion';

        // Target color based on next theme
        const color = nextTheme === 'dark' ? '#0F172A' : '#FAFAF9';
        circle.style.backgroundColor = color;

        // Position
        const x = e.clientX;
        const y = e.clientY;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        // Size (needs to cover the whole screen)
        const size = Math.max(window.innerWidth, window.innerHeight) * 2.5;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.marginLeft = `-${size / 2}px`;
        circle.style.marginTop = `-${size / 2}px`;

        document.body.appendChild(circle);

        const tl = gsap.timeline();

        tl.to(circle, {
            scale: 1,
            duration: 1,
            ease: 'power4.inOut',
            onStart: () => {
                // Set theme halfway through to ensure glitch-free transition
                gsap.delayedCall(0.5, () => setTheme(nextTheme));
            },
            onComplete: () => {
                gsap.to(circle, {
                    opacity: 0,
                    duration: 0.8,
                    onComplete: () => circle.remove()
                });
            }
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useGSAP(() => {
        if (isMenuOpen) {
            gsap.to('.mobile-menu-item', {
                opacity: 1,
                y: 0,
                x: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.3
            });
        }
    }, { dependencies: [isMenuOpen], scope: navRef });

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? 'glass-nav-scrolled py-0' : 'glass-nav py-2'}`} ref={navRef}>
            <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${hasScrolled ? 'h-16' : 'h-20'}`}>
                <Link href="/" className="flex items-center gap-2 relative z-[10001]">
                    <span className="font-display text-3xl font-bold tracking-tight text-stone-900 dark:text-slate-100 transition-none">Lumière</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide uppercase transition-none">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.href}
                            className={`hover:text-primary transition-all relative ${activeSection === link.href ? 'text-primary' : ''}`}
                            href={link.href}
                        >
                            {link.label}
                            {activeSection === link.href && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        className="p-2.5 hover:bg-stone-200 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center justify-center cursor-pointer relative z-[10001]"
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        type="button"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5" strokeWidth={1.5} />
                        ) : (
                            <Moon className="w-5 h-5" strokeWidth={1.5} />
                        )}
                    </button>

                    <Link
                        className="hidden sm:block bg-accent-light dark:bg-accent-dark text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                        href="#pricing"
                    >
                        Get Started
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2.5 hover:bg-stone-200 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center justify-center cursor-pointer relative z-[10001]"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`
                fixed inset-0 top-0 bg-background-light dark:bg-background-dark z-40 md:hidden transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] h-screen
                ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            `}>
                <div className="flex flex-col items-center justify-center h-full p-8 gap-8 text-4xl font-display font-medium">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={toggleMenu}
                            className={`mobile-menu-item hover:text-primary transition-colors opacity-0 translate-y-4 ${activeSection === link.href ? 'text-primary' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#pricing"
                        onClick={toggleMenu}
                        className="mobile-menu-item mt-4 bg-primary text-white px-12 py-6 rounded-full text-center text-xl font-bold opacity-0 translate-y-4"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

