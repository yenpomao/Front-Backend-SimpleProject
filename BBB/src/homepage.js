
const createResturantHomePage = () => {
    const content = document.querySelector("#content");

    const container = document.createElement("div");

    // First section: "Best Bee Beers" title and description
    const section1 = document.createElement("div");

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Best Bee Beers";

    const description = document.createElement("p");
    description.textContent = "Bee Beer is a unique, honey-infused brew that combines the light, crisp flavors of traditional beer with the subtle sweetness of natural honey. Its smooth, golden appearance is complemented by a slightly floral aroma and a touch of earthiness from the honey. The taste is refreshing and mildly sweet, with just enough bitterness to balance the honey’s natural sugars. Bee Beer is often a lighter-bodied option, making it enjoyable for both casual drinkers and craft beer enthusiasts. This easy-drinking beer is perfect for warm days and pairs well with a variety of foods, from spicy dishes to grilled meats.";

    // Append the title and description to the first section
    section1.appendChild(title);
    section1.appendChild(description);

    // Second section: Hours
    const section2 = document.createElement("div");

    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Hours";

    const hours = [
        "Sunday: 8am - 8pm",
        "Monday: 8am - 6pm",
        "Tuesday: 8am - 6pm",
        "Wednesday: CLOSED",
        "Thursday: 8am - 10pm",
        "Friday: 8am - 10pm",
        "Saturday: 8am - 10pm"
    ];

    hours.forEach(day => {
        const p = document.createElement("p");
        p.textContent = day;
        section2.appendChild(p);
    });

    section2.prepend(hoursTitle); // Add the hours title to the top of the hours section

    // Third section: Location
    const section3 = document.createElement("div");

    const locationTitle = document.createElement("h3");
    locationTitle.textContent = "Location";

    const location = document.createElement("p");
    location.textContent = "honey street 11, beer city";

    // Append the title and address to the location section
    section3.appendChild(locationTitle);
    section3.appendChild(location);

    // Append all sections to the main container
    container.appendChild(section1);
    container.appendChild(section2);
    container.appendChild(section3);

    // Append the main container to the body of the document
    content.appendChild(container);  
}

export default createResturantHomePage;
