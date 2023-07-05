import { render } from 'next-test-utils';
import  from './src/components/Footer/stories.tsx';
describe('./src/components/Footer/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Footer/stories />);
  });
});
