import { render } from 'next-test-utils';
import  from './src/components/SelectCompanyBct/SelectCompanyBct.tsx';
describe('./src/components/SelectCompanyBct/SelectCompanyBct.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCompanyBct/SelectCompanyBct />);
  });
});
