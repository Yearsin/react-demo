import loadable from '../utils/loadable'
const Home = loadable(() => import('../components/home'))
const Login = loadable(() => import('../components/login'))

const routes = [
    // 菜单相关路由
    {
        path: '/index',
        title: '首页',
        icon: 'mobile',
        component: Home,
        isTab: false
    },
    {
        path: '/login',
        title: '登录',
        component: Login,
        isTab: false
    },
    {
        path: '/index/ui',
        title: '二级',
        icon: 'scan',
        isTab: false,
        children: []
    }
];

export default routes;