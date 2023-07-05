import { render } from 'next-test-utils';
import  from './src/components/Dropdown/index.tsx';
describe('./src/components/Dropdown/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Dropdown/index />);
  });
});
