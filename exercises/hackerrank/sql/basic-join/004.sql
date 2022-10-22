-- https://www.hackerrank.com/challenges/contest-leaderboard/problem?isFullScreen=true
SELECT m.hacker_id, h.name, sum(score) AS total_score 
FROM
(
    SELECT hacker_id, challenge_id, max(score) AS score
    FROM Submissions GROUP BY hacker_id, challenge_id
) AS m
JOIN Hackers AS h on m.hacker_id = h.hacker_id
GROUP BY m.hacker_id, h.name
HAVING total_score > 0
ORDER BY total_score DESC, m.hacker_id;