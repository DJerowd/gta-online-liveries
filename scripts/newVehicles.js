// DADOS DOS VEÍCULOS
const newVehiclesData = {
    "Everon RS": {
        "Liveries": [
            { "id": 1, "name": " " }
        ]
    },
    "Hardy": {
        "Liveries": [
            { "id": 1, "name": " " }
        ]
    },
    "LSCM Cheetah Classique": {
        "Liveries": [
            { "id": 1, "name": " " }
        ]
    },
    "Minimus": {
        "Liveries": [
            { "id": 1, "name": " " }
        ]
    },
    "Rapid GT X": {
        "Liveries": [
            { "id": 1, "name": " " }
        ]
    },
    "Sentinel GTS": {
        "Liveries": [
            { "id": 1, "name": " " }
        ]
    },
    "Suzume": {
        "Liveries": [
            { "id": 1, "name": " " }
        ]
    },
    "Tampa GT": {
        "Liveries": [
            { "id": 1, "name": " " }
        ]
    },
    "Woodlander": {
        "Liveries": [
            { "id": 1, "name": " " }
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