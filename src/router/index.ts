import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SettingView from "../views/SettingView/index.vue"
import ContentView from "../views/ContentView/index.vue";
import DashboadView from "../views/ContentView/DashboardView/inde.vue";
import CurrChangeView from "../views/ContentView/CurrChangeView/index.vue";
import FinancialView from "../views/ContentView/FinancialView/index.vue";
import ClientManagementView from "../views/ContentView/ClientManagementView/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView/index.vue"),
  },
  {
    path: "/content",
    component: ContentView,
    redirect: "/dashboad",
    children: [
      {
        path: "/dashboad",
        name:'dashboad',
        meta:{
          title:'Dashboad'
        },
        component: DashboadView,
      },
      {
        path: "/curreny",
        name:'curreny',
        meta:{
          title:'Curreny Exchange'
        },
        component: CurrChangeView,
      },
      {
        path: "/financial",
        name:'financial',
        meta:{
          title:'Financial Product'
        },
        component: FinancialView,
      },
      {
        path: "/client",
        name:'client',
        meta:{
          title:'Client Management'
        },
        component: ClientManagementView,
      },
      {
        path: "/setting",
        name: "setting",
        meta:{
          title:'Setting'
        },
        component: SettingView,
      },
    ],
  },
  
  {
    path: "/",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
