# PLP Bookstore MongoDB Project

## Setup

1. Open MongoDB Compass (or connect via mongosh)
2. Create a database: `plp_bookstore`
3. Create a collection: `books`
4. Run `insert_books.js` to insert 10 book documents
5. Use `queries.js` to perform CRUD, advanced queries, aggregation, and indexing

## Files

- `insert_books.js` — Script to populate the `books` collection
- `queries.js` — Contains all MongoDB queries for CRUD, advanced queries, aggregation, and indexing
- `README.md` — This file

## How to Run

1. Copy-paste the contents of `insert_books.js` into Compass > books collection > `Insert Document (JSON)`  
2. Open `queries.js` in Compass Shell (or mongosh) and run commands as needed  
3. Take a screenshot showing the `books` collection in MongoDB Compass

## Example

- Pagination shows 5 books per page
- Aggregation groups books by genre, author, decade
- Indexing boosts query speed on `title`, `author + published_year`
