import SvgIcon from './SvgIcon.vue'

const allComponents = { SvgIcon }
export default {
  install(app) {
    Object.keys(allComponents).forEach((item) => {
      app.component(item, allComponents[item])
    })
  },
}
