import { render } from 'next-test-utils';
import  from './src/components/Card/stories.tsx';
describe('./src/components/Card/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Card/stories />);
  });
});
