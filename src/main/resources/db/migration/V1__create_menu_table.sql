CREATE TABLE menu (
                      id INTEGER NOT NULL PRIMARY KEY,
                      name VARCHAR(255) NOT NULL,
                      description TEXT NOT NULL,
                      price DOUBLE PRECISION NOT NULL,
                      image VARCHAR(255) NOT NULL,
                      calorie INTEGER NOT NULL,
                      category VARCHAR(255) NOT NULL,
                      lat DOUBLE PRECISION NOT NULL,
                      lng DOUBLE PRECISION NOT NULL
);