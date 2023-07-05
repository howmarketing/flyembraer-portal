import { render } from 'next-test-utils';
import  from './src/components/SectionTitle/index.tsx';
describe('./src/components/SectionTitle/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/SectionTitle/index />);
  });
});
