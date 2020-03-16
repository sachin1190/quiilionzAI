<template>
  <div>
    <div class="row paddOptions">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <q-input borderless hide-bottom-space placeholder="Enter Text" />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-toggle
          size="lg"
          :value="true"
          label="Express Mode"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-btn-dropdown color="primary" label="Choose Subject">
          <q-list>
            <DropdownItem
              v-for="title in dropDowntitles"
              :key="title"
              :name="title"
              :bind="title"
            />
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div class="row padd">
      <div class="col-12">
        <q-input
          placeholder="Enter text"
          hide-bottom-space
          borderless
          autogrow
          clearable
          :disable="this.$store.getters['QuestionModule/getTextFieldStatus']"
          v-model="text"
          @input="checkLength()"
          @clear="clearText()"
          type="textarea"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DropdownItem from 'components/mainLayoutComponents/dropDownmain.vue'

export default {
  components: {
    DropdownItem
  },
  methods: {
    clearText () {
      this.$store.commit('QuestionModule/clearText')
    },
    checkLength () {
      console.log('checking')
      if (
        this.$store.getters['QuestionModule/getText'].length >
        this.$store.getters['QuestionModule/getMaxWordCount']
      ) {
        this.$store.commit('QuestionModule/deactivateTextFiled')
      }
    }
  },
  computed: {
    text: {
      set (t) {
        this.$store.commit('QuestionModule/addText', t)
      },
      get () {
        return this.$store.getters['QuestionModule/getText']
      }
    }
  },
  data () {
    return {
      dropDowntitles: ['History', 'Geography', 'Natural Science', 'Technology']
    }
  }
}
</script>

<style scoped>
.padd {
  padding-left: 3%
}
.paddOptions {
  padding: 3% 3%
}
</style>
