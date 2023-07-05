import { render } from 'next-test-utils';
import  from './src/components/Checkbox/index.tsx';
describe('./src/components/Checkbox/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Checkbox/index />);
  });
});
