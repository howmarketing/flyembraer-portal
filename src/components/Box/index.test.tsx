import { render } from 'next-test-utils';
import  from './src/components/Box/index.tsx';
describe('./src/components/Box/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Box/index />);
  });
});
