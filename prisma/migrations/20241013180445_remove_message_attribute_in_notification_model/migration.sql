/*
  Warnings:

  - You are about to drop the column `message` on the `Notification` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "readAt" DATETIME,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL
);
INSERT INTO "new_Notification" ("category", "content", "createdAt", "id", "readAt", "recipientId", "updatedAt") SELECT "category", "content", "createdAt", "id", "readAt", "recipientId", "updatedAt" FROM "Notification";
DROP TABLE "Notification";
ALTER TABLE "new_Notification" RENAME TO "Notification";
CREATE INDEX "Notification_recipientId_idx" ON "Notification"("recipientId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
