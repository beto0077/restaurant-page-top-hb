import "./home.css"
import pizzaOvenPhoto from "./pizza-4369001_1920.jpg"

export function createHomePage() {
    const heading = document.createElement("h2");
    const description = document.createElement("p");
    const additionalText = document.createElement("p");
    const image = document.createElement("img");
    const container = document.createElement("div");

    heading.textContent = "Where every pizza is born from fire and craft";
    description.textContent = "At La Forja Nera, we craft artisanal pizzas using slow-fermented dough, fresh seasonal ingredients, and a traditional stone oven that brings out the most authentic flavors. Our mission is to create a warm and inviting experience, where every visit feels like sharing a meal at a good friend’s home.";
    additionalText.textContent = "Whether you’re craving a classic Margherita, an adventurous mix of flavors, or simply want to enjoy a glass of wine with a crispy pizza, La Forja Nera is the perfect spot. Come and discover why our guests say we don’t just serve pizzas… we serve memories.";
    image.src = pizzaOvenPhoto;
    container.classList.add("home-content");

    container.appendChild(heading);
    container.appendChild(description);
    container.appendChild(additionalText);
    container.appendChild(image);

    return container;
}