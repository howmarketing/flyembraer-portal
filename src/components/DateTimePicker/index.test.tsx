import { render } from 'next-test-utils';
import  from './src/components/DateTimePicker/index.tsx';
describe('./src/components/DateTimePicker/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/DateTimePicker/index />);
  });
});
