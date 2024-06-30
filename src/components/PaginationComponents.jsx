import { Pagination } from 'antd';

const PaginationComponent = ({ current, total, onChange }) => (
  <div style={{ padding: '50px 0' }}>
    <Pagination
      current={current}
      total={total}
      pageSize={10}
      onChange={(page) => onChange(page)}
    />
  </div>
);

export default PaginationComponent;
