import { render } from 'next-test-utils';
import  from './src/components/Select/stories.tsx';
describe('./src/components/Select/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Select/stories />);
  });
});
