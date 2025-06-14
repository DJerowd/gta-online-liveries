// DADOS DOS VEÍCULOS
const newVehiclesData = {
    "Banshee GTS": {
        "Liveries": [
            { "id": 5, "name": "Bravado Stripes" }
        ]
    },
    "Coquette D5": {
        "Liveries": [
            { "id": 7, "name": "Flames" }
        ]
    },
    "DH-7 Iron Mule": {
        "Liveries": [
            { "id": 2, "name": "Merryweather Security" }
        ]
    },
    "Terrorbyte": {
        "Liveries": [
            { "id": 2, "name": "FIB" }
        ]
    },
    "Titan 250 D": {
        "Liveries": [
            { "id": 7, "name": "Pisswasser" },
            { "id": 11, "name": "Eberhard" }
        ]
    },
    "Tropos Rallye": {
        "Liveries": [
            { "id": 4, "name": "Original Engines" },
            { "id": 5, "name": "Tech Punk Gasta" },
            { "id": 6, "name": "Tamarro Gasta" },
            { "id": 7, "name": "Tricolore Racing" },
            { "id": 8, "name": "Tamarro" },
            { "id": 9, "name": "Tricolore Racing Gasta" },
            { "id": 10, "name": "Arcana" },
            { "id": 11, "name": "Arcana Gasta" },
            { "id": 12, "name": "Tech Punk" },
            { "id": 13, "name": "Shatter" }
        ]
    },
    "Growler": {
        "Liveries": [
            { "id": 17, "name": "Xero Racing" },
            { "id": 18, "name": "Faded Bastion Racing" },
            { "id": 19, "name": "Modular Racing" },
            { "id": 20, "name": "Hardcore" },
            { "id": 21, "name": "Hardcore Half n' Half" },
            { "id": 22, "name": "Bastion Racing" },
            { "id": 23, "name": "Chromophonic Racing" },
            { "id": 24, "name": "Tamarro Racing" },
            { "id": 25, "name": "Redwood Racing" },
            { "id": 26, "name": "Globe Oil Racing" }
        ]
    }
};

// CRIAR HTML DE VEÍCULOS
function createVehicleHTML(vehicleName, liveries) {
    return `
        <div class="list">
            <div>
            <h3>${vehicleName}</h3>
            <table>
                <tr>
                    <td id="index"></td>
                    <td id="id">ID</td>
                    <td id="livery">NOME DA ESTAMPA</td>
                </tr>

                ${liveries.map((livery, index) => `
                <tr>
                    <td id="index">${index + 1}</td>
                    <td id="id">${livery.id}</td>
                    <td id="livery">${livery.name}</td>
                </tr>
                `).join('')}
            </table>
            </div>
        </div>
    `;
}

// RENDERIZAR VEÍCULOS
function renderVehicles() {
    const newVehiclesList = document.getElementById('newVehiclesList');
    
    const vehiclesHTML = Object.entries(newVehiclesData).map(([vehicleName, data]) => {
        return createVehicleHTML(vehicleName, data.Liveries);
    }).join('');

    newVehiclesList.innerHTML = vehiclesHTML;
}

// RENDERIZAR QUANDO A PÁGINA CARREGAR
window.onload = renderVehicles;