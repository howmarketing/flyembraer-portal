import { render } from 'next-test-utils';
import  from './src/components/SearchField/stories.tsx';
describe('./src/components/SearchField/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SearchField/stories />);
  });
});
