-- https://www.hackerrank.com/challenges/weather-observation-station-4/problem?isFullScreen=true
SELECT COUNT(CITY)-COUNT(DISTINCT CITY)
FROM STATION