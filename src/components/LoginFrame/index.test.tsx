import { render } from 'next-test-utils';
import  from './src/components/LoginFrame/index.tsx';
describe('./src/components/LoginFrame/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/LoginFrame/index />);
  });
});
