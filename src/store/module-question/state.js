export default function () {
  return {
    questions: [],
    isLoading: true,
    rightDrawerList: [
      {
        index: 1,
        title: 'Submit Content',
        clickable: true,
        goto: '/',
        active: true
      },
      {
        index: 2,
        title: 'Choose Questions',
        clickable: false,
        goto: '/questions',
        active: false
      },
      {
        index: 3,
        title: 'Review',
        clickable: false,
        active: false
      },
      {
        index: 4,
        title: 'Get Question Ideas',
        clickable: false,
        active: false
      }
    ],
    text: '',
    wordCount: 0,
    maxWordcount: 2000,
    disableTextField: false
  }
}
