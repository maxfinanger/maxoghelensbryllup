const LocationPage = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-3xl font-serif text-center mb-12 text-foreground">
                Om stedet
            </h1>
            <br />
            <div
                className="w-full mx-auto space-y-12 text-muted-foreground p-8
            "
            >
                <p>
                    Etter vielsen i kirken fortsetter feiringen på Strand
                    Restaurant. Stedet ligger ved Oslofjorden i Bærum, med
                    adresse Strandalleen 48, 1368 Stabekk. Det er ca. 15
                    minutter fra Oslo sentrum med bil og 3 minutter fra Lysaker.
                </p>
                <p>
                    Strand Restaurant har over 15 års erfaring med å arrangere
                    bryllup. Lokalet har lyse rom over flere etasjer, inkludert
                    en festsal som rommer opptil 150 gjester ved runde bord,
                    eller over 200 når hele etasjen åpnes. Det er også en stor,
                    privat terrasse mot sjøen.
                </p>
                <p>
                    For å komme dit med bil: Kjør fra Oslo sentrum via E18 mot
                    Drammen, ta avkjøring mot Lysaker og følg skiltene til
                    Stabekk. Det er gratis parkering med rikelig plass. Med
                    offentlig transport: Ta buss – sjekk ruter på Moovit-appen.
                    Stedet har en privat gjestebrygge for ankomst med båt.
                </p>
                <p>
                    Maten lages på stedets eget kjøkken. Vi har valgt
                    skreddersydde bryllupspakker, inkludert signatur-tapas med
                    klassiske og moderne smaker. Det serveres også drikke til
                    måltidet.
                </p>
                <p>
                    Fasiliteter inkluderer lydanlegg, mikrofoner, projektor,
                    musikkanlegg og piano. Lokalet er HC-tilpasset med
                    tilgjengelig inngang.
                </p>
                <div className="text-center mt-12">
                    <a
                        href="https://www.strandrestaurant.no/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline transition-colors duration-200"
                    >
                        Besøk Strand Restaurants nettside for mer informasjon
                    </a>
                </div>
                <br />
            </div>
        </div>
    );
};

export default LocationPage;
