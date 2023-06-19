const letras = ['A', 'B', 'C', 'D']; //declara e define conteúdo inicial do vetor

const letras2 = letras.slice(-2); //obtém 2 últimas letras

const letras3 = letras.slice(0, -1); //obtém do início até o final, exceto a última

console.log(letras); //[a,b,c,d]
console.log(letras2); //[c,d]
console.log(letras3); //[a,b,c]

const retira = letras.splice(2, 1); //remove a partir da posição 2,1 elemento

console.log(letras); //[a,b,d]

console.log(retira); //[c]
