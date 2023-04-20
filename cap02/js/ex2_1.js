// Cria referencia ao Form e ao elemento h3 (Ond será exibida a resposta)
const frm = document.querySelector('form');
const resp = document.querySelector('h3');

//Cria um "Ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener('submit', (e) => {
  const nome = frm.InNome.value; // Obtém o nome digitado no form
  resp.innerText = `Olá ${nome}`; //exibe a resposta do programa                                          //
  e.preventDefault(); // Evita envio do form
});
