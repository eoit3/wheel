import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Index = ()=>import('../views/Index')
const Car = ()=>import('../views/Car')
const Img = ()=>import('../views/Img')
const CarType = ()=>import('../views/CarType')
const ColorType = ()=>import('../views/ColorType')
const Quotation = ()=>import('../views/Quotation')
const Type = () =>import('../views/type')
const Color = () =>import('../views/color')
export default new VueRouter({
  routes:[
    {
      path:'/',
      name:'index',
      component:Index
    },
    {
      path:'/car',
      name:'car',
      component:Car
    },
    {
      path:'/img',
      name:'img',
      component:Img
    },
    {
      path:'/cartype',
      name:'cartype',
      component:CarType
    },
    {
      path:'/colortype',
      name:'colortype',
      component:ColorType
    },
    {
      path:'/Quotation',
      name:'Quotation',
      component:Quotation
    },{
      path:'/Type',
      name:'type',
      component:Type
    },{
      path:'/color',
      name:'color',
      component:Color
    }
  ]
})