import { render } from 'next-test-utils';
import  from './src/components/Text/stories.tsx';
describe('./src/components/Text/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Text/stories />);
  });
});
