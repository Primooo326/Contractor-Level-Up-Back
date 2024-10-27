-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idUser_High_Level" TEXT,
    "full_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordUpdateDate" DATETIME,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_password_update" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "first_name", "full_name", "id", "idUser_High_Level", "last_name", "last_password_update", "password", "passwordUpdateDate", "status") SELECT "createdAt", "email", "first_name", "full_name", "id", "idUser_High_Level", "last_name", "last_password_update", "password", "passwordUpdateDate", "status" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
