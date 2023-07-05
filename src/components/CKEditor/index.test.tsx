import { render } from 'next-test-utils';
import  from './src/components/CKEditor/index.tsx';
describe('./src/components/CKEditor/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/CKEditor/index />);
  });
});
