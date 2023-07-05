import { render } from 'next-test-utils';
import  from './src/components/SelectAction/SelectAction.tsx';
describe('./src/components/SelectAction/SelectAction.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectAction/SelectAction />);
  });
});
