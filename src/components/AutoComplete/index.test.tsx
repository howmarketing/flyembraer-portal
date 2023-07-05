import { render } from 'next-test-utils';
import  from './src/components/AutoComplete/index.tsx';
describe('./src/components/AutoComplete/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/AutoComplete/index />);
  });
});
