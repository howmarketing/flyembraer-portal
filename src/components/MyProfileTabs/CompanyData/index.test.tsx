import { render } from 'next-test-utils';
import  from './src/components/MyProfileTabs/CompanyData/index.tsx';
describe('./src/components/MyProfileTabs/CompanyData/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/MyProfileTabs/CompanyData/index />);
  });
});
