-- https://www.hackerrank.com/challenges/japan-population/problem?isFullScreen=true
SELECT SUM(POPULATION)
FROM CITY
WHERE COUNTRYCODE = 'JPN'