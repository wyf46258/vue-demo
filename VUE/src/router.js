import Vue from 'vue';
import VueRouter from 'vue-router';
//往vue里面加一些路由维护的东西
Vue.use(VueRouter);

import inputPage from './pages/inputPage.vue';
import outputPage from './pages/outputPage.vue';

//导出实例，导出配置的信息
export default new VueRouter({
    routes:[{
        //录入页面
        name:"input",
        path:"/input",
        //组件
        component:inputPage
    },{
        //结果页面
        name:"output",
        path:"/output",
        //组件
        component:outputPage
    },{
        //啥都没有就默认为input
        path:'/*',
        redirect:'/input'
    }]
});