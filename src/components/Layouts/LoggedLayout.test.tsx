import { render } from 'next-test-utils';
import  from './src/components/Layouts/LoggedLayout.tsx';
describe('./src/components/Layouts/LoggedLayout.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Layouts/LoggedLayout />);
  });
});
