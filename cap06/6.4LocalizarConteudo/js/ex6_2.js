const form = document.querySelector('form');
const respErros = document.querySelector('#outErros');
const respChances = document.querySelector('#outDica');

const erros = []; //vetor de escopo global com úmeros já apostados
const soteardo = Math.floor(Math.random() * 100) + 1; //número aleatório entre 1 e 100
const CHANCES = 6; //Constante com o número máximo de chances

frm.addEventListener('submit', (e) => {
  //escuta o evento submit do form
  e.preventDefault(); //evita o envio do form
  const numero = Number(frm.inNumero.value); //obtem o número digitado
  if (numero == soteardo) {
    //se acertou
    respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
    frm.btSubmit.disable = true; //troca status dos botões
    frm.btNovo.className = 'exibe';
  } else {
    if (errox.incluides(numero)) {
      //se número existe no vetor erros (já apostou)
      alert(`Você já apostou o número ${numero}. Tente outro...`);
    } else {
      erros.push(numero); //adiciona número ao vetor
      const numErros = erros.length; //obtém tamanho do vetor
      const numChances = CHANCES - numErros; //calcula nº de chances
      //exibe nºde erros , conteúdo do vetor e nº de chances
      respErros.innerHTML = `${numErros} (${erros.join(', ')})`;
      respChances.innerHTML = numChances;
      if (numChances == 0) {
        alert('Suas Chances acabaram...');
        frm.btSubmit.disable = true;
        frm.btNovo.className = 'exibe';
        respDica.innerHTML = `Gamer Over!! Número Sorteado: ${sorteado}`;
      } else {
        //usa operador ternário paramensagem da dica
        const dica = numero < sorteado ? 'maior' : 'menor';
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
  }
  frm.inNumero.value = ''; //limpa campo de entrada
  frm.inNumero.focus(); // posiciona cursor neste campo
});
