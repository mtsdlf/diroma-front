import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Product from "../views/Product.vue";
import Invoice from "../views/Invoice.vue";
import CreateProduct from "../components/customer/product/CreateProduct.vue";
import EditProduct from "../components/customer/product/EditProduct.vue";
import CreateInvoice from "../components/customer/invoice/CreateInvoice.vue";
import EditInvoice from "../components/customer/invoice/EditInvoice.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/product",
    name: "Product",
    component: Product
  },
  {
    path: "/invoice",
    name: "Invoice",
    component: Invoice
  },

  {
    path: "/product/create",
    name: "CreateProduct",
    component: CreateProduct
  },
  {
    path: "/product/edit",
    name: "EditProduct",
    component: EditProduct
  },
  {
    path: "/invoice/create",
    name: "CreateInvoice",
    component: CreateInvoice
  },
  {
    path: "/invoice/edit",
    name: "EditInvoice",
    component: EditInvoice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
