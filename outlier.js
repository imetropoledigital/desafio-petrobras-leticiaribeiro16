/**
 * Remove registros espúrios
 * @param {Array} dados - Um array de pontos flutuantes (double)
 * @returns {Array} contendo apenas os pontos não-espúrios
 */

function removeOutlier(dados){
    let soma = dados.reduce((a, b) => a + b, 0);
    let media = soma / dados.length;

    let diferencaQuadrada = dados.map(valor => Math.pow(valor - media, 2));
    let mediaDiferencaQuadrada = diferencaQuadrada.reduce((a, b) => a + b, 0) / diferencaQuadrada.length;
    let desvioPadrao = Math.sqrt(mediaDiferencaQuadrada);

    return dados.filter(valor => Math.abs(valor - media) <= 2 * desvioPadrao);
}

module.exports = removeOutlier;
