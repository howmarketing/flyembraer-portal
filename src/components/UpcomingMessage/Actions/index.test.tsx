import { render } from 'next-test-utils';
import  from './src/components/UpcomingMessage/Actions/index.tsx';
describe('./src/components/UpcomingMessage/Actions/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/UpcomingMessage/Actions/index />);
  });
});
