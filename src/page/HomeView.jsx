import { Layout } from 'antd';
//import components folder
import CardComponent from '../components/CardComponents';
//define ant-design layout
const { Content } = Layout;

const HomeView = () => {
  return (
    <Content style={{ padding: '20px' }}>
      <CardComponent />
    </Content>
  );
};

export default HomeView;
