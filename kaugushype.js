const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

function kuvaOpilasteTulemused() {
    const opilasedList = document.getElementById("opilased-list");
    opilasedList.innerHTML = "";

    opilased.forEach((opilane) => {
        const opilaneDiv = document.createElement("div");
        const keskmineTulemus = (opilane.tulemused.reduce((a, b) => a + b, 0) / opilane.tulemused.length).toFixed(2);

        opilaneDiv.innerHTML = `<strong>Nimi:</strong> ${opilane.nimi}<br>`;
        opilaneDiv.innerHTML += `<strong>Tulemused:</strong> ${opilane.tulemused.join(", ")}<br>`;
        opilaneDiv.innerHTML += `<strong>Parem tulemus:</strong> ${Math.max(...opilane.tulemused)}<br>`;
        opilaneDiv.innerHTML += `<strong>Keskmine tulemus:</strong> ${keskmineTulemus}<br>`;

        const tulemusInput = document.createElement("input");
        tulemusInput.type = "number";
        tulemusInput.placeholder = "Lisa uus tulemus";
        const lisaTulemusNupp = document.createElement("button");
        lisaTulemusNupp.textContent = "Lisa tulemus";
        lisaTulemusNupp.addEventListener("click", () => {
            const uusTulemus = parseFloat(tulemusInput.value);
            if (!isNaN(uusTulemus)) {
                opilane.tulemused.push(uusTulemus);
                kuvaOpilasteTulemused();
            }
        });

        opilaneDiv.appendChild(tulemusInput);
        opilaneDiv.appendChild(lisaTulemusNupp);

        opilasedList.appendChild(opilaneDiv);
    });
}

kuvaOpilasteTulemused();
