import { render } from 'next-test-utils';
import  from './src/components/PortalAdmin/JobFunction/index.tsx';
describe('./src/components/PortalAdmin/JobFunction/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PortalAdmin/JobFunction/index />);
  });
});
