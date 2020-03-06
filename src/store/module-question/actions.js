import axios from 'axios'

export function loadData (context, ipText) {
  console.log('Function called')

  axios
    .post('http://127.0.0.1:5000/submit', {
      text: ipText
    })
    .then(res => {
      context.commit('addQuestions', res)
      this.$router.push('/questions')
    })
    .catch(err => {
      console.log(err)
    })
}
