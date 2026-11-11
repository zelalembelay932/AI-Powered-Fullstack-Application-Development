CREATE TABLE IF NOT EXISTS conversations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role ENUM('user', 'assistant') NOT null,
    content TEXT NOT NULL,
    token_count INT UNSIGNED NOT NULL DEFAULT 0,
    craeted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
