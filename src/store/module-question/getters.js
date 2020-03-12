
export function getQestions (state) {
  return state.questions
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
export function getSelectionStatus (state, question) {
  var i = state.questions.find(function (element) {
    return element === question
  })
  console.log('return the element at position i')
  console.log(i)
}
