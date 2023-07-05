import { render } from 'next-test-utils';
import  from './src/components/Checkbox/test.tsx';
describe('./src/components/Checkbox/test.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Checkbox/test />);
  });
});
