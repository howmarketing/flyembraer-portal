import { render } from 'next-test-utils';
import  from './src/components/PortalAdmin/MarketType/index.tsx';
describe('./src/components/PortalAdmin/MarketType/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PortalAdmin/MarketType/index />);
  });
});
