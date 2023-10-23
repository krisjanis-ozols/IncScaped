# IncScaped


DB Model

<img width="634" alt="db" src="https://github.com/Haralds-A/IncScaped/assets/111415613/6960fd5e-63f7-44e8-8408-3d3779d7a124">


CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, -- Store hashed passwords
    email VARCHAR(255) NOT NULL,
    registration_date DATE NOT NULL
);

-- Create Daily Prompts Table
CREATE TABLE DailyPrompts (
    prompt_id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES Users(user_id),
    prompt_text TEXT NOT NULL,
    date DATE NOT NULL
);

-- Create Stories Table
CREATE TABLE Stories (
    story_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    prompt_id INT NOT NULL,
    FOREIGN KEY (prompt_id) REFERENCES DailyPrompts(prompt_id),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL
);

-- Create Comments Table
CREATE TABLE Comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    story_id INT NOT NULL,
    FOREIGN KEY (story_id) REFERENCES Stories(story_id),
    comment_text TEXT NOT NULL,
    comment_date DATE NOT NULL
);

-- Create Ratings Table
CREATE TABLE Ratings (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    story_id INT NOT NULL,
    FOREIGN KEY (story_id) REFERENCES Stories(story_id),
    rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5), -- Assuming 1 to 5 stars
    rating_date DATE NOT NULL
);

