const fs = require('fs');

function carregarModulo(nomeDoArquivo) {
  const conteudo = fs.readFileSync(nomeDoArquivo, 'utf-8');
  return conteudo;
}

console.log(carregarModulo('./exemplo/entry.js'));

