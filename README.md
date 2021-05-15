
Para executar o projeto em  ambiente de desenvolvimento é precisso dar o comando no terminal.

`yarn dev`  para subir o servidor depois abrir um novo terminal e executar o comando abaixo.

`npx lite-server` carregar um servidor no front. dessa forma o projeto é carregado corretamente. 
http://localhost:3000

Criei o Projeto subindo o servidor e depois buscando a API de ceps, tratei a entrade de dados no front-end para o usuario ter um retorno visual
do que estava acontecendo em quanto aguarda o retorno da API.
Depois que a API traz o retorno, é criado um mock com os dados que serão enviados para o o front-end,
caso esse retorno venha com um erro, vão ser acrescentados 0 da direita para esquerda até localizar um cep, se não conseguir localizar, vai retornar a informação que o cep não foi encontrado.

Criei 2 teste de rotas utilizando o jest, um para verificar o status da rota, e outro para verificar as propriedades retornadas.

Utilizei a estrutura MVC para gerenciar os arquivos, essa é a estrutura que uso em todos meus projetos, ainda não encontrei um problema que me faça 
utilizar outro modelo de estrutura.

Conheço js a um bom tempo desenvolvendo front-end, por isso optei por trabalhar com Nodejs na parte do servidor, como é a mesma linguagem 
facilita o aprendizado.





1 ) Iniciando projeto
`yarn init -y`
`yarn add express nodemon cors axios`

`express` da suporte na criação da API

`nodemon` reinicia um servidor toda vez que o arquivo é alterado

`cors` auxilia controle das API's

`axios` auxilia na chamada das API's 

2 ) Subir o servidor e criar uma rota

3 ) retornar um json

4 ) Criar Front-end

5 ) Subir front-end `yarn lite-server`

6 ) `Cors` Configurado

7 ) `nodemon` Configurado

8 ) Tratar cep 

9 ) `yarn add jest -D` Para criar testes

10 ) `yarn add supertest -D` para conseguir testar as rotas

11 ) Criar Testes

12 ) Subindo para o Bitbucket



1 - Expor um serviço de BUSCA DE CEP

    Eu, como usuário, quero informar meu CEP e obter o nome da minha 
    RUA, BAIRRO, CIDADE e ESTADO para preencher meus dados de cadastro de forma automática.
    Os critérios de aceite dessa história são:
      X  · Dado um CEP válido, deve retornar o endereço correspondente
      X  · Dado um CEP válido, que não exista o endereço, deve substituir um dígito da direita para a esquerda por zero até que o endereço seja localizado (Exemplo: Dado 22333999 tentar com 22333990, 22333900 …)
      X  · Dado um CEP inválido, deve retornar uma mensagem reportando o erro: "CEP inválido"O que se espera para as questões 1  - dicas e direcionamentos:
      X  · Os serviços devem receber e responder JSON;
      X · Faça o uso de Mocks principalmente nos testes;
      X · Os dados dos CEPs podem ser "Mocados";
      X  · Pense em como documentar os cenários desenvolvidos (Testes sempre são uma boa forma de documentar);
      X · Ao finalizar o desenvolvimento você pode compartilhar o código pelo Github ou de outra maneira que preferir (como arquivo compactado). Se possível, em caso de arquivo compactado, envie o mesmo para um virtual drive e compartilha o link na prova;
      X · Fique a vontade para entrar em contato e tirar dúvidas;
      X · Juntamente com o Código, deve-se documentar a estratégia utilizada para a criação da aplicação, a arquitetura utilizada e os padrões. A documentação pode ser feita via GIT/Bitbucket ou adicionado no HackerRank. Isto faz parte da avaliação da prova.
      X · Em caso de uso do Git/Bitbucket não esqueça de criar o .gitignore.
    Extras:
      X  - preferencialmente use um versionador e faça commits granulares;
      ? - api com autorização;
      X - boas práticas de design de api;
      ? - swagger com a documentação;
      X  - tecnologias preferenciais: java ou node.js/nest.js - justifique, no readme a escolha da tecnologia.
    Extras plus plus master (não é mandatório, apenas diferencial se vc tiver tempo e conhecimento):
        - logs estruturados;
        - endpoint para saúde da aplicação;
        - endpoint para métricas da aplicação;
        - considere a performance do algoritmo e o tempo de resposta da aplicação, sabendo que a API  pode receber flutuações de tráfego agressivas.
2 - Quando você digita a URL de um site (http://www.netshoes.com.br) no browser e pressiona enter, explique da forma que preferir, o que ocorre nesse processo do protocolo HTTP entre o Client e o Server.
   
Quando solicitamos a URL  http://www.netshoes.com.br as informções que vem antes dos : é o nosso protocolo,
neste caso sendo o "http" que é um conjunto de regras que definem um tipo de comunicação, permitindo que o 
cliente dispare o caminho www.netshoes.com.br para o servidor, se o caminho estiver correto e o servidor entender
as requisições, ele vai responder devolvendo as informações que estão guardadas nele.
    

"Faça o teu melhor, na condição que você tem, enquanto você não tem condições melhores, para fazer melhor ainda!"