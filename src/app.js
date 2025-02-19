/* import "bootstrap";
import "./style.css"

window.onload = function() {
    return;
};
 */
const generarDominio = () => {

    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let com = ['.com', '.es', '.ar']
    //write your code here
    for (let i of pronoun)
    for (let j of adj)
    for (let n of noun)
    for (let c of com)
    console.log(i + j + n + c);
}
    generarDominio()
