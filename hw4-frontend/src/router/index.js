import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import AddPostView from '../views/AddPostView.vue'
import APostView from '../views/APostView.vue'
import auth from "../auth"

const routes = [  
  {
    path: "/",
        name: "home",
        component: HomeView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },

  {
    path: '/contacts',
    name: 'contacts',
    component: AboutView
  },
  
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: AddPostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
  },
  {
    path: '/post/:id',
    name: 'ApostView',
    component: APostView,
    props: true, 
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
  },
  
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
