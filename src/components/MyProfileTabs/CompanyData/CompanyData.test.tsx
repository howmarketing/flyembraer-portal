import { render } from 'next-test-utils';
import  from './src/components/MyProfileTabs/CompanyData/CompanyData.tsx';
describe('./src/components/MyProfileTabs/CompanyData/CompanyData.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/MyProfileTabs/CompanyData/CompanyData />);
  });
});
