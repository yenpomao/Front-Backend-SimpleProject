const createMenu = () => {
    const content = document.querySelector("#content");

    const container = document.createElement("div");

    // First section: "Best Bee Beers" title and description
    const section1 = document.createElement("div");

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Menu";

    // Append the title and description to the first section
    section1.appendChild(title);
    

    // Second section: Hours
    const section2 = document.createElement("div");
    const beveragesTitle = document.createElement("h3");
    beveragesTitle.textContent = "Beverages";
    section2.appendChild(beveragesTitle); // Add the beverages title to the section

    const drinks = [
        "Special Beer - 15 Euro",
        "Honey Brew - 12 Euro",
        "Golden Ale - 10 Euro",
        "Bee Lager - 13 Euro"
    ];

    drinks.forEach(drink => {
        const p = document.createElement("p");
        p.textContent = drink;
        section2.appendChild(p);
    });

    


    // Append all sections to the main container
    container.appendChild(section1);
    container.appendChild(section2);

    // Append the main container to the body of the document
    content.appendChild(container);  

}

export default createMenu;