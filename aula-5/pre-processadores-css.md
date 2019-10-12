# Pré Processadores CSS

Projetos VueCLI nos permitem trabalhar com pré processadores de CSS como Sass, Less e Stylus e possui suporte para PostCSS e CSS Modules.

Caso não tenha selecionado a opção de pré processador na configuração inicial do projeto (como neste caso), não é necessário iniciar um novo projeto, basta configurá-lo.

Vamos pegar como exemplo o SCSS, Para o VueCLI Service reconhecer o código, é necessário informa-lo na propriedade 'lang':
```scss
<style lang='scss'>
  $color-red: red;

  h1 {
    color: $color-red;
  }
</style>
```

Para compilação é necessário um 'loader' que faz o 'parse' dessa linguagem, para instalá-lo precisamos de 2 pacotes:

> o 'sass-loader' será utilizado internamente pelo VueCLI Service e pelo Webpack, para podermos extrair o bloco de código SASS/SCSS do single file component.

> o 'node-sass' para compilar nativamente o código SASS/SCSS.
```
npm install -D sass-loader node-sass
```