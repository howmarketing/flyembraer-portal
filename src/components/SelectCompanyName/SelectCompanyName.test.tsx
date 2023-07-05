import { render } from 'next-test-utils';
import  from './src/components/SelectCompanyName/SelectCompanyName.tsx';
describe('./src/components/SelectCompanyName/SelectCompanyName.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCompanyName/SelectCompanyName />);
  });
});
