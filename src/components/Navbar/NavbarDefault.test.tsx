import { render } from 'next-test-utils';
import  from './src/components/Navbar/NavbarDefault.tsx';
describe('./src/components/Navbar/NavbarDefault.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Navbar/NavbarDefault />);
  });
});
