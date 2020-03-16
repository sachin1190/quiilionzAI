<template>
  <q-footer elevated container style="height:130px">
    <q-toolbar>
      <q-toolbar-title class="padd text-weight-thin">
        Word Count : {{ this.$store.getters['QuestionModule/getWordCount'] }}
        <br />
        (Between 0 to {{ this.$store.getters['QuestionModule/getMaxWordCount'] }} words)
      </q-toolbar-title>
      <div class="row paddLr">
        <div v-if="this.$route.path === '/'">
        <div class="col-md-4 col-xs-12">
          <q-btn
            @click="fillSample()"
            color="orange"
            label="Try Sample Text"
          />
        </div>
        <div class="col-md-4 col-xs-12">
        <q-btn @click="load()" color="orange" label="Generate" />
        </div>
       </div>
         <div v-if="this.$route.path === '/questions'">
        <div class="col-md-8 col-xs-12">
          <q-btn
            @click="goToReview()"
            color="orange"
            label="Review"
          />
        </div>
       </div>
         <div v-if="this.$route.path === '/questions/review'">
        <div class="col-md-8 col-xs-12">
          <q-btn
            color="orange"
            label="Next"
          />
        </div>
       </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script>

export default {
  methods: {
    goToReview () {
      this.$store.commit('QuestionModule/activateRightDrawerOptions', 3)
      this.$router.push('/questions/review')
    },
    showNotif () {
      this.$q.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })
    },
    fillSample () {
      this.$store.commit('QuestionModule/setSampleText')
      console.log(this.$route.path)
    },
    load () {
      this.$store.dispatch('QuestionModule/loadData', this.$store.getters['QuestionModule/getText'])
    }
  }
}
</script>

<style lang="stylus" scoped>
.padd {
  padding: 40px;
}
.paddR{
  padding: 0px 0px 0px 10px;
}
.paddLr {
  padding: 0px 35px;
}
</style>
