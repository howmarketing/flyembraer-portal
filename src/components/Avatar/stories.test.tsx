import { render } from 'next-test-utils';
import  from './src/components/Avatar/stories.tsx';
describe('./src/components/Avatar/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Avatar/stories />);
  });
});
