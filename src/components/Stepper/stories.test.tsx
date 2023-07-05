import { render } from 'next-test-utils';
import  from './src/components/Stepper/stories.tsx';
describe('./src/components/Stepper/stories.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Stepper/stories />);
  });
});
