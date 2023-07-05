import { render } from 'next-test-utils';
import  from './src/components/AlertButton/index.tsx';
describe('./src/components/AlertButton/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/AlertButton/index />);
  });
});
