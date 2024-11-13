import createContact from "./contact";
import createMenu from "./menu";
import createResturantHomePage from "./homepage";


function clearcontent() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = ""; // Clears all child elements from #content
    }
}

function createTab() {
        // Create the header element with id "tab"
        const header = document.querySelector("#tab");
    
        // Create the nav element
        const nav = document.createElement("nav");
    
        // Create the buttons with their text content
        const buttons = ["Home", "Menu", "Contact"];
        const pages = [createResturantHomePage, createMenu, createContact];


        buttons.forEach((text, index) => {
            const button = document.createElement("button");
            button.textContent = text;
            button.addEventListener("click", () => {
                clearcontent(); // Clear content before rendering the new page
                pages[index](); // Call the appropriate function from the pages array
            });
            nav.appendChild(button);
        });
    
        // Append the nav to the header
        header.appendChild(nav);
    
      
    };

export default createTab
