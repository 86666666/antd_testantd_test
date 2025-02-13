import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Htmlpage from './pages/home';  // 默认首页
import Shouye from './pgmp_web/shouye';  // 登陆后页面
// import Contact from './pages/Contact';  // 联系页面
// import Test3 from  './pgmp_web/Test3';

function App() {
  return (
      <div>
        {/* 定义路由 */}
        <Routes>
          {/* 设置默认首页 */}
          <Route path="/" element={<Htmlpage/>} />
          
          {/* 其他页面
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/3" element={<Test3 />} /> */}

          {/* 404 页面：当没有匹配到任何路由时，重定向到默认首页 */}
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/1/*" element={<Shouye />} />  {/* 添加通配符允许子路由 */}
        </Routes>
      </div>
  );
}

export default App;