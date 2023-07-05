import { render } from 'next-test-utils';
import  from './src/components/Tabs/index.tsx';
describe('./src/components/Tabs/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Tabs/index />);
  });
});
