-- https://www.hackerrank.com/challenges/draw-the-triangle-1/problem?isFullScreen=true
SET @NUMBER = 21;
SELECT REPEAT('* ', @NUMBER := @NUMBER - 1)
FROM information_schema.tables LIMIT 20;