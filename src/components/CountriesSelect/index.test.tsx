import { render } from 'next-test-utils';
import  from './src/components/CountriesSelect/index.tsx';
describe('./src/components/CountriesSelect/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/CountriesSelect/index />);
  });
});
