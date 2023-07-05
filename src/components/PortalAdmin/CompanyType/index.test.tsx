import { render } from 'next-test-utils';
import  from './src/components/PortalAdmin/CompanyType/index.tsx';
describe('./src/components/PortalAdmin/CompanyType/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PortalAdmin/CompanyType/index />);
  });
});
