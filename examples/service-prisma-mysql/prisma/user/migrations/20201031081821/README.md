# Migration `20201031081821`

This migration has been generated by shawnnxiao(肖玉峰) at 10/31/2020, 4:18:21 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `User` (
`email` varchar(191)  NOT NULL ,
`id` int  NOT NULL  AUTO_INCREMENT,
`name` varchar(191)  ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
UNIQUE INDEX `User.email_unique`(`email`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201031081821
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+generator client {
+  provider = "prisma-client-js"
+  output   = env("CLIENT_OUTPUT")
+}
+
+datasource db {
+  provider = ["sqlite", "mysql", "postgresql"]
+  url = "***"
+}
+
+model User {
+  email     String   @unique
+  id        Int      @id @default(autoincrement())
+  name      String?
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+}
```

