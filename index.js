const express = require("express");
const serverPort = 5000;

const app = express();

// post - Create
// get - Read
// put - Update
// delete - Delete

// CRUD

app.get("/", function (request, response) {
  response.send("Hello world");
});

const books = [
  { id: 1, title: "Harry Potter" },
  { id: 2, title: "Lord of the rings" },
  { id: 3, title: "the 50 cries of the wilders" },
];

app.get("/books", function (request, response) {
  response.json(books);
});

app.get("/books/:id", function (request, response) {
  const bookId = parseInt(request.params.id);
  const foundBook = books.find(function (item) {
    return item.id === bookId;
  });
  response.json(foundBook);
});

app.listen(serverPort, function (error) {
  error
    ? console.log(error)
    : console.log(`App is listening at Port ${serverPort}`);
});
