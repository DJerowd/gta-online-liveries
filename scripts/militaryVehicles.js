// DADOS DOS VEÍCULOS
const militaryVehiclesData = {
    "Grupo AB": {
        "Liveries": [
            { "id": 22, "name": "Crânios" },
            { "id": 23, "name": "Ícones Amarelos" },
            { "id": 24, "name": "Bully" },
            { "id": 25, "name": "Rockstar" },
            { "id": 26, "name": "Tartan Vermelha" },
            { "id": 27, "name": "Galáxia" },
            { "id": 28, "name": "Árvore de Natal" },
            { "id": 29, "name": "Bengala Doce" },
            { "id": 30, "name": "Floco de neve" },
            { "id": 31, "name": "Visco" },
            { "id": 32, "name": "Camuflagem Rosa e Verde" },
            { "id": 33, "name": "Camuflagem Azul e Amarelo" },
            { "id": 34, "name": "Camuflagem Amarelo e Laranja" },
            { "id": 35, "name": "Camuflagem Verde e Azul" },
            { "id": 36, "name": "Camuflagem de Caça" },
            { "id": 37, "name": "Tartan Azul" },
            { "id": 38, "name": "Moeda Santo Capra" },
            { "id": 39, "name": "Sessanta Nove Dourado" },
            { "id": 40, "name": "Sessanta Nove Colorido" },
            { "id": 41, "name": "Dollar" }
        ]
    },
    "Grupo A": {
        "Liveries": [
            { "id": 22, "name": "Camuflagem Rosa e Verde" },
            { "id": 23, "name": "Camuflagem Azul e Amarelo" },
            { "id": 24, "name": "Camuflagem Amarelo e Laranja" },
            { "id": 25, "name": "Camuflagem Verde e Azul" },
            { "id": 26, "name": "Camuflagem de Caça" },
            { "id": 27, "name": "Tartan Azul" },
            { "id": 28, "name": "Moeda Santo Capra" },
            { "id": 29, "name": "Sessanta Nove Dourado" },
            { "id": 30, "name": "Sessanta Nove Colorido" },
            { "id": 31, "name": "Dollar" }
        ]
    },
    "Grupo B ": {
        "Liveries": [
            { "id": 22, "name": "Crânios" },
            { "id": 23, "name": "Ícones Amarelos" },
            { "id": 24, "name": "Bully" },
            { "id": 25, "name": "Rockstar" },
            { "id": 26, "name": "Tartan Vermelha" },
            { "id": 27, "name": "Galáxia" },
            { "id": 28, "name": "Árvore de Natal" },
            { "id": 29, "name": "Bengala Doce" },
            { "id": 30, "name": "Floco de neve" },
            { "id": 31, "name": "Visco" }
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
    const vehicleList2 = document.getElementById('militaryList');

    const vehiclesHTML2 = Object.entries(militaryVehiclesData).map(([vehicleName, data]) => {
        return createVehicleHTML(vehicleName, data.Liveries);
    }).join('');

    vehicleList2.innerHTML = vehiclesHTML2;
}

// RENDERIZAR QUANDO A PÁGINA CARREGAR
window.onload = renderVehicles;