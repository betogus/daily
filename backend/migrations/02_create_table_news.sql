CREATE TABLE news (
    news_id VARCHAR(36) PRIMARY KEY,
    profile_id VARCHAR(36),
    title VARCHAR(255) NOT NULL,
    img VARCHAR(255),  -- Almacena la ruta del archivo o URL
    tags TEXT,         -- Almacena las etiquetas como una cadena delimitada
    date DATETIME NOT NULL,
    read_time INT NOT NULL,
    content VARCHAR(1000) NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES profile(profile_id)
);