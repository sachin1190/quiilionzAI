<template>
  <q-footer elevated container style="height:130px">
    <q-toolbar>
      <q-toolbar-title class="padd text-weight-thin">
        Word Count : {{ this.$store.getters['QuestionModule/getWordCount'] }}
        <br />
        (Between 0 to {{ this.$store.getters['QuestionModule/getMaxWordCount'] }} words)
      </q-toolbar-title>
      <div class="row paddLr">
        <div class="col-md-8 col-xs-12">
          <q-btn
            @click="fillSample()"
            color="orange"
            label="Try Sample Text"
          />
        </div>
        <div class="col-md-4 col-xs-12">
          <q-btn @click="load()" color="orange" label="Proceed" />
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  methods: {
    fillSample () {
      this.$store.commit('QuestionModule/setSampleText')
    },
    load () {
      this.$store.dispatch('QuestionModule/loadData', this.$store.getters['QuestionModule/getText'])
    }
  }
}
</script>
