import * as _ from 'lodash'
import * as jQuery from 'jquery'
function component (arr: string[]) {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(arr, ' ')

  return element
}
jQuery(function () {
  console.log('document ready ...')

  const arr : string[] = ['Demo', 'build', 'typescript', 'with', 'webpack']
  document.body.appendChild(component(arr))
})
