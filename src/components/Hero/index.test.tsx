import { render } from 'next-test-utils';
import  from './src/components/Hero/index.tsx';
describe('./src/components/Hero/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Hero/index />);
  });
});
