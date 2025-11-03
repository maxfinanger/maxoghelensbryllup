"use client";

import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border/40">
            <nav className="container mx-auto flex items-center justify-center py-6 px-6">
                <div className="flex items-center gap-12">
                    <Link
                        to="/"
                        className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        Hjem
                    </Link>
                    <Link
                        to="/planen-for-dagen"
                        className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        Planen for dagen
                    </Link>
                    <Link
                        to="/om-stedet"
                        className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        Om stedet
                    </Link>
                    <Link
                        to="/om-oss"
                        className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        Om oss
                    </Link>
                    <Link
                        to="/ønskeliste"
                        className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        Ønskeliste
                    </Link>
                </div>
            </nav>
        </header>
    );
}
