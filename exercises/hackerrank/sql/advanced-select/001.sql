-- https://www.hackerrank.com/challenges/what-type-of-triangle/problem?isFullScreen=true
SELECT
    CASE
        WHEN A + B <= C OR A + C <= B OR B + C <= A THEN 'Not A Triangle'
        WHEN A = B AND B = C THEN 'Equilateral'
        WHEN A = B OR B = C OR A = C THEN 'Isosceles'
        WHEN A <> B AND B <> C THEN 'Scalene'
    END TUPLE
FROM TRIANGLES