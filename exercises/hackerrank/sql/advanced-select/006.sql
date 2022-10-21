-- https://www.hackerrank.com/challenges/occupations/problem?isFullScreen=true
SELECT
    Doctor,
    Professor,
    Singer,
    Actor
FROM (
    SELECT
        NameOrder,
        max(CASE Occupation when 'Doctor' THEN Name END) AS Doctor,
        max(CASE Occupation when 'Professor' THEN Name END) AS Professor,
        max(CASE Occupation when 'Singer' THEN Name END) AS Singer,
        max(CASE Occupation when 'Actor' THEN Name END) AS Actor
    FROM (
            SELECT
                Occupation,
                Name,
                row_number() over(partition by Occupation order by Name ASC) AS NameOrder
            FROM Occupations
         ) AS NameLists
    GROUP by NameOrder
) AS Names
