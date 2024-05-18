INSERT INTO roles (id, name) VALUES (1, 'ADMIN'), (2, 'MODERATOR'), (3, 'USER') ON CONFLICT DO NOTHING;
INSERT INTO thread_themes(id, name) VALUES (1, 'STUDY'), (2, 'DORMITORY'), (3, 'FOOD') ON CONFLICT DO NOTHING;


INSERT INTO users (id, username, password,first_name, last_name, is_enabled, role_id, registered_at, updated_at)
VALUES (1, 'admin', 'password', 'John', 'Doe', true, 1, now(), now()),
       (2, 'moderator', 'password', 'Jane', 'Doe', true, 2, now(), now()),
       (3, 'user', 'password', 'Alice', 'Doe', true, 3, now(), now()) ON CONFLICT DO NOTHING;

ALTER SEQUENCE users_id_seq restart with 4;


INSERT INTO threads (id, title, text, author_id, theme_id, date)
VALUES (1, 'Study', 'What is the best way to study?', 1, 1, now()),
       (2, 'University news', 'What is the latest news?', 2, 1, now()),
       (3, 'Dormitory', 'What is the best dormitory?', 3, 2, now()),
     (4, 'Who is the best roommate?', 'What is the best roommate?', 3, 2, now()),
     (5, 'What is the best food?', 'What is the best food?', 3, 3, now()),
     (6, 'New food in the cafeteria', 'What is the new food in the cafeteria?', 3, 3, now()) ON CONFLICT DO NOTHING;

ALTER SEQUENCE threads_id_seq restart with 7;

INSERT INTO comments (id, text, author_id, thread_id, date)
VALUES ( 1, 'I think the best way to study is to study with friends', 1, 1, now()),
       ( 2, 'I think the best way to study is to study alone', 2, 1, now()),
       ( 3, 'I think the best way to study is to study with music', 3, 1, now()),
       ( 4, 'I think the best way to study is to study with a tutor', 1, 1, now()),
       ( 5, 'I think the best way to study is to study with a group', 2, 1, now()),
       ( 6, 'I think the best way to study is to study with a teacher', 3, 1, now()),
       (7, 'The latest news is that the university is closed', 2, 2, now()),
       (8, 'The latest news is that the university is open', 3, 2, now()),
       (9, 'The latest news is that the university is online', 1, 2, now()),
       (10, 'The latest news is that the university is offline', 2, 2, now()),
       (11, 'The latest news is that the university is in person', 3, 2, now()),
       (12, 'The best dormitory is the one with the best view', 3, 3, now()),
       (13, 'The best dormitory is the one with the best food', 1, 3, now()),
       (14, 'The best dormitory is the one with the best roommates', 2, 3, now()),
       (15, 'The best dormitory is the one with the best location', 3, 3, now()),
       (16, 'The best roommate is the one who is quiet', 3, 4, now()),
       (17, 'The best roommate is the one who is loud', 1, 4, now()),
       (18, 'The best roommate is the one who is clean', 2, 4, now()),
       (19, 'The best roommate is the one who is messy', 3, 4, now()),
       (20, 'The best food is the one that is healthy', 3, 5, now()),
       (21, 'The best food is the one that is unhealthy', 1, 5, now()),
       (22, 'The best food is the one that is cheap', 2, 5, now()),
       (23, 'The best food is the one that is expensive', 3, 5, now()),
       (24, 'The new food in the cafeteria is pizza', 3, 6, now()),
       (25, 'The new food in the cafeteria is pasta', 1, 6, now()),
       (26, 'The new food in the cafeteria is salad', 2, 6, now()),
       (27, 'The new food in the cafeteria is soup', 3, 6, now()) ON CONFLICT DO NOTHING;

ALTER SEQUENCE comments_id_seq restart with 28;
