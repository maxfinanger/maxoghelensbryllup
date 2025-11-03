const HomePage = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <div className="w-full mx-auto text-center space-y-16">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-serif text-foreground">
                        Max & Helene
                    </h1>
                    <p className="text-2xl text-primary">10. juli 2027</p>
                </div>

                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                    <img
                        src="https://maxfinanger.github.io/maxoghelenesbryllup/images/forside.jpeg"
                        alt="Max og Helene"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Vi gifter oss i Fagerborg kirke kl. 14:30, og feirer
                        videre med middag og fest på Strand Restaurant ved
                        Oslofjorden.
                    </p>
                    <p>
                        En dag fylt med kjærlighet, latter og gode minner – og
                        vi håper du er med oss!
                    </p>
                </div>

                <div className="bg-secondary/20 rounded-lg p-10 text-base text-center">
                    <p className="mb-3">
                        <strong>Vielsen:</strong> Fagerborg kirke, kl. 14:30
                    </p>
                    <p>
                        <strong>Festen:</strong> Strand Restaurant, fra ca. kl.
                        16:30 – 03:00
                    </p>
                </div>

                <p className="text-sm text-muted-foreground">
                    Mer informasjon finner du i menyen ovenfor
                </p>
            </div>
        </div>
    );
};

export default HomePage;
