import { render } from 'next-test-utils';
import  from './src/components/modals/Confirmation/index.tsx';
describe('./src/components/modals/Confirmation/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/modals/Confirmation/index />);
  });
});
