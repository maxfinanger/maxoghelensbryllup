export default function AboutUsPage() {
    return (
        <div className="container mx-auto px-6 py-16 flex items-center justify-center min-h-[calc(100vh-200px)] text-center">
            <div className="w-full">
                <h1 className="text-3xl font-light text-center mb-12 text-foreground">
                    Om oss
                </h1>

                <div className="mx-auto">
                    <div className="mb-12">
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                            <img
                                src="https://maxfinanger.github.io/maxoghelenesbryllup/images/max-og-helene.jpeg"
                                alt="Max og Helene"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                        <p>
                            Vi møttes første gang i 2022, og siden den dagen har
                            livet vårt vært fylt med eventyr, latter og
                            kjærlighet. Etter mange fine år sammen, er vi klare
                            til å ta det neste store steget i livet vårt.
                        </p>
                        <p>Vi gleder oss enormt til å dele denne spesielle</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
