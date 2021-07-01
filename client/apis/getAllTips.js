import request from 'superagent'

const rootUrl = '/api/v1'

// export function getFruits () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }

export function getAllTips () {
  return request.get(rootUrl + '/all')
    .then(res => {
      return res.body
    })
}
