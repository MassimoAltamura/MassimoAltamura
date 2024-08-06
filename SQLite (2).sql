CREATE TABLE Books (
  book_id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  genre TEXT,
  published_year INTEGER,
  isbn TEXT UNIQUE NOT NULL,
  price REAL,
  rating REAL,
  stock_count INTEGER
);