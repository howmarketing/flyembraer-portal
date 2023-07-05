import { render } from 'next-test-utils';
import  from './src/components/AutoCompleteCompany/index.tsx';
describe('./src/components/AutoCompleteCompany/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/AutoCompleteCompany/index />);
  });
});
