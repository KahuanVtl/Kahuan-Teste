//parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))

// Parâmetros x Argumentos

// Ordem dos Parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Kahuan", 18))

function multiplica(num1, num2){
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))