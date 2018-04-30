// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  request.headers.set(
    'Authorization',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NjFlZmMwMC0xOTE1LTAxMzYtZWVhZC00YjgzYjRkZTM4NzUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzIyODQ0LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymdsb2ctYTM5MjkxODEtNGYxOS00N2UxLWEwZmYtYjlmOTRhNzQ1ZGMzIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.zztYrvx6FM-MFVjWvtPC-bC-hjuHqy7jbm85fBSyfpY'
  )
  request.headers.set('Accept', 'application/vnd.api+json')
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
