import SvgIcon from './SvgIcon.vue'

const allComponents = { SvgIcon }
export default {
  // @ts-ignore
  install(app) {
    Object.keys(allComponents).forEach((item) => {
      // @ts-ignore
      app.component(item, allComponents[item])
    })
  },
}
