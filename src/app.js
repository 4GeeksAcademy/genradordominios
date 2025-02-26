/* import "bootstrap";
import "./style.css"

window.onload = function() {
    return;
};
 */
console.time("medicion")
const generarDominio = () => {

    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let ext = ['.com', '.es', '.ar']
    //write your code here
    for (let p of pronoun)
        for (let a of adj)
            for (let n of noun)
                for (let e of ext)
                    console.log(p + a + n + e);
}
generarDominio()
console.timeEnd("medicion")