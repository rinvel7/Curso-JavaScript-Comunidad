
class CalculadoraFesta{
    constructor(  numPessoas,  bebSaudavel,  decDiferenciada){}
    calcularValorComidas() {    }
    calcularValorBebidas() {   }
    calcularValorDecoracao(){    }
    calcularDescontoPercentual() {    }
    calcularTotalFesta(){    }
}
class festa{
    constructor(nroPessoas, bebida, decoracao){
        this.nroPessoas = nroPessoas;
        this.bebida = bebida;
        this.decoracao = decoracao;
    }
    CalculaComidas(){
        var totalComidas = 0;
        totalComidas = this.nroPessoas * 25;
        console.log("Total Comidas = " + totalComidas);
        return totalComidas;
    }
    CalculaDecoracao(){
        var totalDecor = 0, totalMesas = 0;
        if(this.decoracao == "normal"){
            
            totalMesas = this.nroPessoas / 8;
            if (this.nroPessoas % 8 != 0){
                totalMesas = Math.trunc(totalMesas);
                totalMesas = (totalMesas +1) * 30;
            }
            totalDecor = this.nroPessoas * 7.5 + totalMesas;
        }
        if (this.decoracao = "diferenciada"){
            totalDecor = this.nroPessoas * 10 + 50;
        }
        console.log("total decoração: " + totalDecor);
        return totalDecor; 
    }
  
    CalculaBebidas(){

        var totalBebida = 0, totalAlcool = 0, porcent = 0;
        if (this.bebida == "suco"){
            totalBebida = (this.nroPessoas * 5);
            console.log("Sucos = " + totalBebida);
        }else if (this.bebida = "Alcoholica"){
            totalBebida = this.nroPessoas * 20;
            console.log("Total Alcohol:  " + totalBebida);
        }
        return totalBebida;
    }
    CalculaTotal(){
        var total = 0; 
        total = this.CalculaComidas() + this.CalculaDecoracao(
) + this.CalculaBebidas();
        return total
    }
    
}
let festa45NS = new festa(45,"suco","normal");
let valorFesta  = festa45NS.CalculaTotal()
console.log("total Festa = " + valorFesta);
console.log("\n");

var festa150AlcDif = new festa( 150, "Alcoholica", "diferenciada")
var total2 = festa150AlcDif.CalculaTotal();
console.log("total Festa = " + total2);
 
console.log(" Comidas = " +  festa150AlcDif.CalculaComidas() + 
            " Decoracao = " + festa150AlcDif.CalculaDecoracao() + 
         "Bebidas + " + festa150AlcDif.CalculaBebidas() +
            " P x pessoas = "  + festa150AlcDif.nroPessoas);
            