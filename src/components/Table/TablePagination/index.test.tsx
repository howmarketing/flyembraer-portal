import { render } from 'next-test-utils';
import  from './src/components/Table/TablePagination/index.tsx';
describe('./src/components/Table/TablePagination/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Table/TablePagination/index />);
  });
});
