import { render } from 'next-test-utils';
import  from './src/components/UpcomingMessage/index.tsx';
describe('./src/components/UpcomingMessage/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/UpcomingMessage/index />);
  });
});
