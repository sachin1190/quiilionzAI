
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // }
  {
    path: '/',
    component: () => import('layouts/enterTextLayout/enterTextLayout'),
    children: [
      { path: '/', component: () => import('pages/enterTextPages/enterTextPage.vue') },
      { path: 'questions', component: () => import('pages/enterTextPages/generatedQuestionPage.vue') },
      { path: 'questions/review', component: () => import('pages/enterTextPages/reviewQuestionsPage.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/authLayout/signUpLayout.vue'),
    children: [
      { path: 'signup', component: () => import('layouts/authLayout/signUpLayout.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/authLayout/loginLayout.vue'),
    children: [
      { path: 'login', component: () => import('layouts/authLayout/loginLayout.vue') }
    ]
  },
  {
    path: '/history',
    component: () => import('layouts/authLayout/userTextHistory.vue'),
    children: [
      { path: 'login', component: () => import('layouts/authLayout/userTextHistory.vue') }
    ]
  }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
