-- https://www.hackerrank.com/challenges/the-blunder/problem?isFullScreen=true
SELECT CEIL(AVG(salary) - AVG(REPLACE(salary, '0', ''))) 
FROM EMPLOYEES;

