import { render } from 'next-test-utils';
import  from './src/components/Footer/index.tsx';
describe('./src/components/Footer/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Footer/index />);
  });
});
