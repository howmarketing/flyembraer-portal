import { render } from 'next-test-utils';
import  from './src/components/FlyTable/FlyTable.tsx';
describe('./src/components/FlyTable/FlyTable.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/FlyTable/FlyTable />);
  });
});
