# Seção 5: Trabalhando com Vue CLI

## Criando projetos com o Vue Create

### Instalação do Vue CLI
```
npm install -g @vue/cli
```
ou
```
yarn global add @vue/cli
```
### Help do Vue CLI
```
vue --help
```
ou
```
vue -h
```

### Versão do Vue CLI
```
vue --version
```
ou
```
vue -V
```
### Criar um novo projeto
```
vue create project-name
```
> Inicia um novo projeto em Vue, podendo escolher um setup default ou a configuração de um setup customizado.

### Rodar o projeto em um servidor local
```
npm run serve
```

## Estrutura do Projeto
| Arquivo        | Função           |
| -------------- |:-----------------|
| postcss.config.js | Configuração do PostCSS e da build de arquivos CSS.
| package.json | Configuração das dependências de produção e de desenvolvimento. |
| babel.config.js | Configuração do 'presets' para a compilação do JS.
| .eslintrc.js | Regras do ESLint.
| .browserslistrc | Indica quais versões de browsers a aplicação deve suportar através de 'queries', o mesmo será lido pelo Babel e pelo PostCSS.
| src | Diretório onde desenvolvemos o código Vue.
| src/main.js | Arquivo que configura a instância raiz do Vue na aplicação.
 src/App.vue | Arquivo que possui 'single files components', com as tags de templates, código Javascript com exports de instâncias do componente e CSS. Como o Vue trabalha com o Webpack, cada bloco de código será extraido no processo de build e colocado em um único arquivo correspondente ao seu formato.
 | src/componentes | Diretório onde colocamos os 'single file components', componentes da aplicação.
 | src/assets | Recursos estáticos, como imagens por exemplo, durante o build, o Webpack processa esse diretório e faz otimizações nos arquivos.


### Referências
- [Browserlist queries](https://github.com/browserslist/browserslist)