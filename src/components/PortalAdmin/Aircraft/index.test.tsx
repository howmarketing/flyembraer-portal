import { render } from 'next-test-utils';
import  from './src/components/PortalAdmin/Aircraft/index.tsx';
describe('./src/components/PortalAdmin/Aircraft/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PortalAdmin/Aircraft/index />);
  });
});
