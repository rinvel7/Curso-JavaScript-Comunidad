
class Chico {
    constructor(name, cash) {
      this.firstName = name
      this.account = cash
    }
    GiveCash(value) {
        if(this.account >= value){
            this.account = this.account - value
            return true
        }else{
            return false
        }
    }
    TakeCash(value) {
      this.account = this.account + value
    }
}

martin = new Chico('Martin', 1000)
raul = new Chico('Raul', 2000)
  
v=500 
if (martin.GiveCash(v)){
    raul.TakeCash(v)
    console.log(martin.account)
    console.log(raul.account)
}else{
    console.log('Nao foi possiel emprestar')
}
