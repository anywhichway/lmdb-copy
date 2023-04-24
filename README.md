# lmdb-copy
Copies one LMDB key value to another.

# Installation

```bash
npm install lmdb-move
```

# Usage

```javascript
import {open} from "lmdb";
import {copy,withExtensions} from "lmdb-copy";

const db = withExtensions(open("test"),{move});
await db.put("key1","value1");
await db.copy("key1","key2");
```

## API

### async copy(key,destKey,?overwrite,?version,?ifVersion) - returns boolean

Copies the value at `key` to `destKey` with the optional `version`. If `overwrite` is `true` and `destKey` already exists, it will be overwritten. Otherwise, an Error is thrown. If `key` does not exist an Error is thrown. If optional `ifVersion` deos not match current version, the function returns `false`.

### withExtensions(db:lmdbDatabase,extenstions:object) - returns lmdbDatabase`

Extends an LMDB database and any child databases it opens to have the `extensions` provided as well as any child databases it opens. This utility is common to other `lmdb` extensions like `lmdb-patch`, `lmdb-copy`, `lmdb-move`.

# Testing

Unit testing is conducted with Jest.

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   66.66 |    58.33 |     100 |     100 |
index.js |   66.66 |    58.33 |     100 |     100 | 3-9



# Release Notes (Reverse Chronological Order)

2023-04-24 v0.0.3 Documentation updates.

2023-04-20 v0.0.2 Documentation updates.

2023-04-20 v0.0.1 Initial public release

