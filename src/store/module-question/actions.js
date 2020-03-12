import axios from 'axios'
import { Notify } from 'quasar'

export function loadData (context, ipText) {
  console.log('Function called')

  axios
    .post('http://127.0.0.1:5000/submit', {
      text: ipText
    })
    .then(res => {
      if (res.status === 403) {
        this.$router.push('/login')
      } else {
        // Todo: check if the returned questions is greater then 0 then only go to questions page
        context.commit('addQuestions', res)
        this.$router.push('/questions')
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export function login (context, data) {
  console.log(data.username)
  console.log(data.password)
  axios
    .post('http://127.0.0.1:5000/login', {
      username: data.username,
      password: data.password
    })
    .then(res => {
      if (res.status === 200) {
        axios.defaults.headers.common.Authorization = res.data.token
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username', res.data.username)
        this.$router.push('/')
      }
    })
    .catch(err => {
      console.log(err)
      console.log('Invalid Credentials')
      Notify.create({
        type: 'warning',
        color: 'warning',
        timeout: 1000,
        position: 'center',
        message: 'Invalid Credentials'
      })
    })
}

export function signUp (context, data) {
  axios
    .post('http://127.0.0.1:5000/register', {
      username: data.username,
      phone: data.phone,
      email: data.email,
      password: data.password
    })
    .then(res => {
      console.log(res)
      console.log(res.status)
      // context.commit('addQuestions', res)
      // this.$router.push('/questions')
    })
    .catch(err => {
      console.log(err)
    })
}
