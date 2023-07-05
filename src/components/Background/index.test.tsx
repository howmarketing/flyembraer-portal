import { render } from 'next-test-utils';
import  from './src/components/Background/index.tsx';
describe('./src/components/Background/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Background/index />);
  });
});
