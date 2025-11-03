"use client";

import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: "/maxoghelenesbryllup/", label: "Hjem" },
        {
            to: "/maxoghelenesbryllup/planen-for-dagen",
            label: "Planen for dagen",
        },
        { to: "/maxoghelenesbryllup/om-stedet", label: "Om stedet" },
        { to: "/maxoghelenesbryllup/om-oss", label: "Om oss" },
        { to: "/maxoghelenesbryllup/ønskeliste", label: "Ønskeliste" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border/40">
                <nav className="container mx-auto flex items-center justify-center py-6 px-6">
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden absolute right-6">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                            aria-label="Åpne meny"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/70 z-[9998] md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="fixed top-0 right-0 bottom-0 w-64 bg-white z-[9999] shadow-2xl md:hidden">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-b bg-white">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Meny
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                                    aria-label="Lukk meny"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-900"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-6 p-6 bg-white">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className="text-base tracking-wider uppercase text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
            <br />
        </>
    );
}
