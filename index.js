/*MIT License
Copyright 2023, AnyWhichWay, LLC and Simon Y. Blackwell

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

async function copy(key,destKey,overwrite,version,ifVersion) {
    const entry = this.getEntry(key,{versions:true});
    if(!entry) throw new Error(`ENOENT: ${key}`);
    if(ifVersion && entry.version!==ifVersion) return false;
    if(!overwrite && this.get(destKey)!==undefined) throw new Error(`EEXIST: ${destKey}`);
    const result = await this.put(destKey,entry.value,version);
    if(!result) throw new Error(`Failed to copy value from ${key} to ${destKey}`);
    return result;
}

import {withExtensions as lmdbExtend} from "lmdb-extend";

const withExtensions = (db,extensions={}) => {
    return lmdbExtend(db,{copy,...extensions})
}

export {copy as default,copy,withExtensions};