import _ from 'lodash'
import './styles/app.css'

function component () {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['demo1_webpack', 'using html-webpack-plugin', '...'], ' ')

  return element
}

document.body.appendChild(component())
