# lmdb-copy
Copies one LMDB key value to another.

# Installation

```bash
npm install lmdb-move
```

# Usage

```javascript
import {open} from "lmdb";
import {withExtensions} from "lmdb-copy";

const db = withExtensions(open("test"));
await db.put("key1","value1");
await db.copy("key1","key2");
```

## API

### async copy(key,destKey,?overwrite,?version,?ifVersion) - returns boolean

Copies the value at `key` to `destKey` with the optional `version`. If `overwrite` is `true` and `destKey` already exists, it will be overwritten. Otherwise, an Error `EEXIST: ${key}` is thrown. If `key` does not exist an Error `ENOENT: ${key}` is thrown. If optional `ifVersion` does not match current version, the function returns `false`.

### withExtensions(db:lmdbDatabase,extenstions:object) - returns lmdbDatabase`

Extends an LMDB database and any child databases it opens to have the `extensions` provided as well as any child databases it opens. This utility is common to other `lmdb` extensions like `lmdb-patch`, `lmdb-move`.

Automatically adds `copy`.

# Testing

Unit testing is conducted with Jest.

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   71.42 |    53.84 |     100 |     100 |
index.js |   71.42 |    53.84 |     100 |     100 | 3-16

# Release Notes (Reverse Chronological Order)

2023-05-02 v1.0.0 Updated license. Added unit tests. Modified error messages to be ENOENT: and EEXIST.

2023-04-27 v0.0.4 Simplifies use of `withExtensions`.

2023-04-24 v0.0.3 Documentation updates.

2023-04-20 v0.0.2 Documentation updates.

2023-04-20 v0.0.1 Initial public release

# License

This software is provided as-is under the [MIT license](http://opensource.org/licenses/MIT).

Copyright (c) 2023, AnyWhichWay, LLC and Simon Y. Blackwell.