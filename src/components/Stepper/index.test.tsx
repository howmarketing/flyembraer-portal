import { render } from 'next-test-utils';
import  from './src/components/Stepper/index.tsx';
describe('./src/components/Stepper/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Stepper/index />);
  });
});
