import { render } from 'next-test-utils';
import  from './src/components/Modal/index.tsx';
describe('./src/components/Modal/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Modal/index />);
  });
});
