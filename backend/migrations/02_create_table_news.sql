CREATE TABLE news (
    news_id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    title VARCHAR(255) NOT NULL,
    img VARCHAR(255),  -- Almacena la ruta del archivo o URL
    tags TEXT,         -- Almacena las etiquetas como una cadena delimitada
    date DATETIME NOT NULL,
    readTime INT NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES profile(profile_id)
);