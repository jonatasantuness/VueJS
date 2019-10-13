# Build Targets

O VueCLI nos permite empacotar a nossa aplicação ou um Single File Component para 3 alvos diferentes, esse recurso se chama 'Build Targets'.

Os 3 alvos no qual podemos exportar nossa aplicação são:

## Vue App
É a forma padrão, exportamos nossa aplicação com uma aplicação Vue, vimos isso quando geramos o build para produção.

Para exportar de uma forma específica usamos o seguinte comando:

```
vue build --target app
```

> neste caso, como o target app é o dafault, não é necessário digia-lo, pode-se usar somente 'vue build'

Esse tipo de exportação inclui o nosso código mais o Vue Framework.

## Vue Library
Podemos exportar como biblioteca, pode ser útil quando queremos exportar nossa biblioetca de componentes Vue. (o Vuetify por exemplo é um biblioteca que podemos reutilizar em nosso código)

```
vue build --target lib
```

Isso gera um pacote Vue distribuivel (ex: npm) somente com o código (sem o Vue Framework). Na pasta dist serão exportados os arquivos js e css (se tiver), os scripts terão versões em CommonJS e em UMD.

> o nome do pacote será retirado da propriedade 'name' do package.json, porém se quiser um nome direferente só adicionar a flag ao comando de build:

```
vue build --target lib --name nome-do-pacote nome-do-pacote.vue
```

## Web Component
Podemos exportar a aplicação ou o Single File Component como um Web Component, que são elementos HTML customizados.

```
vue build --target wc
```

Esse export gera um Web Component Distribuivel que pode ser usado em qualquer aplicação que utilize o Vue, inclui somente o código sem o Vue Framework.
