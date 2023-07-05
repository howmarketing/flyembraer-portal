import { render } from 'next-test-utils';
import  from './src/components/Navbar/stories.tsx';
describe('./src/components/Navbar/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Navbar/stories />);
  });
});
