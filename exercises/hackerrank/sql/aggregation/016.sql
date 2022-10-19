-- https://www.hackerrank.com/challenges/weather-observation-station-19/problem?isFullScreen=true
SELECT ROUND(SQRT(POW(MIN(LAT_N) - MAX(LAT_N),2) + POW(MIN(LONG_W) - MAX(LONG_W),2)),4)
FROM STATION