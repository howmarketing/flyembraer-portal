import { render } from 'next-test-utils';
import  from './src/components/Table/Table.tsx';
describe('./src/components/Table/Table.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Table/Table />);
  });
});
