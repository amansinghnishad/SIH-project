// Define an object to store information about districts and their products
var districtInfo = {
    "Anantnag": {
      "Products": ["Fish based products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Bandipora": {
      "Products": ["Poultry/ mutton products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Baramulla": {
      "Products": ["Apple based product"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Budgam": {
      "Products": ["Milk based product"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Doda": {
      "Products": ["Olive Product"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Ganderbal": {
      "Products": ["Fish based products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Jammu": {
      "Products": ["Milk based products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Kathua": {
      "Products": ["Spices"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Kishtwar": {
      "Products": ["Walnut products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Kupwara": {
      "Products": ["Walnut products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Kulgam": {
      "Products": ["Spices and Pickles"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Poonch": {
      "Products": ["Millet based products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Pulwama": {
      "Products": ["Milk based products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Rajouri": {
      "Products": ["Milk based products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Ramban": {
      "Products": ["Honey"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Reasi": {
      "Products": ["Spices"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Samba": {
      "Products": ["Mushroom Products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Shopian": {
      "Products": ["Apple based products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Srinagar": {
      "Products": ["Bakery Products"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    },
    "Udhampur": {
      "Products": ["Pickles"],
      "Population": 100000,
      "Area": "120 square miles",
      "Image": "images/fish.jpg"
    }
};

// Function to create a card for a district
function createDistrictCard(districtName, districtData) {
    var card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-content">
            <div class="card-image-container">
                <img src="${districtData.Image}" alt="${districtName}" class="card-image">
            </div>
            <div class="card-text">
                <h2>${districtName}</h2>
                <p><strong>Products:</strong> ${districtData.Products.join(", ")}</p>
                <p><strong>Population:</strong> ${districtData.Population}</p>
                <p><strong>Area:</strong> ${districtData.Area}</p>
                <button class="card-button">Learn More</button>
            </div>
        </div>
    `;

    return card;
}

// Function to display district cards on the website
function displayDistrictCards() {
    var districtContainer = document.getElementById("district-container");

    for (var districtName in districtInfo) {
        var districtData = districtInfo[districtName];
        var districtCard = createDistrictCard(districtName, districtData);
        districtContainer.appendChild(districtCard);
    }
}

// Call the function to display district cards when the page loads
window.onload = displayDistrictCards;
