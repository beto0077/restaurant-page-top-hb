import "./menu.css";

const signaturePizzas = [
    "Margherita Classica - Fresh mozzarella, basil, and tomato sauce baked to perfection.",
    "Smoky Pepperoni - A generous layer of spicy pepperoni over melted cheese with a smoky kick.",
    "Truffle Delight - Creamy white sauce, mushrooms, arugula, and a drizzle of truffle oil.",
    "Fiery Diablo - Spicy salami, chili flakes, roasted peppers, and extra heat for the brave.",
    "Veggie Garden - A colorful mix of seasonal vegetables on a light tomato base.",
];

export function createMenuPage() {
    const heading = document.createElement("h2");
    const pizzaList = document.createElement("ul");
    const additionalText = document.createElement("p");
    const container = document.createElement("div");

    heading.textContent = "Our Signature Pizzas";
    for (let index = 0; index < signaturePizzas.length; index++) {
        const listItem = document.createElement("li");
        listItem.textContent = signaturePizzas[index];
        pizzaList.appendChild(listItem);
    }
    additionalText.textContent = "Pair any pizza with our house red wine or a refreshing craft beer.";
    container.classList.add("menu-content");

    container.appendChild(heading);
    container.appendChild(pizzaList);
    container.appendChild(additionalText);

    return container;
}