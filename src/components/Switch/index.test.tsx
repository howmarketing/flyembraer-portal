import { render } from 'next-test-utils';
import  from './src/components/Switch/index.tsx';
describe('./src/components/Switch/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Switch/index />);
  });
});
