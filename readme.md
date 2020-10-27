# Node JS MongoDB CRUD Operations 
 

- In this assignment we will work with crud operations with Mongo DB (create - read - update - delete)
- we want to create MongoDB databse BooksDB  and also to add one collection bookslist,we  will create backend app to manage the database, we have to: 
1. add books to the collection
2. show the books in html page 
3. edit book data
4. delete a book from the database

## Assignment 1 - prepare your Database
1. prepare your cloud monogDB connection
2. test your connection with compass 
3. continue the code in server.js to connect with mongoDB
4. create database : `BooksDB` and create collecion : `Bookslist`

## Assignment 2- prepare your Backend 

1. create the post root `/addBook` for adding a book to the `Booklist` collection
`app.post('/addBook')`

 the `request.body` should have this data :
  - `title` 
  -  `description` 
  -  `published`
  -   `author` 
  -   `cover`
> you can take some data from this website [thegreatestbooks.org](https://thegreatestbooks.org/)
> the cover photo should be string and you can copy the image location from `thegreatestbooks` as example : 
[photo](https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L.jpg)
of this book :  [Lolita](https://thegreatestbooks.org/items/50/)


### example about the book data : 
```
{
  "title":"To the Lighthouse ",
  "description":"A landmark novel of high modernism, the text, centering on the Ramsay family and their visits to the Isle of Skye in Scotland ",
  "published":"2019",
  "author":"Virginia Woolf",
  "cover" :"https://images-na.ssl-images-amazon.com/images/I/51ZtQidg%2B8L.jpg"
  
}
```
- you should use `insertOne` to insert the book data to the database

2. create the root `/Books` to show all the books  
 - you should use `find().toArray()` to get all the books from the `Books` collection
 

3. create the `put` root  `/Books/update/:id`  
> ```
> app.put('/Books/:id' , (request,response)=>{
>
>})
> ```
4. create the `delete` root to delete a book from the database 
> ```
> app.delete('/Books/:id' , (request,response)=>{
>
>})
> ```
