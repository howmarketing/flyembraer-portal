import { render } from 'next-test-utils';
import  from './src/components/Table/TablePagination/Arrow.tsx';
describe('./src/components/Table/TablePagination/Arrow.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Table/TablePagination/Arrow />);
  });
});
