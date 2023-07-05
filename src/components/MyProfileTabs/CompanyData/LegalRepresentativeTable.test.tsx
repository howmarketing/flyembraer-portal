import { render } from 'next-test-utils';
import  from './src/components/MyProfileTabs/CompanyData/LegalRepresentativeTable.tsx';
describe('./src/components/MyProfileTabs/CompanyData/LegalRepresentativeTable.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/MyProfileTabs/CompanyData/LegalRepresentativeTable />);
  });
});
