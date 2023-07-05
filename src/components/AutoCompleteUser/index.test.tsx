import { render } from 'next-test-utils';
import  from './src/components/AutoCompleteUser/index.tsx';
describe('./src/components/AutoCompleteUser/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/AutoCompleteUser/index />);
  });
});
