import touches from './directive'
const vue2Touch = {
  install: function(Vue, options) {
    console.log(options)
    touches.config(options)
    Vue.directive('touch', touches)
  }
}
export default vue2Touch