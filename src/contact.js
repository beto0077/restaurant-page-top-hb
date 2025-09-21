export function createContactPage() {
    const heading = document.createElement("h2");
    const aboutHeading = document.createElement("h3");
    const aboutText = document.createElement("p");
    const aboutBlock = document.createElement("div");
    const contactHeading = document.createElement("h3");
    const contactText = document.createElement("p");
    const contactBlock = document.createElement("div");
    const scheduleInfo = document.createElement("p");
    const container = document.createElement("div");

    heading.textContent = "Visit La Forja Nera";
    aboutHeading.textContent = "About Us:";
    aboutText.textContent = "At La Forja Nera, we believe pizza is more than food—it’s a tradition. Our recipes are inspired by old-world techniques, blending authentic flavors with a modern twist. Every dish is prepared with passion and served with a smile.";
    contactHeading.textContent = "Contact Information:";
    contactText.innerHTML = "123 Ember Street, Hearth City<br>(555) 123-4567<br>contact@laforjanera.com";
    scheduleInfo.textContent = "Open daily from 12 PM - 11 PM.";
    container.classList.add("contact-content");

    aboutBlock.appendChild(aboutHeading);
    aboutBlock.appendChild(aboutText);
    contactBlock.appendChild(contactHeading);
    contactBlock.appendChild(contactText);
    container.appendChild(heading);
    container.appendChild(aboutBlock);
    container.appendChild(contactBlock);
    container.appendChild(scheduleInfo);

    return container;
}