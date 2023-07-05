import { render } from 'next-test-utils';
import  from './src/components/SelectCompanyApp/SelectCompanyApp.tsx';
describe('./src/components/SelectCompanyApp/SelectCompanyApp.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCompanyApp/SelectCompanyApp />);
  });
});
