import { render } from 'next-test-utils';
import  from './src/components/Spinner/index.tsx';
describe('./src/components/Spinner/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Spinner/index />);
  });
});
