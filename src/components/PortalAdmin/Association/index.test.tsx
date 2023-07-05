import { render } from 'next-test-utils';
import  from './src/components/PortalAdmin/Association/index.tsx';
describe('./src/components/PortalAdmin/Association/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PortalAdmin/Association/index />);
  });
});
