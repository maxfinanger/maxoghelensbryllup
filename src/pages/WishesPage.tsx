const WishesPage = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-3xl font-light text-center mb-12 text-foreground">
                Ønskeliste
            </h1>

            <div className="max-w-2xl mx-auto space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p className="text-center">
                    Den beste gaven dere kan gi oss er deres tilstedeværelse på
                    vår store dag!
                </p>

                <div className="bg-secondary/40 rounded-lg p-8 md:p-10 text-center">
                    <p className="mb-4">
                        Hvis dere likevel ønsker å gi oss noe, setter vi stor
                        pris på bidrag til vår bryllupsreise.
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                        Mer informasjon om dette kommer senere.
                    </p>
                </div>

                <p className="text-center text-sm text-muted-foreground/80 pt-4">
                    Har dere spørsmål? Ta gjerne kontakt med oss!
                </p>
            </div>
        </div>
    );
};

export default WishesPage;
