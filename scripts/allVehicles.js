// DADOS DOS VEÍCULOS
const allVehiclesData = {
    "300R": {
        "Liveries": [
            { "id": 8, "name": "Kisama Drifter" }
        ]
    },
    "8F Drafter": {
        "Liveries": [
            { "id": 11, "name": "Val De Grace" }
        ]
    },
    "Baller ST": {
        "Liveries": [
            { "id": 14, "name": "Festive Stripes" }
        ]
    },
    "Baller ST-D": {
        "Liveries": [
            { "id": 12, "name": "Republican Space Rangers" }
        ]
    },
    "Banshee": {
        "Liveries": [
            { "id": 12, "name": "Weekend Racer" },
            { "id": 13, "name": "Banshee Racing" },
            { "id": 14, "name": "Yogarishima" },
            { "id": 15, "name": "Fukaru" },
            { "id": 16, "name": "Ribbon Racer" }
        ]
    },
    "Banshee GTS": {
        "Liveries": [
            { "id": 5, "name": "Bravado Stripes" }
        ]
    },
    "Blista Kanjo": {
        "Liveries": [
            { "id": 14, "name": "Street Samurai" }
        ]
    },
    "Boor": {
        "Liveries": [
            { "id": 10, "name": "N.O.O.S.E." },
            { "id": 12, "name": "Barn Find" }
        ]
    },
    "Brickade 6x6": {
        "Liveries": [
            { "id": 11, "name": "Green Fooliganz" }
        ]
    },
    "Brigham": {
        "Liveries": [
            { "id": 11, "name": "Love Fist" },
            { "id": 12, "name": "Ghost Exposed", "status": "Evento de Halloween" }
        ]
    },
    "Broadway": {
        "Liveries": [
            { "id": 12, "name": "Los Santos Lovers" },
            { "id": 13, "name": "Downtown Cab Co." }
        ]
    },
    "Cavalcade XL": {
        "Liveries": [
            { "id": 9, "name": "Camo" }
        ]
    },
    "Castigator": {
        "Liveries": [
            { "id": 15, "name": "Graffiti Tagged" }
        ]
    },
    "Clique": {
        "Liveries": [
            { "id": 12, "name": "Merry Cliquemas" }
        ]
    },
    "Clique Wagon": {
        "Liveries": [
            { "id": 10, "name": "Pinned Flames" }
        ]
    },
    "Comet S2": {
        "Liveries": [
            { "id": 12, "name": "Air Herler" },
            { "id": 13, "name": "Ron Racing" },
            { "id": 14, "name": "Shark Attack" },
            { "id": 15, "name": "Rock N' Roll Legends" },
            { "id": 16, "name": "Republican Space Rangers" }
        ]
    },
    "Comet S2 Cabrio": {
        "Liveries": [
            { "id": 12, "name": "Santa 's New Sled" }
        ]
    },
    "Coquette D1": {
        "Liveries": [
            { "id": 7, "name": "Flames" }
        ]
    },
    "Coquette D5": {
        "Liveries": [
            { "id": 7, "name": "Flames" }
        ]
    },
    "Corsita": {
        "Liveries": [
            { "id": 11, "name": "Graphic Montage" },
            { "id": 12, "name": "Geometric Shapes" }
        ]
    },
    "Cypher": {
        "Liveries": [
            { "id": 12, "name": "Fleeca Circuit" },
            { "id": 13, "name": "Speed Demon" },
            { "id": 14, "name": "Negative Speed Demon" },
            { "id": 15, "name": "Redwood Stripes" },
            { "id": 16, "name": "Split Camo" }
        ]
    },
    "Deity": {
        "Liveries": [
            { "id": 13, "name": "Golden Leaf" }
        ]
    },
    "DH-7 Iron Mule": {
        "Liveries": [
            { "id": 2, "name": "Merryweather Security" }
        ]
    },
    "Dominator ASP": {
        "Liveries": [
            { "id": 12, "name": "Fukaru Race Livery" },
            { "id": 13, "name": "Stance Andreas" },
            { "id": 14, "name": "Python Livery" },
            { "id": 15, "name": "Cobra Livery" },
            { "id": 16, "name": "Camo Livery" }
        ]
    },
    "Dominator FX": {
        "Liveries": [
            { "id": 15, "name": "Classic Flames" }
        ]
    },
    "Eldora": {
        "Liveries": [
            { "id": 12, "name": "Downtown Cab Co." }
        ]
    },
    "Entity MT": {
        "Liveries": [
            { "id": 9, "name": "Safari Ranger" }
        ]
    },
    "Envisage": {
        "Liveries": [
            { "id": 9, "name": "Junk Race" }
        ]
    },
    "Euros X32": {
        "Liveries": [
            { "id": 13, "name": "Shark Camo" }
        ]
    },
    "Everon RS": {
        "Liveries": [
            { "id": 11, "name": "Karin" }
        ]
    },
    "F-160 Raiju": {
        "Liveries": [
            { "id": 13, "name": "Sprunk x eCola" }
        ]
    },
    "Gauntlet Interceptor": {
        "Liveries": [
            { "id": 3, "name": "LSPD Modern", "status": "Nova Geração" }
        ]
    },
    "Growler": {
        "Liveries": [
            { "id": 12, "name": "Vandal" },
            { "id": 13, "name": "Reverse Vandal" },
            { "id": 14, "name": "Tinkle Sprint" },
            { "id": 15, "name": "Trackled Camo" },
            { "id": 16, "name": "Kisama Graffiti" },
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
    },
    "Hardy": {
        "Liveries": [
            { "id": 10, "name": "Stance Andreas" }
        ]
    },
    "Hermes": {
        "Liveries": [
            { "id": 12, "name": "Amazing Albany II" }
        ]
    },
    "Hotring Sabre": {
        "Liveries": [
            { "id": 32, "name": "eCola X Sprunk" }
        ]
    },
    "Hotring Hellfire": {
        "Liveries": [
            { "id": 11, "name": "P’s & Q’s" }
        ]
    },
    "Impaler LX": {
        "Liveries": [
            { "id": 10, "name": "Green Anime Geometry" }
        ]
    },
    "Itali GTO Stinger TT": {
        "Liveries": [
            { "id": 12, "name": "Knuckleduster Sport" }
        ]
    },
    "Itali RSX": {
        "Liveries": [
            { "id": 12, "name": "Monochrome" }
        ]
    },
    "Kuruma": {
        "Liveries": [
            { "id": 12, "name": "Redwood Rally" },
            { "id": 13, "name": "Stance Andreas" },
            { "id": 14, "name": "Junk" },
            { "id": 15, "name": "Solid Camo" },
            { "id": 16, "name": "Yogarishima Camo" }
        ]
    },
    "La Coureuse": {
        "Liveries": [
            { "id": 8, "name": "Penaud Rally" },
            { "id": 10, "name": "Abstract Camo" }
        ]
    },
    "Landstalker XL": {
        "Liveries": [
            { "id": 11, "name": "Dolla Dolla" }
        ]
    },
    "Minimus": {
        "Liveries": [
            { "id": 11, "name": "Rust" }
        ]
    },
    "MonstroCiti": {
        "Liveries": [
            { "id": 8, "name": "Chepalle Motorsport" },
            { "id": 11, "name": "Atomic Rally Spec" }
        ]
    },
    "Niobe": {
        "Liveries": [
            { "id": 9, "name": "Race League" }
        ]
    },
    "Paragon R": {
        "Liveries": [
            { "id": 3, "name": "Yeti Camo" }
        ]
    },
    "Paragon R (Armored)": {
        "Liveries": [
            { "id": 3, "name": "Yeti Camo" }
        ]
    },
    "Paragon S": {
        "Liveries": [
            { "id": 11, "name": "Tentacle Camo" }
        ]
    },
    "Pipistrello": {
        "Liveries": [
            { "id": 11, "name": "Splashes 76" }
        ]
    },
    "Previon": {
        "Liveries": [
            { "id": 12, "name": "Stance Andreas Drift Team" },
            { "id": 13, "name": "Fukaru" },
            { "id": 14, "name": "Fukaru Alt." },
            { "id": 15, "name": "Ragga Rum Racing" },
            { "id": 16, "name": "Atomic Tires" }
        ]
    },
    "R88": {
        "Liveries": [
            { "id": 2, "name": "Dusche Racing" },
            { "id": 6, "name": "Pisswasser Racing" }
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
    "Sultan RS Classic": {
        "Liveries": [
            { "id": 12, "name": "Tribal Throwback, Purple" },
            { "id": 13, "name": "Chepalle Motorsport" },
            { "id": 14, "name": "Atomic Motorsport" },
            { "id": 15, "name": "Dense Motorsport" },
            { "id": 16, "name": "Karin Performance, Pink" }
        ]
    },
    "Surfer Custom": {
        "Liveries": [
            { "id": 14, "name": "Peace And Love" }
        ]
    },
    "Suzume": {
        "Liveries": [
            { "id": 10, "name": "Cyber" },
            { "id": 11, "name": "Cyber Graphics" }
        ]
    },
    "S80RR": {
        "Liveries": [
            { "id": 11, "name": "eCola" }
        ]
    },
    "Seminole Frontier": {
        "Liveries": [
            { "id": 10, "name": "Forest Ranger" }
        ]
    },
    "Stafford": {
        "Liveries": [
            { "id": 9, "name": "Oh Enus!" }
        ]
    },
    "Swinger": {
        "Liveries": [
            { "id": 11, "name": "For Queen and Country" }
        ]
    },
    "Tampa GT": {
        "Liveries": [
            { "id": 10, "name": "Los Santos Custom" }
        ]
    },
    "Terrorbyte": {
        "Liveries": [
            { "id": 2, "name": "FIB" }
        ]
    },
    "Thrax": {
        "Liveries": [
            { "id": 11, "name": "Ink Inc." }
        ]
    },
    "Titan 250 D": {
        "Liveries": [
            { "id": 7, "name": "Pisswasser" },
            { "id": 11, "name": "Eberhard" }
        ]
    },
    "Toreador": {
        "Liveries": [
            { "id": 12, "name": "Shark Camo" },
            { "id": 13, "name": "War Camo" }
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
    "Turismo Omaggio": {
        "Liveries": [
            { "id": 23, "name": "Rockstar Motorsport" }
        ]
    },
    "Vectre": {
        "Liveries": [
            { "id": 12, "name": "Meinmacht" },
            { "id": 13, "name": "Xero 29" },
            { "id": 14, "name": "X720" },
            { "id": 15, "name": "Mambas 24" },
            { "id": 16, "name": "Sword Boy" }
        ]
    },
    "Vigero ZX": {
        "Liveries": [
            { "id": 11, "name": "Cattana Racer" },
            { "id": 14, "name": "E99" }
        ]
    },
    "Virtue": {
        "Liveries": [
            { "id": 9, "name": "Jackal Racing" },
            { "id": 10, "name": "Ocelot Racing" }
        ]
    },
    "Vorschlaghammer": {
        "Liveries": [
            { "id": 7, "name": "Gradient Geometry" },
            { "id": 11, "name": "White Thunderbolt Stripe" }
        ]
    },
    "Walton L35": {
        "Liveries": [
            { "id": 11, "name": "Atomic Racing" }
        ]
    },
    "Weevil": {
        "Liveries": [
            { "id": 16, "name": "Love" }
        ]
    },
    "Woodlander": {
        "Liveries": [
            { "id": 9, "name": "Karin Performance Monochrome" }
        ]
    },
    "Yosemite 1500": {
        "Liveries": [
            { "id": 11, "name": "Pinstripe Blue" }
        ]
    },
    "Zentorno": {
        "Liveries": [
            { "id": 13, "name": "Rockstar Motorsport" }
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
    const allVehiclesList = document.getElementById('allVehiclesList');

    const vehiclesHTML = Object.entries(allVehiclesData).map(([vehicleName, data]) => {
        return createVehicleHTML(vehicleName, data.Liveries);
    }).join('');

    allVehiclesList.innerHTML = vehiclesHTML;
}

// RENDERIZAR QUANDO A PÁGINA CARREGAR
window.onload = renderVehicles;