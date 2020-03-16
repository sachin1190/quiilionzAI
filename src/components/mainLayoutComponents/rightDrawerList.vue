<template>
   <q-list bordered>
      <q-item :active="active" :clickable="clickable" @click="goTo()" v-ripple>
        <q-item-section avatar>
          <q-item-section>{{ index }}</q-item-section>
        </q-item-section>
        <q-item-section>{{ name }}</q-item-section>
      </q-item>
   </q-list>
</template>

<script>

export default {
  props: {
    name: {
      type: String
    },
    index: {
      type: Number
    },
    clickable: {
      type: Boolean
    },
    active: {
      type: Boolean
    }
  },
  methods: {
    goTo () {
      // this.$store.getters['QuestionModule/goTopage'](this.index)
      this.$store.dispatch('QuestionModule/goToPage', this.index)
    }
  }
}
</script>
