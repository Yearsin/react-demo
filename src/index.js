import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import antdUi from './config/antd-ui';
import api from './config/api';
import {Get, Post, Put, _Delete} from './config/axios';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './router/index.js';

export default function Index() {
  return <Router />;
}

// 全局Axios请求、Api地址
Component.prototype.$api = api;
Component.prototype.$post = Post;
Component.prototype.$get = Get;
Component.prototype.$put = Put;
Component.prototype.$delete = _Delete;
// export default class Hello extends Component{
//   render(){
//       return (
//           <Router>
//               <div>
//                   <ul className="nav">
//           　　　　　　<li><Link to="/">App</Link></li>
//           　　　　　　<li><Link to="/home">home</Link></li>
//       　　 　　　　</ul>
//               </div>
//           </Router>
//       )
//   }
// }
// ReactDOM.render(<Hello />, document.getElementById('root'));
{/* <App /> */}
ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
