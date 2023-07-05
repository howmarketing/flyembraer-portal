import { render } from 'next-test-utils';
import  from './src/components/Text/index.tsx';
describe('./src/components/Text/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Text/index />);
  });
});
