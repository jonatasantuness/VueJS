// Importando arquivos do Vue com o recurso ES Modules do ES6
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

// Configuração global que indica se o Vue deve exibir uma mensagem informando que está rodando em modo de desenvolvimento
Vue.config.productionTip = false

// Instância Vue montada no elemento com id 'app'
new Vue({
  vuetify,

  // Função de renderização que espera um template como parâmetro para ser compilado, neste caso, o App, o elemento #app no index será substituído pelo conteúdo do componente root App.vue
  render: h => h(App)
}).$mount('#app')
