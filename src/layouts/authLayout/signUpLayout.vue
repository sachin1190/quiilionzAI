<template>
  <div class="padd">
    <q-list>
      <q-input outlined v-model="username.value" label="Username" />
      <q-input outlined v-model="email.value" label="Email" />
      <q-input outlined v-model="phone.value" label="Phone" />
      <q-input outlined v-model="password.value" label="Password" />
      <q-btn color="primary" @click="signUp()" label="Sign Up" />
      <q-btn color="primary" @click="login()" label="Login" />
      <q-btn color="primary" @click="home()" label="Home" />
    </q-list>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    },
    home () {
      this.$router.push('/')
    },
    signUp () {
      if (
        this.username.value === '' ||
        this.phone.value === '' ||
        this.email.value === '' ||
        this.username.password === ''
      ) {
        console.log('Feilds cannot be empty')
      } else {
        this.$store.dispatch(
          'QuestionModule/signUp',
          {
            username: this.username.value,
            phone: this.phone.value,
            email: this.email.value,
            password: this.password.value
          }
        )
      }
    }
  },
  data () {
    return {
      username: {
        type: String,
        value: ''
      },
      email: {
        type: String,
        value: ''
      },
      phone: {
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
