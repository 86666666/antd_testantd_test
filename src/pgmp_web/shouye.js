import React, { useState,Suspense} from 'react';  //Suspense 是路由懒加载组件
import { Layout, Menu, Row, Col, Card, Typography } from 'antd';
import { BrowserRouter as Router, Route, Routes, useNavigate } from'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import SplashCursor from './SplashCursor';
import Test3 from "./Test3";
// import SectorTable from "./Xiangguanxing"
// import QushixingTable from  "./Qushixing"
import Description from './Description_page';

// const SectorTable =React.lazy(() => ('./Xiangguanxing'))
// const QushixingTable =React.lazy(() => ('./Qushixing'))

// 确保使用了正确的动态导入语法
const SectorTable = React.lazy(() => import('./Xiangguanxing'));
const QushixingTable = React.lazy(() => import('./Qushixing'));
const GetData = React.lazy(() => import('./Getdata'));

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

//这个函数的作用是为了 给Layout 导入侧边栏数据用的
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('玄学调参', '1', <PieChartOutlined />),
  getItem('相关性', '4', <DesktopOutlined />),
  getItem('趋势性', '5', <DesktopOutlined />),
  getItem('数据获取', '3', <DesktopOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = React.useState(true);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    console.log('Menu item clicked:', e.key); // 路由转发函数 添加父级路径前缀
    navigate(`/1/${e.key}`);
  };

  // 获取当前页面的屏幕宽度
  const page_width = window.innerWidth;
  function Responsive_computing(i) {
    // 响应式计算css百分比函数
    // i 是 百分比
    // 该函数的作用是通过 window.innerWidth 动态获取当前页面的宽度 并动态计算css  宽度和高度的百分比是多少像素
    // screen variable=3.94     电脑屏幕 宽度一般是 1536 手机屏幕宽度一般是389  两者差值是3.94倍
    const screen_variable = 3;
    let result;
    if (page_width <= 450) {
      result = i * 0.01 * screen_variable * page_width;
    } else {
      result = i * 0.01 * page_width;
    }
    return result;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth={Responsive_computing(5)}>
        <div className="logo" style={{ height: '32px', margin: '16px', background:'red' }} />
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>

      {/* 主布局 */}
      <Layout className="site-layout">
        {/* <SplashCursor /> */}
        {/* 头部 */}
        <Header style={{ padding: 0, background: '#fff' }}>
          <Title level={3} style={{ padding: '16px', margin: 0 }}>
            玄 学 调 参
          </Title>
        </Header>

        {/* 内容区域 */}
        <Content style={{ margin: '16px' }}>
        <Suspense fallback={<div>加载中...</div>}>
          <Routes>
            <Route path="/" element={<Description />} />   {/* 描述页面 */}
            <Route path="3" element={<GetData />} />
            <Route path="4" element={<SectorTable />} />
            <Route path="5" element={<QushixingTable />} />
          </Routes>
        </Suspense>
          {/* <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Title level={4}>卡片 1</Title>
                <Text>这是第一个卡片的内容。</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Title level={4}>卡片 2</Title>
                <Text>这是第二个卡片的内容。</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Title level={4}>卡片 3</Title>
                <Text>这是第三个卡片的内容。</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Title level={4}>卡片 4</Title>
                <Text>这是第四个卡片的内容。</Text>
              </Card>
            </Col>
          </Row> */}
        </Content>

        {/* 底部 */}
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2025 响应式页面示例
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
