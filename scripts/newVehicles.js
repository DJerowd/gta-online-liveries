// DADOS DOS VEÍCULOS
const newVehiclesData = {
    "Everon RS": {
        "Liveries": [
            { "id": 11, "name": "Karin" }
        ]
    },
    "Hardy": {
        "Liveries": [
            { "id": 10, "name": "Stance Andreas" }
        ]
    },
    "Minimus": {
        "Liveries": [
            { "id": 11, "name": "Rust" }
        ]
    },
    "Rapid GT X": {
        "Liveries": [
            { "id": 8, "name": "Dewbauchee" }
        ]
    },
    "Sentinel GTS": {
        "Liveries": [
            { "id": 7, "name": "Sanded" },
            { "id": 12, "name": "QuickiePharm" },
            { "id": 13, "name": "GTS Red Stripes" }
        ]
    },
    "Suzume": {
        "Liveries": [
            { "id": 10, "name": "Cyber" },
            { "id": 11, "name": "Cyber Graphics" }
        ]
    },
    "Tampa GT": {
        "Liveries": [
            { "id": 10, "name": "Los Santos Custom" }
        ]
    },
    "Woodlander": {
        "Liveries": [
            { "id": 9, "name": "Karin Performance Monochrome" }
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