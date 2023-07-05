import { render } from 'next-test-utils';
import  from './src/components/MyProfileTabs/MyProfile/index.tsx';
describe('./src/components/MyProfileTabs/MyProfile/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/MyProfileTabs/MyProfile/index />);
  });
});
