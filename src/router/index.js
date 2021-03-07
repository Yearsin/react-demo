import loadable from '../utils/loadable'
import Zc from '../components/zc'
import Ld from '../components/ld'
import ZcOrder from '../components/zc-order'
import LdOrder from '../components/ld-order'
// const Zc = loadable(() => import('../components/zc'))
// const Ld = loadable(() => import('../components/ld'))
// const ZcOrder = loadable(() => import('../components/zc-order'))
// const LdOrder = loadable(() => import('../components/ld-order'))
const NotFound = loadable(() => import('../components/not-found'))

const routes = [
    // 菜单相关路由
    {
        path: '/zc',
        name: 'zc',
        title: '整车发货',
        content: <Zc/>,
        component: Zc,
        isTab: true
    },
    {
        path: '/ld',
        name: 'ld',
        title: '零担发货',
        content: <Ld/>,
        component: Ld,
        isTab: false
    },
    {
        path: '/zcOrder',
        name: 'zcOrder',
        title: '整车订单',
        isTab: false,
        content: <ZcOrder/>,
        component: ZcOrder,
        children: []
    },
    {
        path: '/ldOrder',
        name: 'ldOrder',
        title: '零担订单',
        isTab: false,
        content: <LdOrder/>,
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