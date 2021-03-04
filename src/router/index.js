import loadable from '../utils/loadable'
const Home = loadable(() => import('../components/home'))
const Login = loadable(() => import('../components/login'))
const Hh = loadable(() => import('../components/hh'))
const NotFound = loadable(() => import('../components/not-found'))

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
        path: '/hh',
        title: 'hh',
        icon: 'scan',
        isTab: false,
        component: Hh,
        children: []
    },
    {
        path: '/404',
        title: '登录',
        component: NotFound
    },
];

export default routes;