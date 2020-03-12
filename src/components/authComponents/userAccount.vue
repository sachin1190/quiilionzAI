<template>
  <q-btn-dropdown color="primary" :label="getUsername" >
    <div v-if="checkToken()">
  <q-list>
      <DropdownItem
        v-for="title in optionsLoggedIn"
        :key="title.name"
        :name="title.name"
        :clickFunc="title.func"
        :bind="title.name"
      />
    </q-list>
    </div>
    <div v-else>
        <q-list>
      <DropdownItem
        v-for="title in optionsNotLoggedIn"
        :key="title.name"
        :name="title.name"
        :clickFunc="title.func"
        :bind="title.name"
      />
    </q-list>
    </div>
  </q-btn-dropdown>
</template>

<script>
import DropdownItem from 'components/mainLayoutComponents/dropDownmain.vue'

export default {
  components: {
    DropdownItem
  },
  props: {
    username: {
      type: String
    }
  },
  computed: {
    getUsername: {
      get () {
        var username = localStorage.getItem('username')
        if (username === null) {
          return 'USER'
        } else {
          return username
        }
      }
    }
  },
  methods: {
    // getUsername () {
    //   return localStorage.getItem('username')
    // },
    checkToken () {
      console.log('Inside CheckToken')
      var token = localStorage.getItem('token')
      if (token !== null) {
        console.log('token exists')
        return true
      } else {
        console.log('token dosent exists')
        return false
      }
    }
  },
  data () {
    return {
      optionsNotLoggedIn: [
        {
          name: 'Login',
          func: () => {
            this.$router.push('/login')
          }
        },
        {
          name: 'Sign Up',
          func: () => {
            this.$router.push('/signup')
          }
        }
      ],
      optionsLoggedIn: [
        {
          name: 'Account',
          func: () => {
            console.log('Account Optins')
          }
        },
        {
          name: 'Settings',
          func: () => {
            console.log('Settings Optins')
          }
        },
        {
          name: 'Logout',
          func: () => {
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            this.$router.push('/login')
          }
        }
      ]
    }
  }
}
</script>
