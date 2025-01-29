import React from 'react';
import { Layout, Menu, Row, Col, Card, Typography } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import SplashCursor from './SplashCursor'



const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

function App() {
  const [collapsed, setCollapsed] = React.useState(true);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

// 获取当前页面的屏幕宽度
const  page_width=window.innerWidth
function Responsive_computing(i){
  // 响应式计算css百分比函数
  // i 是 百分比
  // 该函数的作用是通过 window.innerWidth 动态获取当前页面的宽度 并动态计算css  宽度和高度的百分比是多少像素
  // screen variable=3.94     电脑屏幕 宽度一般是 1536 手机屏幕宽度一般是389  两者差值是3.94倍
  const screen_variable=3 
  let result  
  if(page_width<=450){
    result=i*0.01*screen_variable *page_width
  }else{
    result=i*0.01 *page_width
  }
  return result
}


  return (
    
    <Layout style={{ minHeight: '100vh' }} >
      {/* 侧边栏 */}
      <Sider theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth={Responsive_computing(5)}>
        <div className="logo" style={{ height: '32px', margin: '16px', background: 'red' }} />
        <Menu  defaultSelectedKeys={['1']} mode="inline"
        items={[
          {
            key: '1',
            icon: <PieChartOutlined/>,
            label: '仪表盘',
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: '设备管理',
          },
          {
            key: '3',
            icon: <FileOutlined />,
            label: '用户管理',
          },
        ]}
        />
      </Sider>

      {/* 主布局 */}
      <Layout className="site-layout">
      {/* <SplashCursor /> */}
        {/* 头部 */}
        <Header style={{ padding: 0, background: '#fff' }}>
          <Title level={3} style={{ padding: '16px', margin: 0 }}>
            响应式管理后台
          </Title>
        </Header>

        {/* 内容区域 */}
        <Content style={{ margin: '16px' }}>
        
          <Row gutter={[16, 16]}>
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
          </Row>
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