const routes = [
  {
    path: '/',
    redirect: '/signin', // Redirect from the root to the sign-in page
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Since '/signin' is now the default, you might not need 'IndexPage' as a child of '/'
      { path: 'indexpage', component: () => import('pages/IndexPage.vue') },
      { path: 'history', component: () => import('pages/History.vue') },
      { path: 'signin', component: () => import('pages/SignIn.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
