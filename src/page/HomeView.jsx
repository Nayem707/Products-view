import { Layout } from 'antd';
//import components folder
import CardComponents from '../components/CardComponents';
//define ant-design layout
const { Content } = Layout;

const HomeView = () => {
  return (
    <Content style={{ padding: '20px' }}>
      <CardComponents />
    </Content>
  );
};

export default HomeView;
