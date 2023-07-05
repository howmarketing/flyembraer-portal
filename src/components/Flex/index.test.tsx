import { render } from 'next-test-utils';
import  from './src/components/Flex/index.tsx';
describe('./src/components/Flex/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Flex/index />);
  });
});
