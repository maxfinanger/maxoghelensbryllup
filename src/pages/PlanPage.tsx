const PlanPage = () => {
    return (
        <div className="container mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="w-full">
                <h1 className="text-3xl font-light text-center mb-12 text-foreground">
                    Planen for dagen
                </h1>

                <div className="w-full mx-auto space-y-20 text-lg text-muted-foreground leading-relaxed">
                    <div className="text-center">
                        <br />
                        <h2 className="text-2xl font-medium text-foreground mb-4">
                            Vielsen
                        </h2>
                        <p className="mb-3">
                            <strong>Fagerborg kirke</strong>
                            <br />
                            Halfdan Kjerulfs gate 7, 0369 Oslo
                        </p>
                        <p className="text-xl font-medium text-primary">
                            Lørdag 10. juli 2027 kl. 14:30
                        </p>
                    </div>
                    <br />

                    <div className="text-center">
                        <h2 className="text-2xl font-medium text-foreground mb-4">
                            Fest og middag
                        </h2>
                        <p className="mb-3">
                            <strong>Strand Restaurant</strong>
                            <br />
                            Strandalleen 48, 1368 Stabekk
                        </p>
                        <p className="text-xl font-medium text-primary">
                            Fra ca. kl. 16:30 – 03:00
                        </p>
                        <p className="mt-6 text-base">
                            Mingling og aperitiff på terrassen ved sjøen
                            <br />
                            Middag i festsalen
                            <br />
                            Tale, dans og fest ut i de små timer
                        </p>
                    </div>

                    <div className="bg-secondary/30 rounded-lg p-8 text-center text-sm">
                        <p className="mb-2">
                            Vi gleder oss til å feire med dere hele dagen!
                        </p>
                        <p>
                            Det blir transport fra kirken til Strand Restaurant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanPage;
