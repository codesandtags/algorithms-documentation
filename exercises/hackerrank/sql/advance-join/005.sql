-- https://www.hackerrank.com/challenges/placements/problem?isFullScreen=true
SELECT Name from Students as s 
JOIN Friends as f on s.ID = f.ID
JOIN Packages as pon p.ID = s.ID
JOIN Packages as fp on fp.ID = f.Friend_ID
WHERE p.Salary < fp.Salary
ORDER BY fp.Salary;