//Calcule a nota final, sabendo que AP1 e AP2 tem peso 40% e AP3 tem peso 20%


function notaFinal(ap1, ap2, ap3) {
    final = ap1*0.4 + ap2*0.4 + ap3*0.2
    return final
}

x = notaFinal(9,7,6)
console.log(x)