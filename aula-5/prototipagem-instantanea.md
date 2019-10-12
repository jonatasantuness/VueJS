# Prototipagem Instantânea (Instant Prototyping)

O Vue possui um recurso para testar arquivos .vue rapidamente sem precisar criar um projeto novo do zero, para isso é necessário instalar a depêndencia 'cli-service-global' de forma global.

```
npm install -g @vue/cli-service-global
# ou
yarn global add @vue/cli-service-global
```
Ao instalar esse pacote, temos acesso globalmente aos comandos 'vue serve', 'vue build', entre outros.

Para rodarmos o lint em um arquivo .vue com o cli-service-global podemos usar o seguinte comando:
```
npm run lint -- nome-do-arquivo-vue
```