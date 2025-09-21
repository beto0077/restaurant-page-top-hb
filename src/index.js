import "./styles.css";
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";

const contentContainer = document.querySelector("#content");
const navigationButtons = document.querySelectorAll("button[data-content]");

function loadContent(event) {
    if (!event.target.dataset) {
        contentContainer.appendChild(createHomePage());
    } else {
        const chosenContent = event.target.dataset.content;
        let loadedModule = {};
        switch (chosenContent) {
            case "home":
                loadedModule = createHomePage();
                break;
            case "menu":
                loadedModule = createMenuPage();
                break;
            case "contact":
                loadedModule = createContactPage();
                break;

            default:
                console.log("Something weird is going on bro...");
                break;
        }
        while (contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.firstChild);
        }
        contentContainer.appendChild(loadedModule);
    }
};

document.addEventListener("DOMContentLoaded", loadContent);
navigationButtons.forEach(button => {
    button.addEventListener("click", loadContent);
});