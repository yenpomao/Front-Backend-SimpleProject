function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        var add_word;
        if (this.read) {
            add_word = "already read";
        } else {
            add_word = "not read yet";
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${add_word}`;
    }
}

function addBookToLibrary(title, author, pages, read) {  
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

}

document.querySelector('.form-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from refreshing the page

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('readOption').checked;

    // Add the book to the library array
    addBookToLibrary(title, author, pages, read);

    // Optional: close form or clear form fields
    document.getElementById("popUpForm").style.display = "none";
    console.log(myLibrary); // Log the library to view stored books
});
// Selecting the button and form popup
const button = document.getElementById("addBook");
const popUpForm = document.getElementById("popUpForm");
const myLibrary = [];
// Add an event listener to display the form on button click
button.addEventListener("click", function() {
    popUpForm.style.display = "block";
});
