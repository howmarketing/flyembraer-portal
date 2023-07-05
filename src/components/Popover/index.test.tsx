import { render } from 'next-test-utils';
import  from './src/components/Popover/index.tsx';
describe('./src/components/Popover/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Popover/index />);
  });
});
