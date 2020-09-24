var nome = prompt("Nome do aluno:");
var n1 = prompt("Primeira nota:");
var n2 = prompt("Segunda nota:");
var n3 = prompt("Terceira nota:");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

var media = (n1+n2+n3)/3;

alert("A média do aluno é " + media);
