BEGIN TRANSACTION;

DELETE FROM Books
WHERE BookID = 103;

ROLLBACK;