import { render } from 'next-test-utils';
import  from './src/components/PortalAdmin/Core/Layout/index.tsx';
describe('./src/components/PortalAdmin/Core/Layout/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PortalAdmin/Core/Layout/index />);
  });
});
