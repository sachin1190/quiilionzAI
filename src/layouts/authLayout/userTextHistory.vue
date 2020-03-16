<template>
  <div v-if="loadingStat">
    <LoadingSkeleton />
  </div>
  <div v-else>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        title="History"
        :data="this.$store.getters['QuestionModule/getTextHistory']"
        :columns="columns"
        row-key="username"
        flat
        bordered
      />
      <q-btn label="Home" color="primary" @click="goToHome()"></q-btn>
    </div>
  </div>
</template>

<script>
import LoadingSkeleton from 'components/authComponents/textHistorySkeleton.vue'

export default {
  components: {
    LoadingSkeleton
  },
  methods: {
    getUsername () {
      return localStorage.getItem('username')
    },
    goToHome () {
      this.$router.push('/')
    }
  },
  computed: {
    loadingStat: {
      set (val) {
        console.log(val)
      },
      get () {
        return this.$store.isLoading
      }
    }
  },
  data () {
    return {
      columns: [
        {
          name: 'username',
          required: true,
          label: 'username',
          align: 'left',
          field: row => row.username,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'Text',
          required: true,
          label: 'Text',
          align: 'left',
          field: row => row.text,
          format: val => `${val}`,
          sortable: true
        }
      ],
      data: [
        {
          username: this.getUsername(),
          text: 'adadad'
        }
      ]
    }
  }
}
</script>
