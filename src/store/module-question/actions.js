import axios from 'axios'
import { Notify, LocalStorage } from 'quasar'

export function loadData (context, ipText) {
  console.log('Function called')

  axios
    .post('http://127.0.0.1:5000/submit', {
      text: ipText
    })
    .then(res => {
      // Todo: check if the returned questions is greater then 0 then only go to questions page
      context.commit('addQuestions', res)
      context.commit('activateRightDrawerOptions', 2)
      this.$router.push('/questions')
    })
    .catch(err => {
      // if token is expired
      // if (err.status === 403) {
      // this.$router.push('/login')
      // }
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
      Notify.create({
        type: 'warning',
        color: 'warning',
        timeout: 3000,
        position: 'bottom',
        message: 'Invalid Credentials'
      })
    })
}

export function getSelectionStatus (context, question) {
  context.state.questions.find(function (element) {
    if (element.question === question) {
      if (element.isSelected === 'false') {
        return false
      } else {
        return true
      }
    }
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
      this.$router.push('/login')
      Notify.create({
        type: 'positive',
        color: 'primary',
        timeout: 3000,
        position: 'bottom',
        message: 'Please Login to continue !'
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export function goToPage (context, index) {
  var sel = this
  context.state.rightDrawerList.find(function (e) {
    if (e.index === index) {
      sel.$router.push(e.goto)
    }
  })
}

export function getTextHistory (context) {
  console.log('textHistory called')
  LocalStorage.remove('textHistory')
  var username = localStorage.getItem('username')

  axios
    .post('http://127.0.0.1:5000/getText', {
      username: username
    })
    .then(res => {
      LocalStorage.remove('textHistory')
      LocalStorage.set('textHistory', res.data)
      this.$router.push('/history')
      // context.commit('addTextHistory', res)
    })
    .catch(err => {
      console.log(err)
    })
}
