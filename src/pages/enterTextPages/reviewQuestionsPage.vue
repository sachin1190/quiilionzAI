<template>
  <q-list>
    <ReviewQuestionComponent
      v-for="ques in this.$store.getters['QuestionModule/getSelectedQestions']"
      :key="ques.question"
      :question="ques.question"
      :answer="ques.answer"
      :dist1="ques.dist1"
      :dist2="ques.dist2"
      :dist3="ques.dist3"
    />
  </q-list>
</template>

<script>
import ReviewQuestionComponent from 'components/mainLayoutComponents/reviewQuestionsComponent.vue'

export default {
  components: { ReviewQuestionComponent }
}
</script>
