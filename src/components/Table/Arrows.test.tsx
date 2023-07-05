import { render } from 'next-test-utils';
import  from './src/components/Table/Arrows.tsx';
describe('./src/components/Table/Arrows.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Table/Arrows />);
  });
});
