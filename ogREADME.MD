# Instruções para Executar o Programa
Para executar o programa de validação de cartão de crédito, siga estas instruções:

### Pré-requisitos
* Certifique-se de que você possui o Node.js instalado em seu sistema. Você pode baixá-lo em nodejs.org.

### Passos para Execução
1. **Clone o Repositório:**

* Abra o terminal ou prompt de comando.
* Execute o seguinte comando para clonar o repositório:
~~~bash
git clone <URL DO REPOSITÓRIO>
~~~
Substitua <URL DO REPOSITÓRIO> pela URL do repositório do projeto ou simplesmente copie o código-fonte para um diretório de sua escolha.

2. **Instale as Dependências:**

* Navegue para o diretório do projeto clonado:
~~~bash
cd project-directory
~~~
* Execute o seguinte comando para instalar as dependências do Node.js:
~~~bash
npm install
~~~
3. **Execute o Servidor:**

* Após a instalação das dependências, execute o servidor Node.js com o seguinte comando:
~~~bash
node app.js
~~~
Isso iniciará o servidor na porta 3000.

4. **Acesse o Aplicativo:**

* Abra um navegador da web e vá para o seguinte endereço:

http://localhost:3000

Você será direcionado para a página de validação de cartão de crédito.

# Explicação do Código

O código é dividido em várias partes, incluindo o HTML, CSS e JavaScript no lado do cliente, bem como o Node.js no lado do servidor. Vamos analisar cada parte em detalhes:

## Frontend

Vamos começar com o Frontend.

###  script.js

O JavaScript no arquivo script.js é responsável por tornar a página interativa e por lidar com o processo de validação do cartão de crédito. Aqui está uma visão geral das principais funções:

1. **document.addEventListener('DOMContentLoaded', () => { ... })**: Este é um evento DOM que aguarda o carregamento completo da página antes de executar o código dentro dele. Isso garante que o JavaScript só funcione quando o DOM estiver pronto.

2. **const form = document.getElementById('creditCardForm');**: Esta linha obtém o elemento HTML com o ID creditCardForm, que é o formulário de validação de cartão de crédito.

3. **const successIcon = document.getElementById('successIcon');** e **const failureIcon = document.getElementById('failureIcon');**: Essas linhas obtêm os elementos HTML com IDs successIcon e failureIcon, que são os ícones de validação (sucesso e falha).

4. **successIcon.style.display = 'none';** e **failureIcon.style.display = 'none';**: Essas linhas definem inicialmente a propriedade display dos ícones como "none", tornando-os invisíveis na página.

5. **form.addEventListener('submit', async (e) => { ... })**: Isso adiciona um ouvinte de evento ao formulário para capturar o evento de envio (submit) do formulário.

6. **e.preventDefault();**: Isso impede que o formulário seja enviado da maneira tradicional, que faria a página ser recarregada.

7. **const cardNumber = document.getElementById('cardNumber').value;, const expiryDate = document.getElementById('expiryDate').value;** e **const cvv = document.getElementById('cvv').value;**: Essas linhas obtêm os valores inseridos pelo usuário nos campos de entrada do formulário para número do cartão, data de validade e CVV.

8. **const response = await fetch('/validate', { ... })**: Isso envia uma solicitação POST para a rota /validate no servidor. Os detalhes do cartão são enviados como um objeto JSON no corpo da solicitação.

9. **const result = await response.json();**: Isso converte a resposta JSON do servidor em um objeto JavaScript.

10. As últimas partes do código determinam se o cartão é válido com base na resposta do servidor e exibem o ícone de validação apropriado (sucesso ou falha) na página.

O arquivo script.js é responsável por adicionar interatividade à página da web do aplicativo de validação de cartão de crédito. Ele controla o comportamento do formulário, ouvindo eventos, como o envio do formulário, coletando dados inseridos pelo usuário e enviando esses dados para o servidor backend para validação. Além disso, o script.js lida com a exibição dinâmica de ícones de sucesso ou falha de validação com base na resposta do servidor, proporcionando uma experiência de usuário interativa e informativa. Em resumo, o script.js permite que o usuário insira os detalhes do cartão, valide-os e visualize o resultado da validação na página da web.

### index.html
 Ele fornece a estrutura e o conteúdo necessários para criar a interface do usuário do aplicativo de validação de cartão de crédito, incluindo formulários, elementos de texto e ícones de validação. O JavaScript e o CSS (referenciados nos elementos <script> e <link>) são usados para adicionar interatividade e estilo à página.

 ### style.css

 O arquivo CSS (style.css) é responsável por aplicar estilos e layout à página da web do aplicativo de validação de cartão de crédito. Aqui estão detalhes sobre as principais funcionalidades e seções do arquivo:

 1. **Estilos Globais**: O arquivo CSS define estilos globais que afetam toda a página, como a escolha da fonte (font-family) e a cor de fundo (background-color) do corpo da página. Além disso, define algumas propriedades para melhorar a exibição em dispositivos móveis, como justify-content e align-items para centralizar vertical e horizontalmente o conteúdo.

2. **Estilos para a Div "container"**: A classe .container é usada para envolver todo o conteúdo da página. O CSS aplica estilos específicos a essa div, como text-align: center;, que centraliza o texto no centro da página, e margin-top para criar um espaço superior.

3. **Estilos para a Div "card"**: A classe .card é usada para estilizar a div que contém o formulário de validação de cartão de crédito. O CSS define propriedades como background-color, border-radius, box-shadow e max-width para criar um cartão com uma aparência agradável e uma sombra sutil.

4. **Estilos para o Título h1**: O CSS define estilos para o título principal da página (h1) dentro da classe .card. Isso inclui a cor do texto (color) e a margem inferior (margin-bottom).

5. **Estilos para Campos de Entrada e Rótulos (<label> e <input>)**: Os campos de entrada (número do cartão, data de validade e CVV) e seus rótulos são estilizados para terem uma largura de 100%, preenchimento (padding), margens (margin) e uma borda sutil (border). A classe .icon é usada para estilizar os ícones de validação com text-align e margin-top.

6. **Estilos para o Botão "Validate"**: O botão "Validate" recebe cores de fundo e texto, borda zero, preenchimento (padding), raio de borda (border-radius) e um cursor interativo para fornecer um botão atraente e clicável.

7. **Estilos para os Ícones de Validação**: O CSS define estilos específicos para os ícones de sucesso e falha. Eles são centralizados vertical e horizontalmente usando display: flex e justify-content: center. O ícone de falha também recebe uma cor de círculo vermelho (fill: red) e uma borda branca (stroke: white) para torná-lo mais visível.

Essas são as principais funcionalidades e seções do arquivo CSS (style.css). Ele desempenha um papel crucial na aparência e no layout da página da web do aplicativo de validação de cartão de crédito, tornando-a atraente e responsiva, ao mesmo tempo que fornece uma experiência de usuário agradável.

## Backend

### app.js

O servidor backend é criado com Node.js e Express.js e desempenha um papel fundamental na validação dos detalhes do cartão de crédito. Aqui está uma visão geral das principais funções:

1. **const app = express();** e **const port = 3000;**: Aqui, o Express.js é inicializado e o número da porta (3000) é definido para o servidor.

2. **app.use(bodyParser.json());**: Isso permite que o servidor analise solicitações com corpo JSON.

3. **app.use(express.static(path.join(__dirname, 'public')));**: Isso serve arquivos estáticos (HTML, CSS, JavaScript) da pasta public para que o navegador possa acessá-los.

4. **app.get('/', (req, res) => { ... });**: Isso define uma rota GET para a raiz do aplicativo, que serve o arquivo HTML principal da pasta public.

5. **app.post('/validate', (req, res) => { ... });**: Isso define uma rota POST para /validate que lida com a validação do cartão de crédito com base nos detalhes recebidos no corpo da solicitação. Os detalhes específicos da validação não estão incluídos neste código, mas essa é a função responsável por lidar com a validação.

6. **app.listen(port, () => { ... });**: Isso inicia o servidor na porta especificada (3000) e exibe uma mensagem no console quando o servidor estiver em execução.

Em resumo, o código JavaScript no lado do cliente (script.js) lida com a interatividade da página da web, enquanto o código JavaScript no lado do servidor (app.js) usa o Express.js para criar um servidor Node.js que lida com as solicitações HTTP, incluindo a validação do cartão de crédito. As funções no lado do cliente são acionadas por eventos do usuário, como o envio do formulário, enquanto as funções no lado do servidor são acionadas pelas rotas definidas no Express.js.

### Resumo

O aplicativo de validação de cartão de crédito é construído usando HTML, CSS, JavaScript, Node.js e Express.js. Sua lógica pode ser dividida em duas partes principais: frontend e backend.

No frontend (JavaScript - script.js), o código lida com a interação do usuário e a comunicação com o servidor. Ele aguarda o carregamento completo da página, coleta dados do formulário, envia uma solicitação POST ao servidor com esses dados e exibe ícones de sucesso ou falha de validação com base na resposta do servidor. A escolha do JavaScript no frontend permite uma experiência interativa para os usuários.

No backend (Node.js - app.js), o servidor Express é configurado para lidar com solicitações HTTP. Ele serve recursos estáticos (HTML, CSS, JavaScript) e define rotas para a página principal e validação de cartão de crédito. A lógica de validação do cartão de crédito inclui verificações detalhadas, como comprimento do número do cartão, formato da data de vencimento e comparação com a data atual. O servidor responde com um indicador de sucesso ou falha com base na validação.

A escolha de Node.js e JavaScript tanto no frontend quanto no backend oferece um ambiente de desenvolvimento coeso e eficaz para criar um aplicativo web interativo e responsivo de validação de cartão de crédito. O código é estruturado de forma a permitir aos usuários inserir detalhes do cartão, validar instantaneamente esses detalhes e visualizar o resultado da validação na página da web.