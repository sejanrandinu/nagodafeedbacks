DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lang TEXT,
  rating TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  address TEXT,
  purpose TEXT NOT NULL,
  task TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
