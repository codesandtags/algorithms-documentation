-- https://www.hackerrank.com/challenges/weather-observation-station-11/problem?isFullScreen=true
SELECT DISTINCT CITY
FROM STATION
WHERE CITY REGEXP '^[^aeiou]|[^aeiou]$'
