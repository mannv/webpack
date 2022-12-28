import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'

import * as jQuery from 'jquery'
function createRootElement () {
  const element = document.createElement('div')
  element.id = 'app'
  return element
}
jQuery(function () {
  console.log('document ready ...')
  document.body.appendChild(createRootElement())
  createApp(App).mount('#app')
})
