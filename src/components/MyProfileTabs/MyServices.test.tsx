import { render } from 'next-test-utils';
import  from './src/components/MyProfileTabs/MyServices.tsx';
describe('./src/components/MyProfileTabs/MyServices.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/MyProfileTabs/MyServices />);
  });
});
