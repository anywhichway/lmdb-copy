import {open}  from "lmdb";
import {copy,withExtensions} from "./index.js";

const db = withExtensions(open("test",{create:true,useVersions:true}),{copy});
db.clearSync();
test("copy",async () => {
    await db.put("hello","world");
    expect(await db.copy("hello","goodbye")).toBe(true);
    expect(db.get("hello")).toBe("world");
    expect(db.get("goodbye")).toBe("world");
})