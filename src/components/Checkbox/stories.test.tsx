import { render } from 'next-test-utils';
import  from './src/components/Checkbox/stories.tsx';
describe('./src/components/Checkbox/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Checkbox/stories />);
  });
});
