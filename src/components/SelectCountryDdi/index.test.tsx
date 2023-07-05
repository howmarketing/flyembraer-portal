import { render } from 'next-test-utils';
import  from './src/components/SelectCountryDdi/index.tsx';
describe('./src/components/SelectCountryDdi/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectCountryDdi/index />);
  });
});
