SELECT *
FROM titanic
WHERE Sex = 'female' AND Survived = 1 AND Age > 30;
SELECT AVG(Age) AS average_age
FROM titanic
WHERE Sex = 'male' AND Survived = 0;
SELECT *
FROM titanic
WHERE Fare BETWEEN 20 AND 50 AND Embarked = 'C';
SELECT COUNT(*) AS total_survivors
FROM titanic
WHERE Pclass = 1 AND Survived = 1;
SELECT *
FROM titanic
WHERE Embarked = 'C' AND Fare > 75;
