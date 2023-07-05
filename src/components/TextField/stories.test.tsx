import { render } from 'next-test-utils';
import  from './src/components/TextField/stories.tsx';
describe('./src/components/TextField/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/TextField/stories />);
  });
});
