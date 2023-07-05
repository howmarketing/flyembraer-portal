import { render } from 'next-test-utils';
import  from './src/components/SelectCompanyMarket/SelectCompanyMarket.tsx';
describe('./src/components/SelectCompanyMarket/SelectCompanyMarket.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCompanyMarket/SelectCompanyMarket />);
  });
});
