import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/home/home.vue'
import Test from '../views/account/test.vue'
import login from './login'
import signup from './signup'
import findId from './find-id'
import findPw from './find-pw'
import home from './home'

// conferenceRoom
import conferenceRoom from './conference-room'

import CreateConference from './create-conference'
import conferenceList from './conference-list'

// profile
import profile from './profile'

const routes = [

  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  ...login,
  ...signup,
  ...profile,
  ...conferenceList,
  ...CreateConference,
  ...findId,
  ...findPw,
  ...conferenceRoom,
  ...home
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
