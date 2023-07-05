import { render } from 'next-test-utils';
import  from './src/components/PortalAdmin/Application/index.tsx';
describe('./src/components/PortalAdmin/Application/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PortalAdmin/Application/index />);
  });
});
