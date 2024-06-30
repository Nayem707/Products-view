import { Outlet } from 'react-router-dom';

//import ant-design dependency folder
import { Layout } from 'antd';

//define ant-design layout
const { Header } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header style={{ color: 'white', textAlign: 'center' }}>Home</Header>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
