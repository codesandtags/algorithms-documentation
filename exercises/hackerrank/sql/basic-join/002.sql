-- https://www.hackerrank.com/challenges/african-cities/problem?isFullScreen=true
SELECT CITY.NAME
FROM CITY
INNER JOIN COUNTRY ON CITY.COUNTRYCODE = COUNTRY.CODE
WHERE COUNTRY.CONTINENT = 'Africa'