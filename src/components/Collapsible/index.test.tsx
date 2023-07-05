import { render } from 'next-test-utils';
import  from './src/components/Collapsible/index.tsx';
describe('./src/components/Collapsible/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Collapsible/index />);
  });
});
