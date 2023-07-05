import { render } from 'next-test-utils';
import  from './src/components/SelectCompanyStatus/SelectCompanyStatus.tsx';
describe('./src/components/SelectCompanyStatus/SelectCompanyStatus.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCompanyStatus/SelectCompanyStatus />);
  });
});
