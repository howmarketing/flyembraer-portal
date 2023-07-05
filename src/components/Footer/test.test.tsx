import { render } from 'next-test-utils';
import  from './src/components/Footer/test.tsx';
describe('./src/components/Footer/test.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Footer/test />);
  });
});
