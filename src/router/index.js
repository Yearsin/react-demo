import loadable from '../utils/loadable'
const Zc = loadable(() => import('../components/zc'))
const Ld = loadable(() => import('../components/ld'))
const ZcOrder = loadable(() => import('../components/zc-order'))
const LdOrder = loadable(() => import('../components/ld-order'))
const NotFound = loadable(() => import('../components/not-found'))

const routes = [
    // 菜单相关路由
    {
        path: '/zc',
        name: 'zc',
        title: '整车发货',
        component: Zc,
        isTab: true
    },
    {
        path: '/ld',
        name: 'ld',
        title: '零担发货',
        component: Ld,
        isTab: true
    },
    {
        path: '/zcOrder',
        name: 'zcOrder',
        title: '整车订单',
        isTab: true,
        component: ZcOrder,
        children: []
    },
    {
        path: '/ldOrder',
        name: 'ldOrder',
        title: '零担订单',
        isTab: true,
        component: LdOrder,
        children: []
    },
    {
        path: '/404',
        title: '登录',
        component: NotFound
    },
];

export default routes;