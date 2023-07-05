import { render } from 'next-test-utils';
import  from './src/components/TextArea/index.tsx';
describe('./src/components/TextArea/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/TextArea/index />);
  });
});
