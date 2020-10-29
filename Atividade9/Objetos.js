function Retangulo(x, y){
    var calcArea = x*y
    return calcArea
}

var base = prompt(`Base do Retângulo:`)
var altura = prompt(`Altura do Retângulo:`)

alert(`A Área do Retângulo é ${Retangulo(base, altura)}`)

function Conta(){
    var nomeCorrentista
    var banco
    var numeroConta
    var saldo

    this.getNomeCorrentista = function(){
        return nomeCorrentista
    }

    this.setNomeCorrentista = function(value){
        nomeCorrentista = value
    }
    this.getBanco = function(){
        return banco
    }

    this.setBanco = function(value){
        banco = value
    }

    this.getNumeroConta = function(){
        return numeroConta
    }

    this.setNumeroConta = function(value){
        numeroConta = value
    }

    this.getSaldo = function(){
        return saldo
    }

    this.setSaldo = function(value){
        saldo = value
    }
}

function Corrente(){
    var saldoEspecial
    this.getSaldoEspecial = function(){
        return saldoEspecial
    }

    this.setSaldoEspecial = function(value){
        saldoEspecial = value
    }
}

function Poupanca(){
    var juros
    var dataVencimento
    this.getJuros = function(){
        return juros
    }

    this.setJuros = function(value){
        juros = value
    }

    this.getDataVencimento = function(){
        return dataVencimento
    }

    this.setDataVencimento = function(value){
        dataVencimento = value
    }

}

Corrente.prototype = new Conta()
Poupanca.prototype = new Conta()

contaCorrente = new Corrente()
contaCorrente.setNomeCorrentista(`Claudio da Silva`)
contaCorrente.setBanco(`Bradesco`)
contaCorrente.setNumeroConta(`112.233-44`)
contaCorrente.setSaldo(2345.15)
contaCorrente.setSaldoEspecial(18.25)

contaPoupanca = new Poupanca()
contaPoupanca.setNomeCorrentista(`Laila de Oliveira`)
contaPoupanca.setBanco(`Itaú`)
contaPoupanca.setNumeroConta(`998.877-66`)
contaPoupanca.setSaldo(10907.13)
contaPoupanca.setJuros(25.00)
contaPoupanca.setDataVencimento(`25/08/2020`)

alert(`${contaCorrente.getNomeCorrentista()}\n ${contaCorrente.getBanco()}\n ${contaCorrente.getNumeroConta()}\n ${contaCorrente.getSaldo()}\n ${contaCorrente.getSaldoEspecial()} `)
        
alert(`${contaPoupanca.getNomeCorrentista()}\n ${contaPoupanca.getBanco()}\n ${contaPoupanca.getNumeroConta()}\n ${contaPoupanca.getSaldo()}\n ${contaPoupanca.getJuros()}\n ${contaPoupanca.getDataVencimento()} `)