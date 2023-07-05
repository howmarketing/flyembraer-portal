import { render } from 'next-test-utils';
import  from './src/components/Navbar/index.tsx';
describe('./src/components/Navbar/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Navbar/index />);
  });
});
