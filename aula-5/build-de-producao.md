# Build de Produção

Durante o build de produção, o VueCLI faz um série de otimizações na aplicação, minifica o código, ofusca, remove o compilador do Vue e deixa da melhor forma para colocarmos a aplicação em um ambiente real.

Se rodarmos o comando 'npm run build', rodaremos o build em modo production, mas se quisermos rodar um build para produção com o modo desenvolvimento podemos utilizar os parametros de modo.

```
npm run build -- --mode development
```

O build vai gerar a pasta a 'dist' com os arquivos otimizados, este diretório é destinado à ser servido sobre o protocolo HTTP, então se abrirmos o arquivo 'index.html' diretamente por meio do protocolo file, não irá funcionar, se quisermos ver esse arquivos 'rodando', devemos acessar a pasta dist e rodar algum servidor local, por exemplo, podemos usar o npx para rodar um servidor local (sem instalar na maquina globalmente) e a flag '-o' para abrir a aplicação no browser.

```
cd dist
npx http-server -o
```

No processo de build em modo padrão (production), o código final fica minificado e ilegível, o js e css são separados entre o nosso código e o código de terceiros.