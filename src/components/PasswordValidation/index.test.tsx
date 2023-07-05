import { render } from 'next-test-utils';
import  from './src/components/PasswordValidation/index.tsx';
describe('./src/components/PasswordValidation/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/PasswordValidation/index />);
  });
});
