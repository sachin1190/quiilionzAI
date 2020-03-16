<template>
  <q-card class="my-card">
    <q-card-section>
      <q-checkbox size="xl" @input="changeVal" :value="isSelected" />
      <div class="text-h6">{{ question }}</div>
    </q-card-section>
    <q-separator />
    <q-card-actions vertical>
      <q-btn flat color="green">{{ answer }}</q-btn>
      <q-btn flat color="red">{{ dist1 }}</q-btn>
      <q-btn flat color="red">{{ dist2 }}</q-btn>
      <q-btn flat color="red">{{ dist3 }}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    question: {
      type: String
    },
    answer: {
      type: String
    },
    dist1: {
      type: String
    },
    dist2: {
      type: String
    },
    dist3: {
      type: String
    },
    isSelected: {
      type: Boolean
    }
  },
  // computed: {
  //   selectionStatus: {
  //     set (value) {
  //       this.$store.commit(
  //         'QuestionModule/chooseQuestions',
  //         this.question,
  //         value
  //       )
  //     },
  //     get () {
  //       return null
  //       // console.log(`status is ${this.$store.dispatch('QuestionModule/getSelectionStatus', this.question)}`)
  //       // return this.$store.dispatch('QuestionModule/getSelectionStatus', this.question)
  //     }
  //   }
  // }
  methods: {
    test (value) {
      console.log('testing')
    },
    changeVal (value) {
      this.$store.commit('QuestionModule/chooseQuestions', { question: this.question, value: value })
    }
  }
}
</script>
