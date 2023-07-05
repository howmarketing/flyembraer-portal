import { render } from 'next-test-utils';
import  from './src/components/SearchField/index.tsx';
describe('./src/components/SearchField/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SearchField/index />);
  });
});
