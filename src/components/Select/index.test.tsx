import { render } from 'next-test-utils';
import  from './src/components/Select/index.tsx';
describe('./src/components/Select/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Select/index />);
  });
});
