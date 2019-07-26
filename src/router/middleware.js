export const registerMiddleware = (router, store) => {
  router.beforeEach((to, from, next) => {
    console.log('to:',to)
    if (to.meta) {
      console.log('guest:',to.meta.requiresGuest)
      if (to.meta.requiresGuest) {
        if (store.getters['isLogedIn']){
          console.log('autologin')
          next({
            name: 'dashboard',
            // query: {
            //   next: to.path
            // }
          })
        }
      }
      else if (to.meta.requiresAuth) {
        console.log('auth:',to.meta.requiresAuth)
        if (!store.getters['isLogedIn']){
          next({
            name: 'login',
            query: {
              next: to.path
            }
          })
        }
      }
      // Object.keys(to.meta).forEach(async metaName => {
      //   console.log(metaName)
      //   // if (metaName === '') {
      //   //   dump(`Running middleware: ${middlewareName}`)
      //   //   await middleware[middlewareName]({store, next, to, router})
      //   //   dump(`Closing middleware: ${middlewareName}`)
      //   // } else {
      //   //   dump(`Middleware ${middlewareName} not found`)
      //   // }
      // })
    }
    // else {
      console.log('hmmm')
      next()
    // }
  })
}