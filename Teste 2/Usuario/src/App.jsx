import {Layout} from 'antd';
import Logo from './components/Logo';
const {Header , Sider} = Layout;
function App() {
  return (
  
    <Layout>
      <Sider className="sidebar">sidebar</Sider>
        <Logo/>
      </Sider>
    </Layout>
  );
}

export default App
