import SvgIcon from './SvgIcon.vue'
import type { App, Component } from 'vue'

const allComponents: { [name: string]: Component } = { SvgIcon }
export default {
  install(app: App) {
    Object.keys(allComponents).forEach((item) => {
      app.component(item, allComponents[item])
    })
  },
}
