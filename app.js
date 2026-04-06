let aktualniOtazka = null;

/**
 * Vygeneruje test. Pokud dostane parametr 'dalsi', zvýší číslo v inputu o 1.
 */
function generujPolicka(parametr = {}) {
    window.scrollTo(0,0);
    const picker = document.getElementById('questionPicker');
    
    // Pokud chceme další otázku, zvýšíme hodnotu v inputu
    if (parametr.dalsi === true) {
        picker.value = parseInt(picker.value) + 1;
    }

    if (parametr.prev) {
        picker.value = parseInt(picker.value) - 1;
    }


    const cislo = picker.value;
    const kontejner = document.getElementById('dynamicInputs');
    const nadpis = document.getElementById('displayTopic');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const prevBtn = document.getElementById('prevQuestionBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    kontejner.innerHTML = "";
    document.getElementById('resultMsg').innerText = "";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";

    if (typeof MATURITA_DATA !== 'undefined' && MATURITA_DATA[cislo]) {
        aktualniOtazka = MATURITA_DATA[cislo];
        nadpis.innerText = `Téma: ${aktualniOtazka.question}`;

        aktualniOtazka.section.forEach((bod, i) => {
            const skupina = document.createElement('div');
            skupina.className = "input-group";
            
            const label = document.createElement('label');
            label.innerText = `Bod ${i + 1}:`;

            const input = document.createElement('input');
            input.type = "text";
            input.className = "user-answer";
            input.placeholder = "Doplňte název podbodu...";

            const feedback = document.createElement('div');
            feedback.className = "feedback-msg";
            feedback.style.color = "#dc3545";
            feedback.style.fontSize = "14px";
            feedback.style.marginTop = "5px";
            feedback.style.fontWeight = "600";
            feedback.style.display = "none";

            const vymazPole = function() {
                input.className = "user-answer";
                feedback.style.display = "none";
                feedback.innerText = "";
            };

            input.addEventListener('focus', vymazPole);
            input.addEventListener('click', vymazPole);

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    zkontrolujOdpoved(i, input, feedback);
                }
            });

            const tlacitko = document.createElement('button');
            tlacitko.className = "check-btn";
            tlacitko.innerText = "Zkontrolovat";
            tlacitko.style.marginTop = "5px";
            tlacitko.onclick = () => zkontrolujOdpoved(i, input, feedback);

            skupina.appendChild(label);
            skupina.appendChild(input);
            skupina.appendChild(feedback);
            skupina.appendChild(tlacitko);
            kontejner.appendChild(skupina);
        });

        submitBtn.style.display = "block";

    } else {
        alert("Tahle otázka v databázi není!");
    }
}

function zkontrolujOdpoved(index, input, feedback) {
    if (!aktualniOtazka) return;

    const zadanaOdpoved = input.value.trim().toLowerCase();
    const spravnaOdpoved = aktualniOtazka.section[index].trim().toLowerCase();

    if (zadanaOdpoved === spravnaOdpoved) {
        input.className = "user-answer correct";
        feedback.style.display = "none";
    } else {
        input.className = "user-answer wrong";
        feedback.innerText = `Správně: ${aktualniOtazka.section[index]}`;
        feedback.style.display = "block";
    }
    
    // Zobrazíme tlačítko pro další otázku
    const cislo = parseInt(document.getElementById('questionPicker').value);

    document.getElementById('nextQuestionBtn').style.display = "block";
    document.getElementById('prevQuestionBtn').style.display = cislo > 1 ? "inline-block" : "none";

}

function zkontrolujOdpovedi() {
    const vstupy = document.querySelectorAll('.user-answer');
    const feedbacky = document.querySelectorAll('.feedback-msg');
    let skore = 0;

    vstupy.forEach((input, index) => {
        const odpoved = input.value.trim().toLowerCase();
        const spravne = aktualniOtazka.section[index].trim().toLowerCase();
        const feedback = feedbacky[index];

        if (odpoved === spravne) {
            input.className = "user-answer correct";
            feedback.style.display = "none";
            skore++;
        } else {
            input.className = "user-answer wrong";
            feedback.innerText = `Správně: ${aktualniOtazka.section[index]}`;
            feedback.style.display = "block";
        }
    });
    cislo = parseInt(document.getElementById('questionPicker').value);

    document.getElementById('resultMsg').innerText = `Hotovo! Úspěšnost: ${skore} z ${vstupy.length}.`;
    document.getElementById('nextQuestionBtn').style.display = "block";
    document.getElementById('prevQuestionBtn').style.display = cislo > 1 ? "inline-block" : "none";
}

function resetujVse() {
    const inputs = document.querySelectorAll('.user-answer');
    const feedbacky = document.querySelectorAll('.feedback-msg');
    inputs.forEach(input => {
        input.value = '';
        input.className = "user-answer";
    });
    feedbacky.forEach(f => {
        f.style.display = "none";
        f.innerText = "";
    });
    document.getElementById('resultMsg').innerText = '';
    document.getElementById('nextQuestionBtn').style.display = "none";
    document.getElementById('prevQuestionBtn').style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const qPicker = document.getElementById('questionPicker');
    if (qPicker) {
        qPicker.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                generujPolicka();
            }
        });
    }
});