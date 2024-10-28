-- CreateTable
CREATE TABLE "phoneNumber" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sidHigh_Level" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "friendlyName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "fax" BOOLEAN NOT NULL,
    "voice" BOOLEAN NOT NULL,
    "sms" BOOLEAN NOT NULL,
    "mms" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "isGroupConversationEnabled" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "phoneNumber_phoneNumber_key" ON "phoneNumber"("phoneNumber");
