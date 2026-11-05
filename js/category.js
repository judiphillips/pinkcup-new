const imagePath = "assets/images/hero-drink-strawberry-mint.webp";

const categories = {
  "loaded-teas": {
    title: "Loaded Teas",
    items: [
      { name: "Strawberry Mint", description: "A refreshing blend of strawberry and mint flavors.", calories: 230 },
      { name: "Peach Burst", description: "A refreshing blend of fresh peach flavors.",calories: 210 },
      { name: "Tropical Sunrise", description: "A refreshing blend of tropical fruits.", calories: 190 },
    ],
  },
  "energy-drinks": {
    title: "Energy Drinks",
    items: [
      { name: "Berry Boost", calories: 15 },
      { name: "Citrus Charge", calories: 20 },
      { name: "Mango Rush", calories: 10 },
    ],
  },
  "dirty-sodas": {
    title: "Dirty Sodas",
    items: [
      { name: "Vanilla Cloud", calories: 280 },
      { name: "Cherry Cream", calories: 310 },
      { name: "Coconut Cola", calories: 290 },
    ],
  },
  "protein-shakes": {
    title: "Protein Shakes",
    items: [
      { name: "Vanilla Protein Shake", calories: 290 },
      { name: "Strawberry Protein Shake", calories: 320 },
      { name: "Chocolate Protein Shake", calories: 340 },
    ],
  },
  smoothies: {
    title: "Smoothies",
    items: [
      { name: "Strawberry Banana", calories: 240 },
      { name: "Mango Pineapple", calories: 220 },
      { name: "Berry Blend", calories: 260 },
    ],
  },
  "seasonal-specials": {
    title: "Seasonal Specials",
    items: [
      { name: "Pumpkin Spice Tea", calories: 190 },
      { name: "Cranberry Citrus", calories: 160 },
      { name: "Spiced Apple Fizz", calories: 180 },
    ],
  },
    "add-ins": {
    title: "Nutritional Add-Ins",
    items: [
      { name: "Protein Powder", calories: 190 },
      { name: "Collagen Peptides", calories: 160 },
      { name: "Hydration Blend", calories: 180 },
    ],
  },
};

const categoryKey = new URLSearchParams(window.location.search).get("category");
const category = categories[categoryKey];
const title = document.querySelector("#category-title");
const count = document.querySelector("#category-count");
const productGrid = document.querySelector("#category-products");

if (!category) {
  title.textContent = "Category not found";
  count.textContent = "Choose a category from the menu.";
} else {
  document.title = `${category.title} | Pink Cup`;
  title.textContent = category.title;
  count.textContent = `${category.items.length} items`;

  category.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "carousel__container";

    const image = document.createElement("img");
    image.src = imagePath;
    image.alt = "";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const calories = document.createElement("p");
    calories.textContent = `${item.calories} cal`;

    const action = document.createElement("a");
    action.className = "carousel__cta";
    action.href = "#";
    action.textContent = "View item";

    card.append(image, name, description, calories, action);
    productGrid.append(card);
  });
}
