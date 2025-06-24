//Task 2
// 🔍 Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// 📅 Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } });

// ✍️ Find books by a specific author
db.books.find({ author: "George Orwell" });

// 💵 Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 15.99 } }
);

// 🗑️ Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" });



//task 3
// Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection of title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort by price ascending
db.books.find().sort({ price: 1 })

// Sort by price descending
db.books.find().sort({ price: -1 })

// Pagination: first 5 books
db.books.find().limit(5)

// Pagination: second 5 books
db.books.find().skip(5).limit(5)


//Task 4
//av books price per genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      average_price: { $avg: "$price" }
    }
  }
])
//author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      total_books: { $sum: 1 }
    }
  },
  {
    $sort: { total_books: -1 }
  },
  {
    $limit: 1
  }
])
//grouping books
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      books_count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])


//Task 5
//1.
db.books.createIndex({ title: 1 })
//2.
db.books.createIndex({ author: 1, published_year: 1 })
//3. 
db.books.find({ title: "The Great Gatsby" }).explain("executionStats")

