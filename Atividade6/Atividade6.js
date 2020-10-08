var usermove = prompt("Pedra, papel ou tesoura?");
var cpumove = Math.random(cpumove);
/*var pe = pedra;
var pa = papel;
var te = tesoura;*/

if (cpumove <= 0.33) {
	cpumove = "pedra";
}

else if(cpumove > 0.33 && cpumove <= 0.66) {
	cpumove = "papel";
}

else {
	cpumove = "tesoura";
}

if (cpumove == usermove) {
	alert("Empate.");
}

if ((cpumove == "pedra" && usermove == "tesoura") || (cpumove == "tesoura" && usermove == "pedra") ) {
	alert("Pedra quebra tesoura.");
}

else if ((cpumove == "tesoura" && usermove == "papel") || (cpumove == "papel" && usermove == "tesoura") ) {
	alert("Tesoura corta papel.");
}

else if ((cpumove == "pedra" && usermove == "papel") || (cpumove == "papel" && usermove == "pedra") ) {
	alert("Papel cobre a pedra.");
}

