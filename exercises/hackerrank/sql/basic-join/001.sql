-- https://www.hackerrank.com/challenges/asian-population/problem?isFullScreen=true
SELECT SUM(CITY.POPULATION)
FROM CITY
INNER JOIN COUNTRY ON COUNTRY.CODE = CITY.COUNTRYCODE
WHERE COUNTRY.CONTINENT = 'Asia'
