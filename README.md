Este repositório contém um módulo Node.js que gera nomes aleatórios e pode ser publicado no npm. O projeto segue o formato de módulos ECMAScript (ESM) e está preparado para ser utilizado tanto localmente quanto como um pacote público.

Antes de iniciar, verifique se você tem os seguintes itens instalados no seu sistema:
•	Node.js (versão mais recente •	Conta no GitHub
Conta no npm 

Baixe e instale o Git

Baixe e instale o Node.js

Após a instalação, verifique se o Git e o Node.js estão instalados corretamente executando os seguintes comandos no terminal

git --version
node -v
npm -v

Acesse GitHub e crie um novo repositório chamado cp-04-web.
2.	Clone o repositório na sua máquina

Agora, dentro do diretório do projeto, execute

npm init --scope=@nomedeusuario

Edite o package.json e adicione a seguinte linha para ativar os módulos ECMAScript:

"type": "module"

Crie um arquivo chamado index.js e adicione o seguinte código:

export default function fakename() {
    const first = ['Ana', 'Bia', 'João', 'Julio'];
    const last = ['Alface', 'Melão', 'Goiaba', 'Cenoura'];
    let firstName = first[Math.floor(Math.random() * first.length)];
    let lastName = last[Math.floor(Math.random() * last.length)];
    return `${firstName} ${lastName}`;
}

Crie um arquivo chamado teste.js e adicione o seguinte código:

import fakename from "./index.js";
console.log(fakename());

No terminal, rode o seguinte comando:

node teste.js

Publicando no npm, para tornar público:

npm publish --access public

Acesse npmjs.com e procure por @my-username/cp-04-web