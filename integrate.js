/**
 * Realiza a integração pelo método dos trapézios
 * @param {Array} data Array de objetos que contém par (x,y) 
 * @returns valor total da integral numérica
 */

function integrate(data){
    let total = 0;
    for(let i = 0; i < data.length - 1; i++) {
        let dx = data[i+1].x - data[i].x;
        let alturaMedia = (data[i].y + data[i+1].y) / 2;
        total += dx * alturaMedia;
    }
    return total;
}
 
 module.exports = integrate;
