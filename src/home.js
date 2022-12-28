import _ from 'lodash'

const members = ['Man', 'Luong', 'Tai']

const name = 'Luong'

const isExist = _.find(members, item => item === name)
if (isExist) {
  console.log(`Tồn tại member có tên: ${name}`)
} else {
  console.log(`Không tồn tại member có tên: ${name}`)
}
