import { render } from 'next-test-utils';
import  from './src/components/SelectProfile/SelectProfile.tsx';
describe('./src/components/SelectProfile/SelectProfile.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectProfile/SelectProfile />);
  });
});
