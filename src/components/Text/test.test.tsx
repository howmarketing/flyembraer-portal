import { render } from 'next-test-utils';
import  from './src/components/Text/test.tsx';
describe('./src/components/Text/test.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Text/test />);
  });
});
