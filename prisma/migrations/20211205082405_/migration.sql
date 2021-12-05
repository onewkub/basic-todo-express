-- CreateTable
CREATE TABLE "todo" (
    "todoId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mark" BOOLEAN NOT NULL DEFAULT false
);
