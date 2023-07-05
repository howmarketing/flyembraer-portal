import { render } from 'next-test-utils';
import  from './src/components/SelectCompanyAircraft/SelectCompanyAircraft.tsx';
describe('./src/components/SelectCompanyAircraft/SelectCompanyAircraft.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCompanyAircraft/SelectCompanyAircraft />);
  });
});
