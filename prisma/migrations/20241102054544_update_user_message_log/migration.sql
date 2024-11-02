-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserMessageLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "toNumber" TEXT,
    "messageContent" TEXT,
    "sentAt" DATETIME,
    CONSTRAINT "UserMessageLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserMessageLog" ("id", "messageContent", "sentAt", "toNumber", "userId") SELECT "id", "messageContent", "sentAt", "toNumber", "userId" FROM "UserMessageLog";
DROP TABLE "UserMessageLog";
ALTER TABLE "new_UserMessageLog" RENAME TO "UserMessageLog";
CREATE INDEX "UserMessageLog_userId_sentAt_idx" ON "UserMessageLog"("userId", "sentAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
