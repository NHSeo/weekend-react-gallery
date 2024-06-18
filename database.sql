CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.');
('images/cat_small.jpg', 'Cat!', 'Photo of a cat taken at home'),
('images/dog_large.jpg', 'Dog!', 'Photo of a dog taken at American Kennel Club'),
('images/fox_twin.jpg', 'Fox!', 'Photo of a fox taken at National Park.'),
('images/koala_large.jpg', 'Koala!', 'Photo of a koala taken at Zoo')