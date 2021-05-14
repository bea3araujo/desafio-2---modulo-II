/*
1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
*/

//1//
let age = 23
if (age > 18) {
    console.log("você é maior de idade. Top!")
}
else {
    console.log("você é menor de idade. Penah")
}

//2//
let _age = 24
let istrue = "sou humano e tenho mais que 18 anos"
let isfalse = "não sou humano ou tenho menos de 18 anos"
if((_age > 18) && (istrue == "sou humano e tenho mais que 18 anos")){
    console.log(istrue)
}
else{
    console.log(isfalse)
}

//3//
let month = "dezembro"
if((month === "dezembro") || (month === "janeiro")){
    console.log("você faz aniversário em janeiro ou dezembro")
}
else{
    console.log("vc não faz aniversário em janeiro ou dezembro")
}

//4//
let name = "Roberta"
if((name = "R")){
    console.log("seu nome começa com a letra R")
}
else{
    console.log("seu nome não começa com a letra R")
}

//5//
let nome = "E"
let sobrenome = Carvalho
if ((nome = "E") || (sobrenome > length < 6)) {
    console.log("seu nome começa com a letra E ou seu sobrenome contem mais de 6 caracteres")
}
else{
    console.log("seu nome não começa com a letra E ou seu sobrenome contem menos de 6 caracteres")
}