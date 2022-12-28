import _ from 'lodash'
import hello from './js/hello'
import './styles/app.css'

function component () {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['demo2', 'development', 'webpack-dev-server'], '/')

  return element
}

document.body.appendChild(component())
hello('ManNV')
