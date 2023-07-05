import { render } from 'next-test-utils';
import  from './src/components/MyProfileTabs/MyProfile/UpdatePassword.tsx';
describe('./src/components/MyProfileTabs/MyProfile/UpdatePassword.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/MyProfileTabs/MyProfile/UpdatePassword />);
  });
});
