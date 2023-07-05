import { render } from 'next-test-utils';
import  from './src/components/Dropzone/index.tsx';
describe('./src/components/Dropzone/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Dropzone/index />);
  });
});
