const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'IndexPage', component: () => import('pages/IndexPage.vue') },
      { path: 'history', component: () => import('pages/History.vue') },
      { path: 'signin', component: () => import('pages/SignIn.vue') }, // Add this line
      { path: 'register', component: () => import('pages/Register.vue') },// And this line
      { path: 'settings', component: () => import('pages/Settings.vue') } // And this line
    ]
  },

  // Always leave this as the last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
