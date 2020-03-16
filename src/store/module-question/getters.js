import { LocalStorage } from 'quasar'

export function getQestions (state) {
  return state.questions
}
export function getSelectedQestions (state) {
  var selList = []
  state.questions.find(function (e) {
    if (e.isSelected === true) {
      selList.push(e)
      console.log(`pushing question ${e.question}`)
    }
  })
  return selList
}
export function getText (state) {
  return state.text
}
export function getTextFieldStatus (state) {
  return state.disableTextField
}
export function getMaxWordCount (state) {
  return state.maxWordcount
}
export function getWordCount (state) {
  return state.text.length
}
export function getRightDrawerList (state) {
  return state.rightDrawerList
}
export function getTextHistory () {
  if (LocalStorage.getItem('textHistory') === null) {
    return null
  } else {
    return LocalStorage.getItem('textHistory')
  }
}
