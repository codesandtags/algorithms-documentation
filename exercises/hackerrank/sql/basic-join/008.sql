-- https://www.hackerrank.com/challenges/harry-potter-and-wands/problem?isFullScreen=true
SELECT w.id, p.age, w.coins_needed, w.power FROM Wands AS w 
JOIN Wands_Property AS p
ON w.code = p.code
where w.coins_needed = (
    SELECT min(coins_needed)
        FROM Wands w2 inner JOIN Wands_Property p2 
        ON w2.code = p2.code 
        where p2.is_evil = 0 and p.age = p2.age and w.power = w2.power
)
ORDER BY w.power DESC, p.age DESC;