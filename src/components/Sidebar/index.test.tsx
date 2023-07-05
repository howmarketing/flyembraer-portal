import { render } from 'next-test-utils';
import  from './src/components/Sidebar/index.tsx';
describe('./src/components/Sidebar/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Sidebar/index />);
  });
});
