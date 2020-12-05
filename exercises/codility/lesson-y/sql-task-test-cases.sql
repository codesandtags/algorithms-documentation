SELECT 
    tg.name AS name, 
    COUNT(tc.group_name) AS all_test_cases,
    COUNT(
        CASE WHEN tc.status = 'OK' THEN 0 ELSE NULL END
    ) AS passed_test_cases,
    SUM(
        CASE WHEN tc.status = 'OK' THEN tg.test_value ELSE 0 END
    ) AS total_value
FROM test_groups tg
LEFT JOIN test_cases tc ON tg.name = tc.group_name
GROUP BY tg.name
ORDER BY total_value DESC, tg.name ASC;