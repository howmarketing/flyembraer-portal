import { render } from 'next-test-utils';
import  from './src/components/SelectCompanyServices/SelectCompanyServices.tsx';
describe('./src/components/SelectCompanyServices/SelectCompanyServices.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCompanyServices/SelectCompanyServices />);
  });
});
