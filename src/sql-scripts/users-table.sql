

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	email VARCHAR(255) ,
	fname VARCHAR(255),
	lname VARCHAR(255),
	user_token  VARCHAR(255)
);

