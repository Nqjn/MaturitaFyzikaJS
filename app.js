let aktualniOtazka = null;

function generujPolicka() {
    const cislo = document.getElementById('questionPicker').value;
    const kontejner = document.getElementById('dynamicInputs');
    const nadpis = document.getElementById('displayTopic');
    
    // Vyčištění plochy
    kontejner.innerHTML = "";
    document.getElementById('resultMsg').innerText = "";

    if (MATURITA_DATA[cislo]) {
        aktualniOtazka = MATURITA_DATA[cislo];
        nadpis.innerText = `Téma: ${aktualniOtazka.question}`;

        // Pro každý podbod vytvoříme input
        aktualniOtazka.section.forEach((bod, i) => {
            const skupina = document.createElement('div');
            skupina.className = "input-group";
            
            // Vytvoříme elementy ručně, abychom na ně mohli snadno navázat eventy
            const label = document.createElement('label');
            label.innerText = `Bod ${i + 1}:`;

            const input = document.createElement('input');
            input.type = "text";
            input.className = "user-answer";
            input.placeholder = "Doplňte název podbodu...";

            // --- PŘIDÁNÍ LOGIKY PRO ENTER ---
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Zabrání odeslání celého formuláře/stránky
                    zkontrolujOdpoved(i, input); // Zavolá kontrolu jen pro tento input
                }
            });

            const tlacitko = document.createElement('button');
            tlacitko.className = "check-btn";
            tlacitko.innerText = "Zkontrolovat";
            tlacitko.style.marginTop = "5px";
            tlacitko.onclick = () => zkontrolujOdpoved(i, input);

            // Poskládání do skupiny
            skupina.appendChild(label);
            skupina.appendChild(input);
            skupina.appendChild(tlacitko);
            kontejner.appendChild(skupina);
        });

        document.getElementById('submitBtn').style.display = "block";
    } else {
        alert("Tahle otázka v databázi není!");
    }
}

// Funkce pro kontrolu jednoho konkrétního pole
function zkontrolujOdpoved(index, input) {
    if (!aktualniOtazka) return;

    const zadanaOdpoved = input.value.trim().toLowerCase();
    const spravnaOdpoved = aktualniOtazka.section[index].trim().toLowerCase();

    if (zadanaOdpoved === spravnaOdpoved) {
        input.className = "user-answer correct";
    } else {
        input.className = "user-answer wrong";
        // Pokud je odpověď špatně, přidáme správnou odpověď k textu (pokud tam už není)
        if (!input.value.includes("(Správně:")) {
            input.value += ` (Správně: ${aktualniOtazka.section[index]})`;
        }
    }
}

// Funkce pro hromadnou kontrolu (tlačítko dole)
function zkontrolujOdpovedi() {
    const vstupy = document.querySelectorAll('.user-answer');
    let skore = 0;

    vstupy.forEach((input, index) => {
        const odpoved = input.value.trim().toLowerCase();
        const spravne = aktualniOtazka.section[index].trim().toLowerCase();

        // Pokud už pole obsahuje "(Správně:", očistíme ho pro kontrolu
        const cistaOdpoved = odpoved.split(' (')[0];

        if (cistaOdpoved === spravne) {
            input.className = "user-answer correct";
            skore++;
        } else {
            input.className = "user-answer wrong";
            if (!input.value.includes("(Správně:")) {
                input.value += ` (Správně: ${aktualniOtazka.section[index]})`;
            }
        }
    });

    document.getElementById('resultMsg').innerText = `Hotovo! Uhodl jsi ${skore} z ${vstupy.length}.`;
}

function resetujVse() {
    const inputs = document.querySelectorAll('.user-answer');
    inputs.forEach(input => {
        input.value = '';
        input.className = "user-answer"; // Resetuje barvy na základní
    });
    document.getElementById('resultMsg').innerText = '';
}

// Sleduje kliknutí (focus) pro vymazání pole a barev
document.getElementById('dynamicInputs').addEventListener('focusin', (e) => {
    if (e.target.tagName === 'INPUT') {
        e.target.value = ''; 
        e.target.className = "user-answer"; // Vrátí původní styl bez barev
    }
});