-- https://www.hackerrank.com/challenges/the-company/problem?isFullScreen=true
SELECT c.company_code, c.founder, 
    COUNT(distinct l.lead_manager_code),
    COUNT(distinct s.senior_manager_code),
    COUNT(distinct m.manager_code),
    COUNT(distinct e.employee_code)
FROM COMPANY AS c 
INNER JOIN Lead_Manager AS l ON c.company_code = l.company_code
INNER JOIN Senior_Manager AS s ON l.lead_manager_code = s.lead_manager_code
INNER JOIN Manager AS m ON m.senior_manager_code = s.senior_manager_code
INNER JOIN Employee AS e ON e.manager_code = m.manager_code
GROUP BY c.company_code, c.founder
ORDER BY c.company_code;