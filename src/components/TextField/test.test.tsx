import { render } from 'next-test-utils';
import  from './src/components/TextField/test.tsx';
describe('./src/components/TextField/test.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/TextField/test />);
  });
});
