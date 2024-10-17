<h1 align='center'>
  Eksamen Kartbaserte Websystemer Våren 2024
</h1>

https://kristiania-kws2100-2024.github.io/kws2100-exam-elin-lisa-eline/

### Deltakernummer : 9, 12 og 21

# Miljøbevisst Reise Kart

- Målet vårt med nettsiden var å kunne gjøre det enkelt for brukeren å kollektiv transport enkelte steder i Norge, ved bruk av togstasjoner og live kollektivtransport. Vi har brukt en god blanding av bootstrap og vanlig css for stylingen av siden, og holdt oss til et jordfarget tema.

# Informasjon for hva man kan gjøre på Kartet

1. Finne ut hvor du er på kartet med å trykke på "Her er jeg" knappen øverst i venstre i navigasjonsbaren.
2. Finne togstasjoner med info om hver ved å trykke på punktene når du velger å filtrere etter "Jernbanestasjoner".
3. Kunne filtrere hva du ønsker å se som: live busser eller tog, samt Jernbanestasjoner. Du kan også velge alle på en gang.
4. Velge mellom forskjellige display av karttype, velg mellom det klassiske Open Street Map, Stadia eller Stadia Dark
5. Vise kommunegrenser på de forskjellige karttypene (hover der man kan se hvilken kommune man er i, i asiden)
6. Se live oppdatering på transport
7. Det er også mulig å velge mellom 3 tab's i asiden. Dette aside filteret er også mulig å kunne åpne og lukke for å få bedre oversikt over kartet.

## Kartet skal være interaktivt der man samhandler med et sidepanel og navigasjonsmeny

- [x] Liste over type filtere du ønsker å se på kartet
- [x] Zome til der man er
- [x] Skjule sidepanelet

## Kombinere flere tile layers / bakgrunnskart

- [x] Vector tile layer
- [x] Forskjellige kartlag der man kan velge mellom de forskjellige

## Datasett

- [x] EnTur
- [x] GraphQL
- [x] Togstasjoner
- [x] Kommuner
- [x] Aside med info om togstasjoner når de trykkes på

## Styling

- [x] Farger
- [x] Plassering
- [x] Bootstrap og vanlig CSS

## Refleksjon/ Egne tanker:

- Prøvde å få til informasjon om livedataen i asiden.
- Prøvde å lagre stasjonene, men gikk ikke helt som planlagt.
- Cluster og Opacity. Fungerte heller ikke helt som vi ville.
- Hover på Kommunene fungerer mer optimalt om du velger den før de andre filtrene.
- Vi tenkte vi ville gi oss mens leken var god, slik at det ikke var mange ting som fungerte sånn halvveis.
- Ville heller vise kompetanse på litt av hvert, enn å sitte helt fast på 1 ting vi ikke følte vi mestret.
- Ble veldig fornøyde med layouten på nettsiden, vil si den er veldig brukervennelig og komponenter plasser på en oversiktlig måte.
- Vi ønsker å bli vurdert utifra:

1. At vi har brukt graphql og fått opp livedata
2. Stylingen på siden
3. At vi har en aside med flere av filterene som også fungerer
4. At vi har fått til kommunelayers, informasjon om et layer på en aside
5. De forskjellige type kartene, bare håper du får sett de før den API nøkkelen går ut
6. At filterne våre fungerer på de forskjellige type kartene
7. At man kan åpne og lukke asiden, og at vi har brukt flere tabs for at kartet ikke skal forsvinne bak alt.
8. Variasjon i hvordan vi velger å lage ting, som knapper, checkbox, aside.
9. God kodestruktur med litt variasjon, da det er 3 stk som har jobbet med prosjektet.
10. Selvinnsikt og åpenhet om at alt kanskje ikke ble helt slikt vi ønsket.
11. Gjenbrukbarhet av komponenter. Skal jo tross alt være en miljøbevisst side.
