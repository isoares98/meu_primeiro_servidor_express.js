const express = require('express');
// express é como vamos conseguir se comunicar com o servidor http

const app = express();
// app é utilizado para dizer que são metodos da minha aplicação
// app é uma instancia do objeto express

app.get('/', (requisicao, resposta) => {
    resposta.send('Essa é a minha rota principal, SEJA BEM VINDO!');
});

app.get('/home', (requisicao, resposta) => {
    resposta.send('Esse é o meu primeiro servidor com o Expresse.js');
});

app.get('/status-servidor', (requisicao, resposta) => {
    resposta.send("😎 [server]: is running! (☞ﾟヮﾟ)☞");
});

app.get('/array', (requisicao, resposta) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    resposta.send(array);
});

//listen quer dizer ouvinte
// o comando faz com que o node fique ouvindo a porta 3000
app.listen(3000);


// necessario executar o programa com o comando NODE + past, para poder utilizar no browser
// para encerrar o servidor é necessario realizar o comando node é necessario dar o comando crtl+c no terminal