import { render } from 'next-test-utils';
import  from './src/components/HelpPopoverButton/index.tsx';
describe('./src/components/HelpPopoverButton/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/HelpPopoverButton/index />);
  });
});
