// Define an object to store information about districts and their products
var districtInfo = {
  "Anantnag": {
    "Products": ["Fish based products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/fish.png",
    "ProductSite": "Mutton-Fish.html"
    
  },
  "Bandipora": {
    "Products": ["Poultry/ mutton products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/mutton.jpg",
    "ProductSite": "Mutton-Fish.html"
  },
  "Baramulla": {
    "Products": ["Apple based product"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/apples.png",
    "ProductSite": "Apple-bakery.html"
  },
  "Budgam": {
    "Products": ["Milk based product"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/milk.jpg",
    "ProductSite": "Milk-products.html"
  },
  "Doda": {
    "Products": ["Olive Product"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/olive.jpeg",
    "ProductSite": "millits-Olive-mushrooms.html"
  },
  "Ganderbal": {
    "Products": ["Fish based products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/fish.png",
    "ProductSite": "Mutton-Fish.html"
  },
  "Jammu": {
    "Products": ["Milk based products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/milk.jpg",
    "ProductSite": "Milk-products.html"
  },
  "Kathua": {
    "Products": ["Spices"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/spices.png",
    "ProductSite": "Spices-Pickels.html"
  },
  "Kishtwar": {
    "Products": ["Walnut products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/walnuts.jpeg",
    "ProductSite": "walnut-honey.html"
  },
  "Kupwara": {
    "Products": ["Walnut products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/walnuts.jpeg",
    "ProductSite": "walnut-honey.html"
  },
  "Kulgam": {
    "Products": ["Spices and Pickles"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/spices.png",
    "ProductSite": "Spices-Pickels.html"
  },
  "Poonch": {
    "Products": ["Millet based products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/millets.png",
    "ProductSite": "millits-Olive-mushrooms.html"
  },
  "Pulwama": {
    "Products": ["Milk based products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/milk.jpg",
    "ProductSite": "Milk-products.html"
  },
  "Rajouri": {
    "Products": ["Milk based products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/milk.jpg",
    "ProductSite": "Milk-products.html"
  },
  "Ramban": {
    "Products": ["Honey"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/honey.jpeg",
    "ProductSite": "walnut-honey.html"
  },
  "Reasi": {
    "Products": ["Spices"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/spices.png",
    "ProductSite": "Spices-Pickels.html"
  },
  "Samba": {
    "Products": ["Mushroom Products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/mushrooms.png",
    "ProductSite": "millits-Olive-mushrooms.html"
  },
  "Shopian": {
    "Products": ["Apple based products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/apples.png",
    "ProductSite": "Apple-bakery.html"
  },
  "Srinagar": {
    "Products": ["Bakery Products"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/bakery.jpeg",
    "ProductSite": "Apple-bakery.html"
  },
  "Udhampur": {
    "Products": ["Pickles"],
    "Population": 100000,
    "Area": "120 square miles",
    "Image": "images/pickles.png",
    "ProductSite": "Spices-Pickels.html"
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
              <a href="${districtData.ProductSite}" class="card-link">
                  <button class="card-button">Learn More</button>
              </a>
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

