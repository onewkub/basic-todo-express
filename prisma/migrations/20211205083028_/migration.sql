/*
  Warnings:

  - You are about to drop the column `mark` on the `todo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_todo" (
    "todoId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "marked" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_todo" ("name", "todoId") SELECT "name", "todoId" FROM "todo";
DROP TABLE "todo";
ALTER TABLE "new_todo" RENAME TO "todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
