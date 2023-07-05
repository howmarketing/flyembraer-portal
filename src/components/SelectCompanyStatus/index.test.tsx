import { render } from 'next-test-utils';
import  from './src/components/SelectCompanyStatus/index.tsx';
describe('./src/components/SelectCompanyStatus/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCompanyStatus/index />);
  });
});
