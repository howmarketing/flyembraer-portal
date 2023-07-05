import { render } from 'next-test-utils';
import  from './src/components/Layouts/LayoutDefault.tsx';
describe('./src/components/Layouts/LayoutDefault.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Layouts/LayoutDefault />);
  });
});
