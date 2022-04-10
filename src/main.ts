import type { App } from 'vue'
import HelloWorld from '~/components/HelloWorld.vue'
// import 'uno.css'
// import '@unocss/reset/tailwind.css'
const lkui = {
  install: (app: App<Element>) => {
    app.component('lkui-hello', HelloWorld)
  },
}
export default lkui