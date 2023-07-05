import { render } from 'next-test-utils';
import  from './src/components/Layouts/RegisterLayout.tsx';
describe('./src/components/Layouts/RegisterLayout.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Layouts/RegisterLayout />);
  });
});
