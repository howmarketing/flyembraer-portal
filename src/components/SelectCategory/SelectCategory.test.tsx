import { render } from 'next-test-utils';
import  from './src/components/SelectCategory/SelectCategory.tsx';
describe('./src/components/SelectCategory/SelectCategory.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCategory/SelectCategory />);
  });
});
