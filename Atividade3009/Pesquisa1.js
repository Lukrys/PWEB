var somaIdade = 0;
var maisVelha = 0;
var maisNova = 200;
var contPessimo = 0;
var contOtimoBom = 0;
var totalOpiniao = 45;
var mulheres = 0;
var homens = 0;

for(i = 0;i <= 44;i++){
	var idade = prompt("Informe a idade");
	var sexo = prompt("Informe o sexo");
	var opiniao = prompt("Informe a opiniao");
	
	idade = parseInt(idade);
	somaIdade += idade;
	if(idade > maisVelha){
		maisVelha = idade;
	}
	if(idade < maisNova){
		maisNova = idade;
	}
	if(opiniao == 1){
		contPessimo++;
	}
	if(opiniao == 4 || opiniao == 3){
		contOtimoBom++;
	}
	if(sexo == "F" || sexo == "f"){
		mulheres++;
	}
	else if(sexo == "M" || sexo == "m"){
		homens++;
	}
}
	alert("Média de idade das pessoas = " + somaIdade/45 +
	"\nIdade da pessoa mais velha = " + maisVelha +
	"\nIdade da pessoa mais nova = " + maisNova + 
	"\nQuantidade de pessoas que responderam péssimo = " + contPessimo + 
	"\n" + contOtimoBom/totalOpiniao*100 + "% " + "das pessoas responderam ótimo e bom" +
	"\nAo todo " + mulheres + " mulheres e " + homens + " homens responderam o questionário");
	