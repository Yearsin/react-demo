(this["webpackJsonpsy-app"]=this["webpackJsonpsy-app"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n(11),i=n(12),c=n(13),s=n(0),r=n(7),l=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).home=function(){console.log(o.$api.basic)},o.state={},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.home()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login\u9875\u9762"}),Object(r.jsx)("input",{type:"text"})]})}}]),n}(s.Component);t.default=l},136:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n(11),i=n(12),c=n(13),s=n(0),r=n(7),l=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).home=function(){console.log(o.$api.basic)},o.state={},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.home()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"hh"}),Object(r.jsx)("input",{type:"text"})]})}}]),n}(s.Component);t.default=l},148:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n(11),i=n(12),c=n(13),s=n(0),r=n(7),l=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).home=function(){console.log(o.$api.basic)},o.state={},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.home()}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"404\u9875\u9762"})})}}]),n}(s.Component);t.default=l},149:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(108),c=n.n(i),s=n(7),r=function(e){return c()({loader:e,loading:function(){return Object(s.jsx)("div",{children:"\u6b63\u5728\u52a0\u8f7d"})}})},l=[{path:"/index",title:"\u9996\u9875",icon:"mobile",component:r((function(){return Promise.resolve().then(n.bind(null,71))})),isTab:!1},{path:"/login",title:"\u767b\u5f55",component:r((function(){return Promise.resolve().then(n.bind(null,109))})),isTab:!1},{path:"/hh",title:"hh",icon:"scan",isTab:!1,component:r((function(){return Promise.resolve().then(n.bind(null,147))})),children:[]},{path:"/404",title:"\u767b\u5f55",component:r((function(){return Promise.resolve().then(n.bind(null,148))}))}],u=n(21),d=n.n(u),h={basic:{home:"xx-aa-cc"}},p=n(25),j=n.n(p);j.a.defaults.withCredentials=!1,j.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_ROOT_MAIN;n(136),n(137);var b=n(111),f=n.n(b),m=n(10),O=n(11),v=n(12),x=n(13),y=(n(139),n(72)),g=n.n(y),C=(n(141),n(34)),T=n.n(C),k=(n(145),n(51)),S=n.n(k),I=n(56),P=n(246),E=n(250),w=n(247),D=n(249),K=n(248),_=n(71),H=n(109),F=(n(147),n(148),n(149),S.a.Header),L=(S.a.Content,S.a.Sider),N=T.a.SubMenu,$=g.a.TabPane,A=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(e){var a;Object(m.a)(this,n),(a=t.call(this,e)).state={collapsed:!1,pages:[]},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.handleItem=function(e){var t=a.state.panes;console.log(e.item.props),t.find((function(t){return t.name===e.item.props["data-url"]}))||(console.log("add"),t.push({title:"hh",content:"<".concat(e.item.props["data-url"],">"),key:7,name:""}),a.setState({panes:t}))},a.onChange=function(e){a.setState({activeKey:e})},a.onEdit=function(e,t){a[t](e)},a.add=function(){var e=a.state.panes,t="newTab".concat(a.newTabIndex++);e.push({title:"New Tab",content:"New Tab Pane",key:t,name:""}),a.setState({panes:e,activeKey:t})},a.remove=function(e){var t,n=a.state.activeKey;a.state.panes.forEach((function(n,a){n.key===e&&(t=a-1)}));var o=a.state.panes.filter((function(t){return t.key!==e}));o.length&&n===e&&(n=t>=0?o[t].key:o[0].key),a.setState({panes:o,activeKey:n})},a.newTabIndex=0;var o=[{title:"\u9996\u9875",content:Object(s.jsx)(_.default,{}),key:"1",name:"Home"},{title:"\u767b\u5f55",content:Object(s.jsx)(H.default,{}),key:"2",name:"Login"}];return a.state={activeKey:o[0].key,panes:o},a}return Object(O.a)(n,[{key:"render",value:function(){return Object(s.jsx)(S.a,{children:Object(s.jsxs)(I.a,{children:[Object(s.jsxs)(L,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(s.jsx)("div",{className:"logo"}),Object(s.jsxs)(T.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(s.jsx)(T.a.Item,{"data-url":"Home","data-p":Object(s.jsx)(_.default,{}),icon:Object(s.jsx)(P.a,{}),onClick:this.handleItem,children:Object(s.jsx)(I.b,{to:"/index",children:"Home"})},"1"),Object(s.jsx)(T.a.Item,{"data-url":"Login",icon:Object(s.jsx)(E.a,{}),onClick:this.handleItem,children:Object(s.jsx)(I.b,{to:"/login",children:"Login"})},"2"),Object(s.jsx)(T.a.Item,{"data-url":"Hh",icon:Object(s.jsx)(w.a,{}),onClick:this.handleItem,children:Object(s.jsx)(I.b,{to:"/hh",children:"hh"})},"6"),Object(s.jsxs)(N,{icon:Object(s.jsx)(P.a,{}),title:"User",children:[Object(s.jsx)(T.a.Item,{children:"Tom"},"3"),Object(s.jsx)(T.a.Item,{children:"Bill"},"4"),Object(s.jsx)(T.a.Item,{children:"Alex"},"5")]},"sub1")]})]}),Object(s.jsxs)(S.a,{className:"site-layout",children:[Object(s.jsx)(F,{className:"site-layout-background",style:{padding:0},children:o.a.createElement(this.state.collapsed?D.a:K.a,{className:"trigger",onClick:this.toggle})}),Object(s.jsx)("div",{style:{marginBottom:16},children:Object(s.jsx)(f.a,{onClick:this.add,children:"ADD"})}),Object(s.jsx)(g.a,{hideAdd:!0,onChange:this.onChange,activeKey:this.state.activeKey,type:"editable-card",style:{margin:"15px 16px 10px 16px"},onEdit:this.onEdit,children:this.state.panes.map((function(e){return Object(s.jsx)($,{tab:e.title,"data-url":e.name,style:{minHeight:280,backgroundColor:"#fff",padding:"10px"},children:e.content},e.key)}))})]})]})})}}]),n}(o.a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,251)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))};console.log(l,"Routes"),a.Component.prototype.$api=h,a.Component.prototype.$post=function(e,t,n){var a=n||{};return new Promise((function(n,o){j.a.defaults.loading=!(0===a.loading),j.a.defaults.timeout=a.timeout?1e3*a.timeout:2e4,j.a.post(e,t,{headers:{"Content-Type":a["Content-Type"]||"application/json;charset=UTF-8"},responseType:a.responseType||""}).then((function(e){n(e.data)})).catch((function(e){o(e.data)}))}))},a.Component.prototype.$get=function(e,t,n){var a=n||{};return new Promise((function(n,o){j.a.defaults.loading=!(0===a.loading),j.a.defaults.timeout=a.timeout?1e3*a.timeout:2e4,j.a.get(e,{params:t}).then((function(e){n(e.data)})).catch((function(e){o(e.data)}))}))},a.Component.prototype.$put=function(e,t,n){var a=n||{};return new Promise((function(n,o){j.a.defaults.loading=!(0===a.loading),j.a.defaults.timeout=a.timeout?1e3*a.timeout:2e4,j.a.put(e,t,{headers:{"Content-Type":a["Content-Type"]||"application/json;charset=UTF-8"}}).then((function(e){n(e.data)})).catch((function(e){o(e.data)}))}))},a.Component.prototype.$delete=function(e,t,n){var a=n||{};return new Promise((function(n,o){j.a.defaults.loading=!(0===a.loading),j.a.defaults.timeout=a.timeout?1e3*a.timeout:2e4,j.a.delete(e,t,{headers:{"Content-Type":a["Content-Type"]||"application/json;charset=UTF-8"}}).then((function(e){n(e.data)})).catch((function(e){o(e.data)}))}))},d.a.render(Object(s.jsx)(A,{}),document.getElementById("root")),R()},71:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n(11),i=n(12),c=n(13),s=n(0),r=n(7),l=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).home=function(){console.log(o.$api.basic)},o.state={},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.home()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Home\u9875\u9762"}),Object(r.jsx)("input",{type:"text"})]})}}]),n}(s.Component);t.default=l}},[[242,1,2]]]);
//# sourceMappingURL=main.6dbdafb5.chunk.js.map