
export function addQuestions (state, payload) {
  state.questions = payload
}
export function addText (state, payload) {
  state.text = payload
}
export function deactivateTextFiled (state) {
  state.disableTextField = true
}
export function setSampleText (state) {
  state.text = 'Geography The United States of America is the worlds third largest country in size and nearly the third largest in terms of population. Located in North America, the United States is bordered on the west by the Pacific Ocean and to the east by the Atlantic Ocean. Along the northern border is Canada and the southern border is Mexico. There are 50 states and the District of Columbia.More than twice the size of the European Union, the United States has high mountains in the West and a vast central plain. The lowest point in the United States is in Death Valley which is at -282 feet and the highest peak is Denali (Mt. McKinley) at 20,320 feet.People and Culture Throughout its history, the United States has been a nation of immigrants. The population is diverse with people from all over the world seeking refuge and a better way of life.The six regions of the United States are New England, the mid-Atlantic, the South, the Midwest, the Southwest, and the West.The New England states, namely Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont, became home to European settlers who came in search of religious freedom.The mid-Atlantic region includes the city of Washington, D.C., Delaware, Maryland, New Jersey, New York, Pennsylvania. Because the mid-Atlantic region consisted largely of industrial areas, it attracted millions of European immigrants. As a result, the mid-Atlantic gave rise to some of the largest East Coast cities, such as New York, Baltimore, and Philadelphia. The Southern states, namely Alabama, Arkansas, Florida, Georgia, Kentucky, Louisiana, Mississippi, North Carolina, South Carolina, Tennessee, Virginia, and West Virginia, were all states which struggled after the Civil War. The Civil War, one of the most important chapters in U.S history, was fought between 1861 and s1865.'
}
export function clearText (state) {
  state.text = ''
  state.wordCount = 0
}
export function chooseQuestions (state, question, value) {
  var i = state.questions.find(function (element) {
    return element === question
  })

  console.log('deselect element at')
  console.log(i)
  console.log('set the value of element at position i')
  // state.questions.elementAt(i).isSelected = value
}
