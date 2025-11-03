const AboutUsPage = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-3xl font-light text-center mb-12 text-foreground">
                Om oss
            </h1>

            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                        <img
                            src="/happy-couple-portrait-outdoor-natural-light.jpg"
                            alt="Max og Helene"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Vi møttes første gang i 2022, og siden den dagen har
                        livet vårt vært fylt med eventyr, latter og kjærlighet.
                        Etter mange fine år sammen, er vi klare til å ta det
                        neste store steget i livet vårt.
                    </p>
                    <p>
                        Vi gleder oss enormt til å dele denne spesielle dagen
                        med våre nærmeste venner og familie. Det betyr alt for
                        oss at dere er med oss når vi sier ja til hverandre.
                    </p>
                    <p className="text-center text-sm text-muted-foreground/80 pt-8">
                        Med kjærlighet,
                        <br />
                        Max & Helene
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
