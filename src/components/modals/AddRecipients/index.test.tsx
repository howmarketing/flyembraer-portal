import { render } from 'next-test-utils';
import  from './src/components/modals/AddRecipients/index.tsx';
describe('./src/components/modals/AddRecipients/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/modals/AddRecipients/index />);
  });
});
