import { render } from 'next-test-utils';
import  from './src/components/MediaMatch/index.tsx';
describe('./src/components/MediaMatch/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/MediaMatch/index />);
  });
});
