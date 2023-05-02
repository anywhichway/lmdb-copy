import {open}  from "lmdb";
import {copy,withExtensions} from "./index.js";

const db = withExtensions(open("test",{create:true,useVersions:true}));
db.clearSync();
test("copy",async () => {
    await db.put("hello","world");
    expect(await db.copy("hello","goodbye")).toBe(true);
    expect(db.get("hello")).toBe("world");
    expect(db.get("goodbye")).toBe("world");
})
test("copy version",async () => {
    await db.put("hello","world");
    expect(await db.copy("goodbye","nothing",false,3,4)).toBe(false);
})
test("copy non-existent",async () => {
    try {
        await db.copy("nothing","goodbye");
    } catch(e) {
        expect(e.message).toBe("ENOENT: nothing");
        return;
    }
    throw new Error("expected throw");
})
test("copy existent",async () => {
    try {
        await db.copy("goodbye","goodbye");
    } catch(e) {
        expect(e.message).toBe("EEXIST: goodbye");
        return;
    }
    throw new Error("expected throw");
})
test("copy existent overwrite",async () => {
    expect(await db.copy("goodbye","goodbye",true));
})