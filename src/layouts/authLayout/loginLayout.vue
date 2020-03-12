<template>
  <div class="padd">
    <q-list>
      <q-input outlined v-model="username.value" label="Username" />
      <q-input outlined v-model="password.value" label="Password" />
      <q-btn color="primary" @click="login()" label="Login" />
      <q-btn color="primary" @click="signUp()" label="Sign Up" />
      <q-btn color="primary" @click="home()" label="Homepage" />
    </q-list>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$store.dispatch(
        'QuestionModule/login',
        ({ username: this.username.value, password: this.password.value })
      )
    },
    signUp () {
      this.$router.push('/signup')
    },
    home () {
      this.$router.push('/')
    }
  },
  data () {
    return {
      username: {
        type: String,
        value: ''
      },
      password: {
        type: String,
        value: ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.padd {
  padding: 400px;
}
.paddR{
  padding: 0px 0px 0px 10px;
}
.paddLr {
  padding: 0px 35px;
}
</style>
