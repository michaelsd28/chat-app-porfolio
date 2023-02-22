namespace chat_net.services.SQL.MessageHandler
{
    public class GetMessages
    {

        /*
         
        ---SELECT * FROM friendship

/*
--- update user ---
UPDATE users
SET username = 'michael_user2'
WHERE id = 2;
*/





/*
---get friends---
SELECT u.id, u.username, u.image
FROM users u
INNER JOIN Friendship f ON u.id = f.friend_id
WHERE f.user_id = 1
*/


/*
-- add friendship ---
INSERT INTO Friendship (user_id, friend_id) VALUES ([user_id], [friend_id]), ([friend_id], [user_id]);

--INSERT INTO Friendship (user_id, friend_id) VALUES (1, 1), (2, 2);



DELETE FROM friendship WHERE user_id = 2;



/*
--- create Message table ---
CREATE TABLE Message (
  id SERIAL PRIMARY KEY,
  sender_id INT NOT NULL,
  receiver_id INT NOT NULL,
  content TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (receiver_id) REFERENCES users(id)
);

*/

/*
--- insert messages ---

INSERT INTO Message ( sender_id, receiver_id, content) 
VALUES ( '1', '2', 'hola from michael');

INSERT INTO Message ( sender_id, receiver_id, content) 
VALUES ( '2', '1', 'hola from ambar');

*/



/*
--- get messages---
SELECT id, sender_id, receiver_id, content, type, timestamp
FROM Message
WHERE sender_id = 1 AND receiver_id = 3 OR sender_id = 3 AND receiver_id = 1
ORDER BY timestamp ASC;
*/


/*
--- make username unique ---
ALTER TABLE users
ADD CONSTRAINT unique_username
UNIQUE (username);
*/

/*
--- create files table ---

CREATE TABLE files (
    id SERIAL PRIMARY KEY,
    filename TEXT NOT NULL,
    filedata BYTEA NOT NULL
);

select * from files

*/


/*
remove friendship

---DELETE FROM friendship WHERE user_id = '5' ;

DELETE FROM friendship
WHERE user_id IN ('4', '5');

*/





/*

DELETE FROM your_table
WHERE id IN (select * from  public.friendship WHERE user_id = '4' AND friend_id = '5' OR user_id = '5' AND friend_id = '4' );

--DELETE FROM public.friendship  WHERE user_id = '4' AND friend_id = '5' OR user_id = '5' AND friend_id = '4' ;

*/

/*

INSERT INTO Message ( sender_id, receiver_id, content,type) 
VALUES ( '4', '6', 'hola from michael','text');

INSERT INTO Message ( sender_id, receiver_id, content,type) 
VALUES ( '6', '4', 'hola from jose','text');






TRUNCATE files;


        SELECT* from files;






         */
    }
}
