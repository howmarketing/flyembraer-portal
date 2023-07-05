import { render } from 'next-test-utils';
import  from './src/components/LinkCardsSection/index.tsx';
describe('./src/components/LinkCardsSection/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/LinkCardsSection/index />);
  });
});
