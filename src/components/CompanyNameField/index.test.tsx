import { render } from 'next-test-utils';
import  from './src/components/CompanyNameField/index.tsx';
describe('./src/components/CompanyNameField/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/CompanyNameField/index />);
  });
});
