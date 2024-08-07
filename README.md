
<h1 align="center">BluePen - Dashboard</h1>

BluePen - Dashboard é um _software_ desenvolvido e pensado para atender a demanda do mercado sobre softwares de gerenciamento de seus clientes para ter um melhor controle de seus ganhos. 


## Tecnologias Utilizadas

- `HTML`
    - HTML, ou _HyperText Markup Language_, é a linguagem de marcação utilizada para criar páginas _Web_. Ele fornece uma estrutura básica para organizar o conteúdo da página, usando _Tags_ para definir elementos como cabeçalhos, parágrafos, imagens, _links_ e listas.

- `CSS`
    - CSS, ou _Cascading Style Sheets_, é uma linguagem de estilo utilizada para controlar a apresentação visual de páginas web escritas em HTML. Com o CSS, é possível definir o layout, as cores, as fontes, o espaçamento e outros aspectos visuais de elementos HTML, separando assim o conteúdo da sua apresentação.

- `JavaScript`
    - JavaScript é uma linguagem de programação utilizada principalmente no desenvolvimento _Web_ para tornar as páginas interativas e dinâmicas. Com JavaScript, é possível controlar o comportamento dos elementos HTML, responder a eventos do usuário, manipular dados e modificar o conteúdo da página em tempo real. 

- `FireBase`
    - FireBase é uma plataforma de desenvolvimento de aplicativos móveis e _Web_ fornecida pelo Google. Ele oferece uma variedade de serviços prontos para uso, incluindo armazenamento em nuvem em tempo real, autenticação de usuários, análise, testes de aplicativos, mensagens e muito mais.

- `Google Chart`
    - O Google Charts é uma ferramenta de visualização de dados desenvolvida pelo Google, que permite criar gráficos interativos e personalizáveis para exibir informações de maneira visualmente atraente em páginas da web.

- `Node.js`
    - Node.js é um ambiente de tempo de execução JavaScript de código aberto, construído sobre o motor V8 do Google Chrome. Ele permite que os desenvolvedores executem código JavaScript no lado do servidor, em vez de apenas no navegador, o que o torna ideal para desenvolvimento de aplicativos web escaláveis e em tempo real.

  
## Como foram feitas as telas?

Usando linguagem de marcação HTML para aderir os elementos na tela e linguagem de estilização CSS criamos nossas telas semânticas, responsivas e bem estilizadas. Iniciamos com nossa _index_, uma tela de _login_ conectada ao FireBase para fazer a validação das informações passadas pelo usuário, em seguida temos as nossas _mains_, com uma _navbar_ em sua lateral para acessarmos as outras telas como: cadastro de cliente, configurações, _logout_ e etc.
Nossas _mains_ fazem sua função de tela _Home_, exibindo em seu painel as _Dashboards_ que disponibilizaremos para nossos clientes, e pensando agora em nossos desenvolvedores, para gerirmos a entrada de usuários do sistema, criamos nossa _mainAdmin_, que será utilizada para fazer a gestão dos usuários com a permissão de utilizar o _software_.


## Explorando nosso Projeto

- `Funcionalidades ADM`
    - O administrador tem o monitoramento por meios de graficos para saber o número de adiministradores, números de usuários, números de clientes, de usuário e os planos de cada usuário registrado.
    - O administrador pode adicionar usuário, editar e remover.

- `Funcionalidades do Cliente`
    - O cliente consegue visualizar gráficos que mostram a quantidade de usuários cadastrados e os planos de cada cliente.


## Back-End

O Back-End da nossa aplicação engloba tanto na utilização da biblioteca do Google Charts para fazer a conexão e passar os dados necessários para visualização no gráfico, como também em nosso banco de dados (FireBase) utilzando 3 aplicações necessárias, sendo estas: 
 - _Authentication_: Para validar o login dos usuários tanto o Email como a senha.
 - FireBase: Utilzando para armazenagem de dados dos usuário, administradores e clientes.
 - _App Compat_: Utilizamos para fazer as ligações dessas funções.

 Por último e não menos importante, utilizamos o Back-End para fazer as funções de editar e deletar, que seram ultilizads para os administradores gerenciar o uso dos clientes e para os clientes gerenciarem seus usuários.

 
## Documentação da API

#### Busca de Dados 

```http
  Localhost:3000/api/informacoes/cpf
```
| Parâmetro        | Tipo       | Descrição                           |
| :----------------| :----------| :---------------------------------- |
| `CPF`            | `const`    | Retorna os dados do cliente, apartir de uma busca feita com uso do CPF |

#### Retorna: 
- Email
- Ramo
- Nome


## Conclusão

O _software_ de monitoramento de assinaturas de clientes é uma solução robusta e eficaz projetada para acompanhar e analisar o _status_ das assinaturas dos clientes em tempo real. A integração de uma _Dashboard_ intuitiva e dinâmica permite que os usuários visualizem dados relevantes de forma clara e concisa, possibilitando uma tomada de decisão mais informada e ágil.


## Autores

Equipe:

- [Thiago Bastos](https://github.com/Thiago-bsts)
- [Victor Reis](https://github.com/Vitelfs)
- [Gabriel Maier](https://github.com/gabrielmaierbr)
- [Gabriel Dutra](https://github.com/dultra)
- [Arthur Pacheco](https://github.com/ArthurPach)

