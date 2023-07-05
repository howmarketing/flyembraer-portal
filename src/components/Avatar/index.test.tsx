import { render } from 'next-test-utils';
import  from './src/components/Avatar/index.tsx';
describe('./src/components/Avatar/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Avatar/index />);
  });
});
