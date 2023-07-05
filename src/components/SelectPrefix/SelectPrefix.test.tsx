import { render } from 'next-test-utils';
import  from './src/components/SelectPrefix/SelectPrefix.tsx';
describe('./src/components/SelectPrefix/SelectPrefix.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SelectPrefix/SelectPrefix />);
  });
});
