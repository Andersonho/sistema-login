// import {useState} from 'react';
import {Layout} from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';

const {Sider} = Layout;
function App() {
  return (
  
    <Layout>
      <Sider className="sidebar">sidebar</Sider>
      <Sider>
        <Logo/>
        <MenuList/>
      </Sider>
    </Layout>
  );
}

export default App
