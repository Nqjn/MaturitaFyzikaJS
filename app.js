// app.js
let aktualniOtazka = null;

function generujPolicka() {
    const cislo = document.getElementById('questionPicker').value;
    const kontejner = document.getElementById('dynamicInputs');
    const nadpis = document.getElementById('displayTopic');
    
    // Vyčištění
    kontejner.innerHTML = "";
    document.getElementById('resultMsg').innerText = "";

    // MATURITA_DATA pochází ze souboru data.js
    if (MATURITA_DATA[cislo]) {
        aktualniOtazka = MATURITA_DATA[cislo];
        nadpis.innerText = `Téma: ${aktualniOtazka.question}`;

        // Pro každý podbod vytvoříme input
        aktualniOtazka.section.forEach((bod, i) => {
            const skupina = document.createElement('div');
            skupina.className = "input-group";
            skupina.innerHTML = `
                <label>Bod ${i + 1}:</label>
                <input type="text" class="user-answer" placeholder="Doplňte název podbodu...">
                <button class="check-btn" onclick="zkontrolujOdpoved(${i}, this)">Zkontrolovat</button>
            `;
            kontejner.appendChild(skupina);
        });


        document.getElementById('submitBtn').style.display = "block";
    } else {
        alert("Tahle otázka v databázi není!");
    }
}

function zkontrolujOdpovedi() {
    const vstupy = document.querySelectorAll('.user-answer');
    let skore = 0;

    vstupy.forEach((input, index) => {
        const odpoved = input.value.trim().toLowerCase();
        const spravne = aktualniOtazka.section[index].trim().toLowerCase();

        if (odpoved === spravne) {
            input.className = "user-answer correct";
            skore++;
        } else {
            input.className = "user-answer wrong";
            input.value += ` (Správně: ${aktualniOtazka.section[index]})`;
        }
    });

    document.getElementById('resultMsg').innerText = `Hotovo! Uhodl jsi ${skore} z ${vstupy.length}.`;
}

function zkontrolujOdpoved(index, tlacitko) {

    const skupina = tlacitko.parentElement;
    const input = skupina.querySelector('.user-answer');
    const odpoved = input.value.trim().toLowerCase();

    const spravnaOdpoved = aktualniOtazka.section[index].trim().toLowerCase();

    if (odpoved === spravnaOdpoved) {
        input.className = "user-answer correct";
    } else {
        input.className = "user-answer wrong";
        input.value += ` (Správně: ${aktualniOtazka.section[index]})`;
    }


}

function resetujVse() {
    // 1. Najde všechny inputy uvnitř vygenerované sekce
    const inputs = document.querySelectorAll('#dynamicInputs input');
    
    // 2. Projde každý input a vyčistí ho
    inputs.forEach(input => {
        input.value = '';             // Smaže text
        input.classList.remove('correct', 'wrong'); // Odstraní barvy (zelená/červená)
    });

    // 3. Resetuje zprávu o výsledku
    document.getElementById('resultMsg').innerText = '';

    // Volitelné: ponechá tlačítko "Odeslat" viditelné, 
    // protože políčka zůstala rozbalená.
    document.getElementById('submitBtn').style.display = 'block';
}