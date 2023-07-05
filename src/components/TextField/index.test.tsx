import { render } from 'next-test-utils';
import  from './src/components/TextField/index.tsx';
describe('./src/components/TextField/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/TextField/index />);
  });
});
