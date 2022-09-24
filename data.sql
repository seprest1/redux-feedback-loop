--DROP TABLE "feedback";

CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text default '',
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');


--DROP TABLE "flagged_words";

CREATE TABLE "flagged_words" (
	"id" SERIAL PRIMARY KEY,
	"word" VARCHAR(100) not null,
	"severity" INT default 0
);

--sample flagged words
INSERT INTO "flagged_words" 
	("word", "severity")
	VALUES
		('sad', 2), 
		('help', 3), 
		('bully', 4),
		('swearWord', 3);
