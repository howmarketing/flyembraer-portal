import { render } from 'next-test-utils';
import  from './src/components/Table/TableRadio.tsx';
describe('./src/components/Table/TableRadio.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Table/TableRadio />);
  });
});
