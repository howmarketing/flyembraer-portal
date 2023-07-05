import { render } from 'next-test-utils';
import  from './src/components/Breadcrumbs/index.tsx';
describe('./src/components/Breadcrumbs/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Breadcrumbs/index />);
  });
});
