-- https://www.hackerrank.com/challenges/weather-observation-station-20/problem?isFullScreen=true
SET @rowindex := -1;

SELECT ROUND(AVG(LAT_N),4)
FROM (
    SELECT @rowindex:=@rowindex + 1 AS rowindex, LAT_N
    FROM STATION
    ORDER BY LAT_N
) AS D
WHERE D.rowindex IN (FLOOR(@rowindex/2), CEIL(@rowindex/2))