import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from "../components/HelloWorld";
import Test from "../components/Test";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Helloworld',
      component: HelloWorld
    },
    {
      path: '/test',
      component: Test
    }
  ]
});
