-- https://www.hackerrank.com/challenges/earnings-of-employees/problem?isFullScreen=true
SELECT (salary * months) AS earnings, COUNT(1)
FROM EMPLOYEE
GROUP BY earnings
ORDER BY earnings DESC
LIMIT 1
