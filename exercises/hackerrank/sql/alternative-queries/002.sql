-- https://www.hackerrank.com/challenges/draw-the-triangle-2/problem?isFullScreen=true
SET @NUMBER = 0;
SELECT REPEAT('* ', @NUMBER := @NUMBER + 1)
FROM information_schema.tables LIMIT 20;