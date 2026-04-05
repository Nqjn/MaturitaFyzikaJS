const MATURITA_DATA = {
    "1": {
        "question": "Kinematika",
        "section": [
            "Hmotný bod",
            "Poloha hmotného bodu",
            "Trajektorie vs Dráha",
            "Rychlost",
            "Klasifikace pohybů",
            "Rovnoměrně přímočarý pohyb",
            "Zrychlení",
            "Pohyby se zrychlením",
            "Skládání rychlostí",
            "Pohyb po kružnici"
        ]
    },
    "2": {
        "question": "Dynamika",
        "section": [
            "Síla",
            "Účinky síly",
            "Skládání a rozklad sil",
            "1. NZ",
            "2. NZ",
            "3. NZ",
            "Tření",
            "Dostředivá síla",
            "Inerciální a neinerciální soustava",
            "Mechanická práce",
            "Mechanická energie",
            "Výkon a Účinnost"
        ]
    },
    "3": {
        "question": "Zákony zachování energie v různých oblastech fyziky",
        "section": [
            "Práce vs Energie",
            "Zákon zachování mechanické energie",
            "Vnitřní energie",
            "Bernoulliho rovnice",
            "1. termodynamický zákon",
            "Kalorimetrická rovnice",
            "Energie mechanického oscilátoru",
            "Energie elektromagnetického oscilátoru",
            "Fotoefekt",
            "Comptonův jev"
        ]
    },
    "4": {
        "question": "Mechanika tuhého tělesa",
        "section": [
            "Tuhé těleso",
            "Pohyb tuhého tělesa",
            "Moment síly",
            "Momentová věta",
            "Skládání sil",
            "Dvojice sil",
            "Těžiště",
            "Rovnovážná poloha",
            "Kinetická energie"
        ]
    },
    "5": {
        "question": "Mechanika kapalin a plynů",
        "section": [
            "Vlastnosti Tekutin",
            "Tlak",
            "Pascalův zákon",
            "Hydrostatický tlak",
            "Tlak vzduchu",
            "Archimédův zákon",
            "Proudění",
            "Rovnice kontinuity",
            "Bernoulliho rovnice",
            "Proudění reálné kapaliny",
            "Odporová síla"
        ]
    },
    "6": {
        "question": "Gravitační pole a Keplerovy zákony",
        "section": [
            "Newtonův gravitační zákon",
            "Typy polí",
            "Gravitační a tíhové zrychlení",
            "Tíha",
            "Vrhy",
            "Keplerovy zákony"
        ]
    },
    "7": {
        "question": "Elektrické pole",
        "section": [
            "Elektrický náboj",
            "Coulombův zákon",
            "Intenzita elektrického pole",
            "Typy polí",
            "Práce",
            "Potenciál a Napětí",
            "Náboj na vodivých tělesech",
            "Elektrostatická indukce",
            "Atomová polarizace",
            "Kapacita vodiče",
            "Kondenzátor"
        ]
    },
    "8": {
        "question": "Struktura a vlastnosti plynů",
        "section": [
            "Ideální plyn",
            "Střední kvadratická rychlost",
            "Rovnice tlaku",
            "Stavová změna",
            "Stavová rovnice",
            "IZO děje",
            "Kruhové děje",
            "2. Termodynamický zákon",
            "Tepelné motory"
        ]
    },
    "9": {
        "question": "Struktura a vlastnosti pevných látek a kapalin",
        "section": [
            "Dělení pevných látek",
            "Krystalická mřížka",
            "Deformace",
            "Hookův zákon",
            "Teplotní roztažnost",
            "Povrchová vrstva kapalin",
            "Povrchová energie",
            "Povrchové napětí",
            "Kapilarita",
            "Objemová roztažnost",
            "Anomálie vody"
        ]
    },
    "10": {
        "question": "Skupenské přeměny látek",
        "section": [
            "Typy skupenství",
            "Fázový diagram",
            "Tání a Tuhnutí",
            "Vypařování a Kondenzace",
            "Vypařování a var",
            "Sublimace a Desublimace",
            "Sytá pára",
            "Vlhkost ovzduší"
        ]
    },
    "11": {
        "question": "Elektrický proud v látkách, zákony stejnosměrného elektrického proudu",
        "section": [
            "Proud",
            "Zdroj",
            "Voltampérová charakteristika",
            "Ohmův zákon pro část obvodu",
            "Odpor",
            "Spojování rezistorů",
            "Ohmův zákon pro uzavřený obvod",
            "Zátěžová charakteristika",
            "Ochrana proti zkratu",
            "Práce",
            "Kirchhoffovy zákony"
        ]
    },
    "12": {
        "question": "Vedení elektrického proudu v polovodičích",
        "section": [
            "Typy polovodičů",
            "Vlastní vodivost",
            "Příměsové polovodiče",
            "PN přechod",
            "Dioda",
            "Tranzistor",
            "Převodní charakteristika",
            "Integrované obvody"
        ]
    },
    "13": {
        "question": "Vedení elektrického proudu v kapalinách, plynech a ve vakuu",
        "section": [
            "Elektrolýza",
            "Faradayovy zákony",
            "VA charakteristika v kapalinách",
            "Galvanický článek",
            "Ionizace plynu",
            "VA charakteristika v plynech",
            "Výboje za atmosférického tlaku",
            "Výboje za sníženého tlaku",
            "Katodové a kanálové záření"
        ]
    },
    "14": {
        "question": "Stacionární magnetické pole",
        "section": [
            "Magnetické pole",
            "Vodič s proudem",
            "Magnetická síla a indukce",
            "Rovnoběžné vodiče s proudem",
            "Magnetické pole cívky",
            "Nabitá částice v magnetickém poli",
            "Lorentzova síla",
            "Magnetické vlastnosti látek",
            "Hysterezní smyčka",
            "Hallův jev"
        ]
    },
    "15": {
        "question": "Nestacionární magnetické pole",
        "section": [
            "Elektromagnetická indukce",
            "Magnetický indukční tok",
            "Závit v magnetickém poli",
            "Indukovaný proud",
            "Vířivé proudy",
            "Vlastní indukce",
            "Přechodný děj",
            "Energie magnetického pole cívky"
        ]
    },
    "16": {
        "question": "Kmitavý pohyb",
        "section": [
            "Kmitavý pohyb",
            "Harmonické kmitání",
            "Rychlost a zrychlení",
            "Fáze kmitavého pohybu",
            "Skládání kmitání",
            "Dynamika kmitavého pohybu",
            "Kyvadlo a pružinový oscilátor",
            "Vlastní a nucené kmitání",
            "Rezonance"
        ]
    },
    "17": {
        "question": "Střídavý proud",
        "section": [
            "Střídavý proud",
            "Obvod s odporem",
            "Obvod s indukčností",
            "Obvod s kapacitou",
            "RLC obvod v sérii",
            "Výkon"
        ]
    },
    "18": {
        "question": "Střídavý proud v energetice",
        "section": [
            "Princip vzniku",
            "Alternátor",
            "Trojfázová soustava",
            "Zapojení spotřebičů většího výkonu",
            "Elektromotor",
            "Transformátor",
            "Přenos energie",
            "Typy elektráren"
        ]
    },
    "19": {
        "question": "Vlnění",
        "section": [
            "Vznik a druhy",
            "Rovnice postupné vlny",
            "Interference",
            "Stojaté vlnění",
            "Chvění mechanických soustav",
            "Huygensův princip",
            "Odraz",
            "Lom",
            "Ohyb",
            "Zvuk",
            "Vlastnosti zvuku",
            "Ultrazvuk",
            "Infrazvuk"
        ]
    },
    "20": {
        "question": "Optické zobrazení",
        "section": [
            "Světlo",
            "Odraz a lom",
            "Disperze",
            "Zobrazení zrcadly",
            "Zobrazení čočkami",
            "Subjektivní zobrazovací přístroje",
            "Objektivní zobrazovací přístroje"
        ]
    },
        "21": {
        "question": "Vlnové vlastnosti světla",
        "section": [
            "Interference",
            "Interference na tenké vrstvě",
            "Ohyb",
            "Difrakce na mřížce",
            "Polarizace světla"
        ]
    },
    "22": {
        "question": "Elektromagnetické záření a jeho energie",
        "section": [
            "Elektromagnetické spektrum",
            "Tepelné záření",
            "Luminiscence",
            "RTG",
            "Spektra látek",
            "Záření černého tělesa"
        ]
    },
    "23": {
        "question": "Speciální teorie relativity",
        "section": [
            "Základní princip",
            "Relativnost současnosti",
            "Dilatace času",
            "Kontrakce délek",
            "Skládání rychlostí",
            "Relativistická hmotnost a hybnost",
            "Vztah energie a hmotnosti"
        ]
    },
    "24": {
        "question": "Základní pojmy kvantové fyziky",
        "section": [
            "Záření černého tělesa",
            "Fotoefekt",
            "Comptonův jev",
            "Světelný dualismus",
            "De Broglieho vlny",
            "Význam vlnové funkce"
        ]
    },
    "25": {
        "question": "Atomistika",
        "section": [
            "Struktura a modely atomu",
            "Spektrum atomu vodíku",
            "Energie stavů",
            "Kvantová čísla a Pauliho vylučovací princip",
            "Lasery",
            "Radioaktivita",
            "Vazebná energie jádra",
            "Jaderné reakce",
            "Jaderný reaktor"
        ]
    }
    
    
}