## Projeto Webchat

> Décimo segundo projeto do módulo de Back-end do curso de desenvolvimento web da [Trybe](https://www.betrybe.com/)

**Contexto**

No bloco desse projeto somos apresentados ao padrão arquitetural MVC (Model-View-Controller) utilizando EJS (Embedded JavaScript) como *template engine*. Esse projeto exemplifica uma aplicação utilizando esse padrão e corresponde a um webchat construído com o pacote Socket.io. Essa ferramenta orientada a eventos permite a criação de aplicações em tempo-real, como aplicativos de mensagens instantâneas, streaming e colaboração em documentos.

**Objetivo do projeto**

Desenvolver uma aplicação Node.js de _chat_ online usando socket.io para emitir eventos e atualizar estado no servidor e cliente.
O MVC será usado para renderizar as mensagens do histórico e usuários online, com ambos vindo direto do servidor.
Ao utilizar essa aplicação um usuário deverá ser capaz de:

 - Usar um front-end para enviar mensagens a clientes conectados;
 - Visualizar o histórico de mensagens da conversa;
 - Visualizar os usuários online no momento;
 - Alterar o nome de usuário no chat em tempo real;

**Principais habilidades desenvolvidas nesse trabalho**

- Conseguir desenvolver um server socket usando o socket.io;
- Emitir eventos personalizados usando o socket.io;
- Usar o pacote `socket.io` do Node.js para criar aplicações que trafeguem mensagens através de sockets.

**Tecnologias utilizadas**
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" align="center" height="30"/> - JavaScript</a>
- <a href="https://nodejs.org"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" title="Node.js" align="center" height="35"/> - Node.js</a>
- <a href="https://expressjs.com"><img src="https://images.tute.io/tute/topic/express-js.png" title= "Express" align="center" height="35"/> - Express</a>
- <a href="https://www.mongodb.com/"><img src="https://www.svgrepo.com/show/331488/mongodb.svg" title="MongoDB" align="center" height="34"/> - MongoDB</a>
- <a href="https://socket.io/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png" title= "Socket.io" align="center" height="38"/> - Socket.io</a>

---

### Lista de requisitos propostos pela Trybe:

#### Obrigatórios

#### 1 - Crie um back-end para conexão simultânea de clientes e troca de mensagens em chat público.

#### ⚠️ &nbsp; DICA: Para desenvolver esse requisito não é necessário se conectar ao banco de dados.

- Sua aplicação deve ser inicializada no arquivo `server.js`;

- Seu back-end deve permitir que vários clientes se conectem simultaneamente;

- Seu back-end deve permitir que cada cliente mande mensagens para todas os outros clientes online de forma simultânea;

- Toda mensagem que um cliente recebe deve conter as informações acerca de quem a enviou: _nickname_ (apelido), data-hora do envio e o conteúdo da mensagem em si.

 - O evento da mensagem deve ter o nome `message` e deve enviar como parâmetro o objeto `{ chatMessage, nickname }`. O `chatMessage` deve ser a mensagem enviada enquanto o `nickname` deverá ser o apelido de quem a enviou;

 - A data na mensagem deve seguir o padrão 'dd-mm-yyyy' e o horário deve seguir o padrão 'hh:mm:ss' sendo os segundos opcionais;

 - O formato da mensagem deve seguir esse padrão:

`DD-MM-yyyy HH:mm:ss ${nickname} ${chatMessage}`

- Exemplo prático:

`09-10-2020 2:35:09 PM - Joel: Olá meu caros amigos!`

- O back-end deve enviar a mensagem ao front-end **já formatada**, ela deve ser uma `string`, como no exemplo acima;

- Tanto o evento enviado do cliente para o servidor, como do servidor para o cliente deve ser **message**.


#### 2 - Crie um frontend para que as pessoas interajam com o chat.

#### ⚠️ &nbsp; DICA: Para desenvolver esse requisito não é necessário se conectar ao banco de dados.

#### ⚠️ &nbsp; DICA: Para facilitar armazenar e/ou recuperar o _nickname_ do cliente, lembre-se de usar o _sessionStorage_.

- O front-end e o back-end têm que usar a mesma porta - `localhost:3000`;

- O front-end deve gerar um um _nickname_ **aleatório de 16 caracteres** quando um novo cliente se conecta, para identificar quem está enviando a mensagem.
  - O elemento com o nome do cliente deve conter o `data-testid="online-user"`.

- O front-end deve ter uma caixa de texto através da qual seja possível enviar mensagens para o _chat_:
  - A caixa de texto deve conter o `data-testid="message-box"`;
  - O botão de enviar mensagem deve conter o `data-testid="send-button"`.

- As mensagens devem ser renderizadas na tela;
  - Cada mensagem deve conter o `data-testid="message"`.

- O front-end deve exibir todas as mensagens já enviadas no _chat_, ordenadas verticalmente da mais antiga para a mais nova _(as mensagens mais recentes devem aparecer abaixo das mensagens mais antigas)_;

- O front-end deve permitir a quem usa escolher um apelido (_nickname_) para si. Para que a pessoa usuária consiga escolher um apelido, o front-end deve ter um campo de texto e um botão. O campo de texto será onde a pessoa digitará o _nickname_ que deseja. Após escolher o _nickname_, o cliente deverá clicar no botão para que o dado seja salvo:
  - O campo onde o _nickname_ será inserido deve conter o `data-testid="nickname-box"`;
  - O botão que será clicado para salvar o _nickname_ deve conter `data-testid="nickname-button"`;
  - Ao salvar o _nickname_ ele deve ser atualizado para todos os clientes conectados.

#### 3 - Elabore o histórico do chat para que as mensagens persistam.

#### ⚠️ &nbsp; DICA: Para desenvolver esse requisito é estritamente necessário se conectar ao banco de dados.

#### ⚠️ &nbsp; DICA: Uma boa forma de renderizar o histórico de mensagens via HTML é usando uma template engine _(exemplo: EJS)_.

#### ⚠️ &nbsp; DICA: Lembre-se de aplicar a arquitetura MVC.

- Você deve configurar o banco de dados `webchat` com uma coleção chamada `messages`, em que cada documento representa uma mensagem;

- O seu banco de dados deve salvar o _nickname_ de quem enviou a mensagem, a mensagem em si e uma _timestamp_ com precisão de segundos de quando ela foi salva no banco;

  - Exemplo de um documento:
      ```js
      {
        message: 'Lorem ipsum',
        nickname: 'xablau',
        timestamp: '2021-04-01 12:00:00'
      }
      ```

- Envie o histórico de mensagens salvo no banco via `html` quando um novo cliente se conectar.

#### 4 - Informe a todos os clientes quem está online no momento.

#### ⚠️ &nbsp; DICA: Para desenvolver esse requisito não é necessário se conectar ao banco de dados.

- No front-end deve haver uma lista na tela de cada cliente que mostra quais clientes estão _online_ em um dado momento. Um cliente é identificado pelo seu _nickname_.
  - O elemento com o nome do cliente deve conter o `data-testid="online-user"`;
  - Quando um cliente se conecta, a lista de clientes deve ser atualizada para todos:
      - Para o cliente que acabou de se conectar, seu nickname deve ser colocado no começo da lista;
      - Para os demais clientes, o nickname do cliente que acabou de se conectar deve ser colocado no final da lista.
  - A lista de clientes _online_ deve ser renderizada no `html` ao carregar a página;
  - Quando um cliente atualiza seu _nickname_ a lista de clientes deve ser atualizada para todos da mesma forma.

---

[Ir para a lista de projetos](https://github.com/willian-prado/trybe-records)
