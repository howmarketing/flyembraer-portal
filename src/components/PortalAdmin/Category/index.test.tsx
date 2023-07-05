import { render } from 'next-test-utils';
import  from './src/components/PortalAdmin/Category/index.tsx';
describe('./src/components/PortalAdmin/Category/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PortalAdmin/Category/index />);
  });
});
