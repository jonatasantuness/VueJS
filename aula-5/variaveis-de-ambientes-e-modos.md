# Variáveis de Ambiente

O VueCLI nos permite trabalhar com variáveis de ambientes e um conceito chamado 'modos'.

> os modos poder úteis quando você precisa de valores diferentes ao rodar ou buildar uma aplicação, por exemplo, quando você tem uma API que acessa um endpoint em ambiente de desenvolvimento, mas em produção acessa outro endpoint.

## Criando uma variável de ambiente
- na raiz do projeto crie um arquivo '.env' (arquivo reconhecido pelo VueCLI)
- Para podermos criar uma váriavel de ambiente e utilizarmos ela dentro de nossa aplicação (em methods, data, computeds, etc...), precisamos seguir o padrão de nome 'VUE_APP_'

> Para acessar um valor em '.env' dentro do nosso código, utilizaremos um objeto javascript muito usado em aplicações NodeJS, o 'process.env':
```
process.env.VUE_APP_URL
```

# Modos
Inicialmente um projeto VueCLI possui 3 modos:
- development: usado através do comando 'vue-cli-service serve', quando rodamos o 'npm run serve'.
- test: usado através do comando 'vue-cli-service test:unit'.
- production: usado através do comando 'vue-cli-service build and vue-cli-service test:e2e'.

> Podemos utilizar diversos arquivos '.env' e renomea-los para usar variáveis especificas em cada modo, por exemplo no arquivo '.env.development', a variável que criamos no arquivo genérico '.env' será substituida quando estivermos em ambiente de desenvolvimento.

> se o arquivo .env for nomeado com a palavra 'local', exemplo: '.env.local', o mesmo será ignorado pelo '.gitignore', pode ser usado quando se está trabalhando com dados sensíveis, tokens, etc...

> se quisermos rodar o comando 'npm run serve' com um modo específico, podemos criar um script para isso, ou simplesmente passar como parâmetro a flag '--mode' (no exemplo abaixo a flag adicional '--' serve para atribuirmos o parâmetro mode ao VueClI Service e não ao npm em si):
```
npm run serve -- --mode production
```