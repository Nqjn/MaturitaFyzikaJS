// Globální proměnná pro uchování dat aktuálně vybrané otázky
let aktualniOtazka = null;

/**
 * Hlavní funkce pro vygenerování testu podle čísla v inputu
 */
function generujPolicka() {
    const cislo = document.getElementById('questionPicker').value;
    const kontejner = document.getElementById('dynamicInputs');
    const nadpis = document.getElementById('displayTopic');
    const submitBtn = document.getElementById('submitBtn');
    
    // Reset plochy před novým generováním
    kontejner.innerHTML = "";
    document.getElementById('resultMsg').innerText = "";

    // Kontrola, zda otázka existuje v data.js (MATURITA_DATA)
    if (typeof MATURITA_DATA !== 'undefined' && MATURITA_DATA[cislo]) {
        aktualniOtazka = MATURITA_DATA[cislo];
        nadpis.innerText = `Téma: ${aktualniOtazka.question}`;

        // Projdeme všechny podbody v sekci dané otázky
        aktualniOtazka.section.forEach((bod, i) => {
            const skupina = document.createElement('div');
            skupina.className = "input-group";
            
            const label = document.createElement('label');
            label.innerText = `Bod ${i + 1}:`;

            const input = document.createElement('input');
            input.type = "text";
            input.className = "user-answer";
            input.placeholder = "Doplňte název podbodu...";

            // --- LOGIKA PRO MAZÁNÍ PŘI KLIKU/FOCUSU ---
            const vymazPole = function() {
                // Vymaže pole jen pokud už bylo vyhodnoceno (má barvu)
                if (this.classList.contains('correct') || this.classList.contains('wrong')) {
                    this.value = '';
                    this.className = "user-answer";
                }
            };

            input.addEventListener('focus', vymazPole);
            input.addEventListener('click', vymazPole);

            // --- LOGIKA PRO ENTER (VYHODNOTÍ JEN JEDEN) ---
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    zkontrolujOdpoved(i, input);
                }
            });

            // Tlačítko pro kontrolu jednotlivého řádku
            const tlacitko = document.createElement('button');
            tlacitko.className = "check-btn";
            tlacitko.innerText = "Zkontrolovat";
            tlacitko.style.marginTop = "5px";
            tlacitko.onclick = () => zkontrolujOdpoved(i, input);

            // Sestavení prvků do DOMu
            skupina.appendChild(label);
            skupina.appendChild(input);
            skupina.appendChild(tlacitko);
            kontejner.appendChild(skupina);
        });

        // Zobrazíme hlavní tlačítko pro kontrolu všeho
        submitBtn.style.display = "block";
    } else {
        nadpis.innerText = "Vyberte otázku výše";
        submitBtn.style.display = "none";
        alert("Tahle otázka v databázi není!");
    }
}

/**
 * Vyhodnotí jeden konkrétní input
 */
function zkontrolujOdpoved(index, input) {
    if (!aktualniOtazka) return;

    const zadanaOdpoved = input.value.trim().toLowerCase();
    const spravnaOdpoved = aktualniOtazka.section[index].trim().toLowerCase();

    if (zadanaOdpoved === spravnaOdpoved) {
        input.className = "user-answer correct";
    } else {
        input.className = "user-answer wrong";
        // Přidáme nápovědu, pokud tam už není
        if (!input.value.includes("(Správně:")) {
            input.value += ` (Správně: ${aktualniOtazka.section[index]})`;
        }
    }
}

/**
 * Vyhodnotí celý test najednou (tlačítko dole)
 */
function zkontrolujOdpovedi() {
    const vstupy = document.querySelectorAll('.user-answer');
    let skore = 0;

    vstupy.forEach((input, index) => {
        // Očistíme text od případné nápovědy před kontrolou
        const textBezNapovedy = input.value.split(' (')[0];
        const odpoved = textBezNapovedy.trim().toLowerCase();
        const spravne = aktualniOtazka.section[index].trim().toLowerCase();

        if (odpoved === spravne) {
            input.className = "user-answer correct";
            skore++;
        } else {
            input.className = "user-answer wrong";
            if (!input.value.includes("(Správně:")) {
                input.value = textBezNapovedy + ` (Správně: ${aktualniOtazka.section[index]})`;
            }
        }
    });

    document.getElementById('resultMsg').innerText = `Hotovo! Úspěšnost: ${skore} z ${vstupy.length}.`;
}

/**
 * Resetuje vše kromě čísla otázky
 */
function resetujVse() {
    const inputs = document.querySelectorAll('.user-answer');
    inputs.forEach(input => {
        input.value = '';
        input.className = "user-answer";
    });
    document.getElementById('resultMsg').innerText = '';
}

// Počkej, až se načte DOM, a pak navaž Enter na výběr otázky
document.addEventListener('DOMContentLoaded', () => {
    const questionPicker = document.getElementById('questionPicker');

    if (questionPicker) {
        questionPicker.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Zabrání případnému obnovení stránky
                generujPolicka();   // Spustí generování testu
            }
        });
    }
});