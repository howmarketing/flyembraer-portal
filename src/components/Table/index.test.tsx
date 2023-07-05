import { render } from 'next-test-utils';
import  from './src/components/Table/index.tsx';
describe('./src/components/Table/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Table/index />);
  });
});
