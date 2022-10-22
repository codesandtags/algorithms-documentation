-- https://www.hackerrank.com/challenges/challenges/problem?isFullScreen=true
SELECT c.hacker_id, h.name, count(c.challenge_id) AS cnt 
FROM Hackers AS h JOIN Challenges AS c ON h.hacker_id = c.hacker_id
GROUP BY c.hacker_id, h.name 
HAVING cnt = (
    SELECT count(c1.challenge_id) 
    FROM Challenges AS c1 GROUP BY c1.hacker_id 
    ORDER BY count(*) desc limit 1
) OR
cnt NOT IN (
    SELECT count(c2.challenge_id) 
    FROM Challenges AS c2 
    GROUP BY c2.hacker_id 
    HAVING c2.hacker_id <> c.hacker_id
)
ORDER BY cnt DESC, c.hacker_id;