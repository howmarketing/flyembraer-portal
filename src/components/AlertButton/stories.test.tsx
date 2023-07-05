import { render } from 'next-test-utils';
import  from './src/components/AlertButton/stories.tsx';
describe('./src/components/AlertButton/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/AlertButton/stories />);
  });
});
