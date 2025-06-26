// 🟣 Basic CRUD Operations

// Find all books in a specific genre
db.books.find({ genre: "Memoir" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author
db.books.find({ author: "Paulo Coelho" });

// Update the price of a specific book
db.books.updateOne({ title: "The Alchemist" }, { $set: { price: 12.99 } });

// Delete a book by its title
db.books.deleteOne({ title: "1984" });

// 🟣 Advanced Queries

// Find books in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// Projection: return only title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort books by price ascending
db.books.find().sort({ price: 1 });

// Sort books by price descending
db.books.find().sort({ price: -1 });

// Pagination: page 1 (5 books)
db.books.find().limit(5).skip(0);

// Pagination: page 2 (5 books)
db.books.find().limit(5).skip(5);

// 🟣 Aggregation Pipelines

// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade
db.books.aggregate([
  { $project: { decade: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);

// 🟣 Indexing

// Index on title
db.books.createIndex({ title: 1 });

// Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Explain query performance
db.books.find({ title: "The Alchemist" }).explain("executionStats");
db.books.find({ author: "Paulo Coelho", published_year: 1988 }).explain("executionStats");
