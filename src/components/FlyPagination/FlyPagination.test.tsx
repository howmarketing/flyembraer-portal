import { render } from 'next-test-utils';
import  from './src/components/FlyPagination/FlyPagination.tsx';
describe('./src/components/FlyPagination/FlyPagination.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/FlyPagination/FlyPagination />);
  });
});
