# Migration `20201031105706`

This migration has been generated by shawnnxiao(肖玉峰) at 10/31/2020, 6:57:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201028132621..20201031105706
--- datamodel.dml
+++ datamodel.dml
@@ -3,10 +3,10 @@
   output   = env("CLIENT_OUTPUT")
 }
 datasource db {
-  provider = "sqlite"
-  url = "***"
+  provider = ["sqlite", "mysql", "postgresql"]
+  url = "***"
 }
 model Post {
   authorId  Int?
```

