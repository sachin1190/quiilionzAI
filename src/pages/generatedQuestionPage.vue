<template>
  <q-list>
    <QuestionCard
      v-for="ques in this.$store.getters['QuestionModule/getQestions'].data"
      :key="ques.question"
      :question="ques.question"
      :answer="ques.answer"
      :dist1="ques.dist1"
      :dist2="ques.dist2"
      :isSelected="ques.isSelected"
      :dist3="ques.dist3"
    />
  </q-list>
</template>

<script>
import QuestionCard from 'components/generatedQuestionComponent.vue'

export default {
  components: {
    QuestionCard
  }
}
</script>
