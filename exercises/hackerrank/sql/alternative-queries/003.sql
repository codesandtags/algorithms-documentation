-- https://www.hackerrank.com/challenges/print-prime-numbers/problem?isFullScreen=true
WITH CTE as 
(SELECT @num:=@num+1 as NUMB FROM
    information_schema.tables t1,
    information_schema.tables t2,
    (SELECT @num:=1) tmp
    LIMIT 1000
)
SELECT GROUP_CONCAT(NUMB SEPARATOR '&')
FROM CTE
WHERE NOT EXISTS 
(
    SELECT * FROM(SELECT NUMB as NUMA FROM CTE) tmp2
    WHERE MOD(NUMB,NUMA)= 0 AND NUMA<NUMB
)