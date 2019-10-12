# Plugins

O VueCLI usa uma arquitetura baseada em plugins, se analisarmos o package.json veremos que inclusive já temos alguns plugins instalados como:

```
@vue/cli-plugin-babel
@vue/cli-plugin-eslint
@vue/cli-service
@vue/eslint-config-standard
```

Os plugins modificam a configuração interna do Webpack tornando o projeto flexível e extensível.

Os plugins oficiais do Vue começam com:
```
@vue/cli-plugin-{nome-do-plugin}
```

Os plugins desenvolvidos pela comunidade normalmene começam com:
```
vue-cli-plugin-{nome-do-plugin}
```

## Adicionando plugins à aplicação

### instalando novos plugins
```
vue add {nome-do-plugin}
```

>em alguns casos não é necessário digitar o nome completo do plugin, como por exemplo, ao invés de digitar 'vue-cli-plugin-vuetify', podemos digitar 'vue add vuetify'. Para plugins oficiais o atalho é @vue/{nome-do-plugin}.

### Exibindo as opções do vue add
```
vue add --help
```

## Pacotes NPM

Além de instalar plugins, podemos instalar pacotes NPM normalmente no projeto, como por exemplo:
```
npm i --save lodash
```