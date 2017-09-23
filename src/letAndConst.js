/**
 * Created by dragon on 2017/9/21.
 */
class LetAndConst{
    constructor() {

    }

    varZoonFun(){
        var a = [];
        for(var i=0;i<10;i++){
            a[i] = function () {
                console.log(i)
            }
        }
        a[6]();
    }

    letZoonFun(){
        var a = [];
        for(let i=0;i<10;i++){
            a[i] = function () {
                console.log(i)
            }
        }
        a[6]();
    }

    forZoonFun(){
        for(let i = 0; i < 3; i++){
            let i = 'abc';
            console.log(i);
        }
    }

    functionZoonFun(){
        let a = 'zdc'
        let fun = function () {
            return a;
        }
        console.log(fun());
    }

    objFreezeFun(){
        const foo = {};
        foo.prop = 123;
        console.log(foo.prop)

        const doo = Object.freeze({});
        doo.prop = 1;
    }
}
export default LetAndConst