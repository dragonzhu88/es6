/**
 * Created by dragon on 2017/9/21.
 */
import Person from './person.js';
import LetAndConst from './letAndConst.js'

let p = new Person('张三', 20);
document.write(p.say());

let b = new LetAndConst();
b.varZoonFun()
b.letZoonFun()
b.forZoonFun()
b.functionZoonFun()
